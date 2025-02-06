

// Handle the "YES" button click
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('responseMessage').innerText = "Yay! I'm so happy! Let's make beautiful memories together my love ❤️‍🩹!";
    document.getElementById('responseMessage').style.opacity = 1;
    document.body.style.backgroundColor = "#ffeb3b"; // Change background color on "Yes"
    document.body.style.transition = "background-color 0.5s"; // Smooth transition
});

// Handle the "NO" button click
document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('responseMessage').innerText = "Oh no! 😭 But I still love you! You mean the world to me!";
    document.getElementById('responseMessage').style.opacity = 1;
    document.body.style.backgroundColor = "#f44336"; // Change background color on "No"
    document.body.style.transition = "background-color 0.5s"; // Smooth transition
});