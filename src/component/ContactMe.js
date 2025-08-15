import {useState, useRef} from "react";

const ContactMe = () => {

    // Validity status of inputs
    const [inputStatus, setInputStatus] = useState({
        fullName: false,
        email: false,
        message: false
    });

    // Enables button
    const [buttonStatus, setButtonStatus] = useState(false);
    const formRef = useRef(null);

    // Runs every input
    const checkInput = (inputType) => {
        const formValidity = formRef.current.checkValidity();
        // Enables button when form is valid
        setButtonStatus(formValidity);

        // Sets specific form field to validated
        setInputStatus((prev) => ({
            ...prev,
            [inputType]: true
        }));
    };

    // Submit Form
    const handleFormSubmit = (form) => {
        form.preventDefault();
        const formValidity = formRef.current.checkValidity();
        if (formValidity) {
            alert("Message has been submitted successfully!");
            setButtonStatus(false);
            formRef.current.reset();
            setInputStatus ({
                fullName: false,
                email: false,
                message: false
            });
        }
    };

  return (
    <div className="">
      <div class="content-container" id="contact-dev">
            <div>
                <h1 class="header-content">Contact Me</h1>
                <form ref={formRef} class="needs-validation" onSubmit={handleFormSubmit} novalidate>
                    <fieldset>
                        <div class={`mb-3 ${inputStatus.fullName ? "was-validated": ""}`}>
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Name" onChange={() => checkInput("fullName")} required/>
                            <div class="invalid-feedback">
                                Please type your name.
                            </div>
                        </div>
                        <div class={`mb-3 ${inputStatus.email ? "was-validated": ""}`}>
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="name@example.com" pattern="^[^@]+@[^@]+\.[^@]{2,}$" onChange={() => checkInput("email")} required/>
                            <div class="invalid-feedback">
                                Please provide a valid email address.
                            </div>
                        </div>
                        <div class={`mb-3 ${inputStatus.message ? "was-validated": ""}`}>
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" id="message" rows="3" onChange={() => checkInput("message")} required></textarea>
                            <div class="invalid-feedback">
                                Please don't forget your message.
                            </div>
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary" disabled={buttonStatus? false : true}>Submit</button>
                        </div> 
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ContactMe;