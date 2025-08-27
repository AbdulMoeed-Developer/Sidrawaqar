(function() {
    emailjs.init({
        publicKey: "K760zg9DETBtHHsHX",
    });
})();

window.onload = function() {
    const form = document.getElementById('contact-form');
    const successModalEl = document.getElementById('successModal');
    const errorModalEl = document.getElementById('errorModal');

    const successModal = new bootstrap.Modal(successModalEl);
    const errorModal = new bootstrap.Modal(errorModalEl);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_rpw12fm', 'template_cvzgpgn', this)
            .then(() => emailjs.sendForm('service_rpw12fm', 'template_fqleaf4', this))
            .then(() => {
                successModal.show();
                form.reset();
            })
            .catch((error) => {
                console.error("Email send failed:", error);
                errorModal.show();
            });
    });
};
