// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); // Replace with your public key

// Attach event listener for the contact form
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const templateParameters = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
    };

    emailjs
        .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParameters)
        .then(
            () => {
                alert("Thank you for your response!");
                e.target.reset();
            },
            (error) => {
                console.error("Failed to send message:", error);
                alert("Failed to send message. Please try again.");
            }
        );
});