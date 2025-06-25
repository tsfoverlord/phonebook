const uname = document.getElementById("name");
const number = document.getElementById("phone");
const email = document.getElementById("email");
const table = document.querySelector('tbody');
const submit = document.getElementById('add');
const sort_btn = document.getElementById('sort-btn');

const nameErrorSpan = document.querySelector('#name-error');
const emailErrorSpan = document.querySelector('#email-error');
const phoneErrorSpan = document.querySelector('#phone-error');


import createContact from "./model.js";

let asc = true;
const { contact } = createContact('Admin', '9234567890', 'admin@admin.com');
let contacts = [contact];
renderTable();
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const name = uname.value;
    const phone = number.value;
    const mail = email.value;
    const { errors, contact } = createContact(name, phone, mail);
    //If errors object is empty
    if (Object.keys(errors).length === 0) {
        clearErrorMessages();
        contacts.push(contact);
        let row = document.createElement('tr');
        row.innerHTML = `<td>${name}</td>
                     <td>${phone}</td>
                     <td>${mail}</td>`
        table.appendChild(row);

    }
    else {
        setErrorMessage(nameErrorSpan, errors.name || "");
        setErrorMessage(phoneErrorSpan, errors.phone || "");
        setErrorMessage(emailErrorSpan, errors.mail || "");
    }

});

sort_btn.addEventListener("click", (e) => {
    // console.log(asc);
    contacts = contacts.sort((c1, c2) => {
        console.table(c1);
        return asc ? c1.name.localeCompare(c2.name, 'en') : c2.name.localeCompare(c1.name, 'en');
    });
    asc = !asc;
    renderTable();
});

function renderTable() {
    // console.table(contacts);
    table.innerHTML = "";
    contacts.forEach((contact) => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${contact.name}</td>
                     <td>${contact.phone}</td>
                     <td>${contact.mail}</td>`
        table.appendChild(row);
    });
}

function setErrorMessage(span, msg) {
    span.textContent = msg;
}
function clearErrorMessages() {
    setErrorMessage(nameErrorSpan, '');
    setErrorMessage(emailErrorSpan, '');
    setErrorMessage(phoneErrorSpan, '');
}
