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

emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

const templateParameters = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
};

emailjs
    .send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, templateParameters)
    .then(() => {
        console.log('Message sent successfully.');
        alert('Thank you for your feedback!');
        e.target.reset();
    })
    .catch((error) => {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again.');
    });