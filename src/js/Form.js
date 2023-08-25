const Form = (() => {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");

  const confirmationMessage = document.querySelector(".success");

  const errors = {
    missingError: "This field is required.",
    emailError: "Please enter a valid email address: 'example@gmail.com'",
  };

  const displayError = (id, errorMessage) => {
    const error = document.querySelector(`.${id}-error`);

    error.style.display = "block";
    error.textContent = errorMessage;
  };

  const hideError = (id) => {
    const error = document.querySelector(`.${id}-error`);

    error.style.display = "none";
    error.textContent = "";
  };

  const validateFields = () => {
    // Check name field
    if (nameField.validity.valueMissing) {
      displayError("name", errors.missingError);
    } else {
      hideError("name");
    }

    // Check email field
    if (emailField.validity.valueMissing) {
      displayError("email", errors.missingError);
    } else if (emailField.validity.typeMismatch) {
      displayError("email", errors.emailError);
    } else {
      hideError("email");
    }

    // Check message field
    if (messageField.validity.valueMissing) {
      displayError("message", errors.missingError);
    } else {
      hideError("message");
    }
  };

  const displayConfirmation = () => {
    confirmationMessage.style.display = "block";
  };

  return { validateFields, displayConfirmation };
})();

export default Form;
