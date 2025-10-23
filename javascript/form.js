function confirm() {
    alert("Your Form has been Submitted");
}

function checks() {
    var n = /^[A-Za-z ]{1,100}$/;
    var em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var p = /^[0-9]{2}-[0-9]{3}-[0-9]{7}$/;
    var c = /^[A-Za-z ]{1,100}$/;
    var o = /^[A-Za-z ]{1,100}$/;
    var fn = /^[A-Za-z ]{1,50}$/;
    var ln = /^[A-Za-z ]{1,50}$/;

    // For Name
    if (document.getElementById("name").value == "" || document.getElementById("name").value.search(n) == -1) {
        document.getElementById("err1").innerHTML = "Invalid";
        document.getElementById("err1").style.color = "red";
    }
    else {
        document.getElementById("err1").innerHTML = "Valid";
        document.getElementById("err1").style.color = "green";
    }

    // For Email
    if (document.getElementById("email").value == "" || document.getElementById("email").value.search(em) == -1) {
        document.getElementById("err2").innerHTML = "Invalid";
        document.getElementById("err2").style.color = "red";
    }
    else {
        document.getElementById("err2").innerHTML = "Valid";
        document.getElementById("err2").style.color = "green";
    }

    // For Phone
    if (document.getElementById("phone").value == "" || document.getElementById("phone").value.search(p) == -1) {
        document.getElementById("err3").innerHTML = "Invalid";
        document.getElementById("err3").style.color = "red";
    }
    else {
        document.getElementById("err3").innerHTML = "Valid";
        document.getElementById("err3").style.color = "green";
    }

    // For City
    if (document.getElementById("city").value == "" || document.getElementById("city").value.search(c) == -1) {
        document.getElementById("err4").innerHTML = "Invalid";
        document.getElementById("err4").style.color = "red";
    }
    else {
        document.getElementById("err4").innerHTML = "Valid";
        document.getElementById("err4").style.color = "green";
    }

    // For Organization Name
    if (document.getElementById("organizationName").value == "" || document.getElementById("organizationName").value.search(o) == -1) {
        document.getElementById("err5").innerHTML = "Invalid";
        document.getElementById("err5").style.color = "red";
    }
    else {
        document.getElementById("err5").innerHTML = "Valid";
        document.getElementById("err5").style.color = "green";
    }

    // For First Name
    if (document.getElementById("firstName").value == "" || document.getElementById("firstName").value.search(fn) == -1) {
        document.getElementById("err6").innerHTML = "Invalid";
        document.getElementById("err6").style.color = "red";
    }
    else {
        document.getElementById("err6").innerHTML = "Valid";
        document.getElementById("err6").style.color = "green";
    }

    // // For Last Name
    if (document.getElementById("lastName").value == "" || document.getElementById("lastName").value.search(ln) == -1) {
        document.getElementById("err7").innerHTML = "Invalid";
        document.getElementById("err7").style.color = "red";
    }
    else {
        document.getElementById("err7").innerHTML = "Valid";
        document.getElementById("err7").style.color = "green";
    }
}