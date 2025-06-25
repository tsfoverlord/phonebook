import createValidator from "./validation.js";
const validator = createValidator();
export default function createContact(name, phone, mail) {
    let errors = {};
    let contact = null;
    if (!validator.isValidName(name)) {
        errors.name = "Invalid name";
    }
    if (!validator.isValidEmail(mail)) {
        errors.mail = "Invalid email";
    }
    if (!validator.isValidPhoneNumber(phone)) {
        errors.phone = "Invalid phone number";
    }

    if (Object.keys(errors).length === 0) {
        contact = { name, phone, mail };
    }

    return { errors, contact };

}

