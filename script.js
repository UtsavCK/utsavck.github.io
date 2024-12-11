document.addEventListener('DOMContentLoaded', function () {
    // Function to load HTML content into a specific element
    function loadHTML(id, url) {
        return fetch(url)
            .then(response => response.text())
            .then(data => {
                const element = document.getElementById(id);
                if (element) {
                    element.innerHTML = data;
                } else {
                    console.error(`Element with id "${id}" not found.`);
                }
            })
            .catch(error => console.error('Error loading HTML:', error));
    }

    // Load header and footer dynamically
    Promise.all([
        loadHTML('header-placeholder', 'header.html'),
        loadHTML('footer-placeholder', 'footer.html')
    ]).then(() => {
        // Delay attaching event listeners until header and footer are loaded
        attachToggleButtonEvent();
    }).catch(error => {
        console.error('Error loading header or footer:', error);
    });

    function attachToggleButtonEvent() {
        const toggleButton = document.querySelector('.toggle-btn');
        const navBarLinks = document.querySelector('.navlinks');

        if (!toggleButton) {
            console.error('Toggle button not found.');
            return;
        }
        if (!navBarLinks) {
            console.error('Nav links element not found.');
            return;
        }

        toggleButton.addEventListener('click', function () {
            // Toggle visibility of navigation links
            navBarLinks.classList.toggle('active');
        });
    }
});

if(document.querySelector('#about_main')){
    const downloadCvButton = document.getElementById('download-cv-btn');

    // Handle Download CV button click
    downloadCvButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'Images/UtsavKayastha_CV.pdf'; // Update with the actual path to your CV file
        link.download = 'UtsavCK_CV.pdf'; // Update with desired file name
        link.click();
    });
}