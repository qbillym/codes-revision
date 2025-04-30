
const form = document.getElementById("my-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirm").value.trim();
  const college = document.getElementById("college").value.trim();
  const isChecked = document.getElementById("check").checked;

  if (name === "") {
    alert("Please fill the name.");
    document.getElementById("name").focus();
    return false;
  } else if (address === "") {
    alert("Please fill the address.");
    document.getElementById("address").focus();
    return false;
  } else if (email === "") {
    alert("Please fill the email.");
    document.getElementById("email").focus();
    return false;
  } else if (password === "") {
    alert("Please fill the password.");
    document.getElementById("password").focus();
    return false;
  } else if (confirm === "") {
    alert("Please confirm your password.");
    document.getElementById("confirm").focus();
    return false;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    document.getElementById("password").focus();
    return false;
  } else if (password !== confirm) {
    alert("Passwords do not match.");
    document.getElementById("confirm").focus();
    return false;
  } else if (college === "") {
    alert("Please fill the college.");
    document.getElementById("college").focus();
    return false;
  } else if (!isChecked) {
    alert("You must agree to the terms by checking the checkbox");
    document.getElementById("check").focus();
    return false;
  }

  alert("Form submitted successfully!");
  form.reset();
});

