const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./db");
const Volunteer = require("./models/Volunteer");
const User = require("./models/User");
const Appointment = require("./models/Appointment");
const OrganizeCamp = require("./models/OrganizeCamp");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files
app.use(express.static('.'));
app.use('/pages', express.static('pages'));

// Serve index.html at root
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

// Redirect all HTML pages from root to pages folder
const htmlPages = [
  'About-Us.html',
  'Appointment.html', 
  'Blog.html',
  'BloodAvailability.html',
  'Campaigns.html',
  'Contact-Us.html',
  'Donation-Eligibility-Checke.html',
  'DonationHistory.html',
  'FAQ.html',
  'Feedback.html',
  'index.html',
  'News.html',
  'Organize-Camp.html',
  'Sign-In.html',
  'Sign-Up.html',
  'Volunteer.html'
];

htmlPages.forEach(page => {
  app.get(`/${page}`, (req, res) => {
    res.redirect(`/pages/${page}`);
  });
});

// Connect to MongoDB
connectDB();

// Routes
app.post("/api/volunteers", (req, res) => {
  const volunteer = new Volunteer(req.body);
  volunteer
    .save()
    .then(() => res.status(201).send("Volunteer registered successfully"))
    .catch((err) => res.status(400).send(err));
});

app.post("/api/signup", async (req, res) => {
  const { firstName, lastName, email, phone, password, bloodType } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).send("Email already exists");
      } else if (existingUser.phone === phone) {
        return res.status(400).send("Phone number already exists");
      }
    }

    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      password,
      bloodType,
    });
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.post("/api/signin", async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
    });
    if (!user) {
      return res.status(400).send("User not found");
    }

    if (user.password !== password) {
      return res.status(400).send("Incorrect password");
    }

    res.status(200).send("Sign-in successful");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.post("/api/appointments", (req, res) => {
  const appointment = new Appointment(req.body);
  appointment
    .save()
    .then(() => res.status(201).send("Appointment request submitted successfully"))
    .catch((err) => res.status(400).send(err));
});

app.post("/api/organize-camp", (req, res) => {
  const organizeCamp = new OrganizeCamp(req.body);
  organizeCamp
    .save()
    .then(() => res.status(201).send("Camp organization request submitted successfully"))
    .catch((err) => res.status(400).send(err));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
