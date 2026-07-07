/*=========================================
        CONTACT FORM - EMAILJS
=========================================*/

(function () {
    emailjs.init({
        publicKey: "scyIBT84m8zqPRs0V",
    });
})();

const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");
const toastIcon = document.getElementById("toastIcon");

function showToast(message, type) {

    if (!toast || !toastMessage || !toastIcon) {
        console.warn("Toast elements not found.");
        return;
    }

    toast.className = "toast " + type;

    toastMessage.textContent = message;

    if (type === "success") {
        toastIcon.className = "bi bi-check-circle-fill";
    } else {
        toastIcon.className = "bi bi-x-circle-fill";
    }

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);
}

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = form.querySelector("button");

        button.disabled = true;
        button.innerHTML = "Sending...";

        emailjs.sendForm(
            "service_v0rhzbi",
            "template_8wutwrh",
            form
        )

        .then(() => {

            form.reset();

            button.disabled = false;
            button.innerHTML = "Send Enquiry";

            showToast(
                "Enquiry sent successfully. We'll contact you shortly.",
                "success"
            );

        })

        .catch((error) => {

            console.error(error);

            button.disabled = false;
            button.innerHTML = "Send Enquiry";

            showToast(
                "Failed to send enquiry. Please try again.",
                "error"
            );

        });

    });

}