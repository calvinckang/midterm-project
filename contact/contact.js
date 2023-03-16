const SERVER_URL = "http://localhost:3001/contacts";

window.onload = () => {
    function _handleSubmitButton() {
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const phone = document.querySelector("#phone").value;
        const message = document.querySelector("#message").value;

        const formData = {
            name,
            email,
            phone,
            message
        }

        _validateForm(formData);
    }

    function _validateForm(formData) {
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (formData.name === "Ironhack") {
            alert("You cannot be Ironhack, because I am Ironhack.");
            document.querySelector("#name").focus();
        } else if (formData.email.match(mailFormat) || formData.email === "") {
            console.log(formData);
    
            _saveContactData(formData);
        } else {
            alert("You have entered an invalid email address, make sure you type it correctly.");
            document.querySelector("#email").focus();
        }
    }

    function _saveContactData(contact) {
        fetch(SERVER_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
            .catch(err => console.error(err));
    }

    function _bindEvents() {
        const submitButton = document.querySelector(".btn-submit");

        submitButton.addEventListener("click", _handleSubmitButton);
    }

    _bindEvents();
}