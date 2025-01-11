document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents form from refreshing the page
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Simulate successful submission
    document.getElementById('responseMessage').textContent = `Thank you, ${name}! Your information has been received.`;
    document.getElementById('userForm').reset();  // Reset the form after submission
});
