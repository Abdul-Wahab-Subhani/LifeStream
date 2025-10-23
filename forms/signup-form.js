document
  .getElementById("loginform")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      firstName: document.getElementById("First-name").value,
      lastName: document.getElementById("Last-name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      confirmPassword: document.getElementById("Confirm password").value,
      phone: document.getElementById("phone").value,
      bloodType: document.getElementById("Blood-type").value,
    };

    fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        window.location.href = "index.html";
      })
      .catch((error) => console.error("Error:", error));
  });
