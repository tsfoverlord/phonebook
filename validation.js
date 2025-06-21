export default function createValidator() {
    function isValidEmail(email){
        //See RFC 2822 
        //Copied from https://regexr.com/2rhq7
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return regex.test(email);
    }

    function isValidPhoneNumber(phone) {
        //Indian phone numbers
        const regex = /^[6-9]\d{9}$/;
        return regex.test(phone);
    }

    /*
    - Allows names between 2 to 50 characters
    - Disallows numbers, symbols
    */
    function isValidName(name) {
        const regex = /^[A-Za-z\s]{2,50}$/;
        return regex.test(name.trim());
    }

    return {isValidEmail, isValidName, isValidPhoneNumber}
}


