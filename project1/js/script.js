



function registerUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // Check if user already exists
    if (localStorage.getItem(username)) {
        alert("Username already exists");
        return false;
    }

    let user = {
        name: name,
        email: email,
        username: username,
        password: password,
        role: "user"
    };

    // Store user data
    localStorage.setItem(username, JSON.stringify(user));

    alert("Signup successful! Please login.");
    window.location.href = "../html/login.html";
    return false;
}

function login() {
    let username = document.getElementById("uname").value;
    let password = document.getElementById("pass").value;

    // Admin login (fixed)
    if (username === "admin" && password === "admin123") {
        localStorage.setItem("loggedInUser", "admin");
        window.location.href = "../html/dashboard.html";
        return;
    }

    let storedUser = localStorage.getItem(username);

    if (!storedUser) {
        alert("User not found. Please signup.");
        return;
    }

    let user = JSON.parse(storedUser);

    if (user.password === password) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "user_dashboard.html";
    } else {
        alert("Invalid password");
    }
}

function logout() {
    alert("Logged out successfully");
    window.location.href = "../html/login.html";
}
function updatePrice() {
    let roomPrice = document.getElementById("room").value;
    let guests = document.getElementById("guests").value;

    if (roomPrice && guests) {
        let total = roomPrice * guests;
        document.getElementById("price").innerText = total;
    } else {
        document.getElementById("price").innerText = 0;
    }
}

function bookRoom() {
    let loggedUser = localStorage.getItem("loggedInUser");

    if (!loggedUser) {
        alert("Please login first");
        window.location.href = "login.html";
        return;
    }

    let bookingData = {
        guestName: document.getElementById("name").value,
        roomType: document.getElementById("room").selectedOptions[0].text,
        guests: document.getElementById("guests").value,
        checkIn: document.getElementById("checkin").value,
        checkOut: document.getElementById("checkout").value,
        totalAmount: document.getElementById("price").innerText,
        status: "Confirmed"
    };

    // 🔑 STORE booking using username
    localStorage.setItem("booking_" + loggedUser, JSON.stringify(bookingData));

    alert("Booking Successful!");
    window.location.href = "user_dashboard.html";
}

