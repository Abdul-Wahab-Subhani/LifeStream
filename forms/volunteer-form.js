document
  .getElementById("volunteer-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      contact: document.getElementById("contact").value,
      countryCode: document.getElementById("country-code").value,
      availability: document.getElementById("availability").value,
      role: document.getElementById("roles").value,
      campName: document.getElementById("camp-name").value,
      campLocation: document.getElementById("camp-location").value,
      campNotes: document.getElementById("camp-notes").value,
    };

    fetch("http://localhost:3000/api/volunteers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        document.getElementById("popup").style.display = "flex";
      })
      .catch((error) => console.error("Error:", error));
  });

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
