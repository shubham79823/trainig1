document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can add your authentication logic
    // For demonstration, we'll just log the values to the console
    console.log('Email:', email);
    console.log('Password:', password);

    // You can also show an alert or redirect the user
    alert('Login attempted with Email: ' + email);
});