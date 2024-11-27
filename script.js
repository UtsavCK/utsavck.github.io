// const toggleButton = document.getElementsByClassName('toggle-btn')[0]
// const navBarLinks = document.getElementsByClassName('navlinks')[0]

// toggleButton.addEventListener('click',() => {
//     navBarLinks.classList.toggle('active')
// })

// Function to load external HTML content
function loadHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Load the header and footer
loadHTML("header-placeholder", "header.html");
loadHTML("footer-placeholder", "footer.html");

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementsByClassName('toggle-btn')[0];
    const navBarLinks = document.getElementsByClassName('navlinks')[0];

    toggleButton.addEventListener('click', function() {
        navBarLinks.classList.toggle('active');
    });
});
