document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        //  let's display a message.
        alert("Registration submitted!");
    });
});
