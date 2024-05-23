// const toggleButton = document.getElementsByClassName('toggle-btn')[0]
// const navBarLinks = document.getElementsByClassName('navlinks')[0]

// toggleButton.addEventListener('click',() => {
//     navBarLinks.classList.toggle('active')
// })

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementsByClassName('toggle-btn')[0];
    const navBarLinks = document.getElementsByClassName('navlinks')[0];

    toggleButton.addEventListener('click', function() {
        navBarLinks.classList.toggle('active');
    });
});
