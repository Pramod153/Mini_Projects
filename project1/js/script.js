function login() {
    let user = document.getElementById("uname").value;
    let password = document.getElementById("pass").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (user === storedUser && password === storedPass) {
        alert("User login success");
        // window.location.href = "dashboard.html";
    } else {
        alert("Wrong username or password");
    }
}

function registerUser() {
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        document.getElementById("msg").innerText = "Passwords do not match";
        return false;
    }

    // Save user data
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Signup Successful!\nWelcome " + name);
    window.location.href = "../html/login.html";
    return false;
}

