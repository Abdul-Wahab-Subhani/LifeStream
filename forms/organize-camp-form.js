document
  .getElementById("organizeCampForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      city: document.getElementById("city").value,
      organizationName: document.getElementById("organizationName").value,
      hosted: document.getElementById("hosted").value,
      details: document.getElementById("details").value,
    };

    fetch("http://localhost:3000/api/organize-camp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        alert("Camp organization request submitted successfully");
      })
      .catch((error) => console.error("Error:", error));
  });
