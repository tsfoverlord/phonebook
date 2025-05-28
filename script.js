const uname = document.getElementById("name");
const number = document.getElementById("phone");
const email = document.getElementById("email");
const table = document.querySelector('tbody');
const submit = document.getElementById('add');
const sort_btn = document.getElementById('sort-btn');

let asc = true;

let contacts = [{name:'Admin', phone:1234567890, mail:'admin@admin.com'},               
];
submit.addEventListener("click",(e) =>{
    e.preventDefault();
    const name = uname.value;
    const phone = number.value;
    const mail = email.value;
    contacts.push({name, phone, mail});
    let row = document.createElement('tr');
    row.innerHTML = `<td>${name}</td>
                     <td>${phone}</td>
                     <td>${mail}</td>`
    table.appendChild(row);
});

sort_btn.addEventListener("click" , (e) => {
    // console.log(asc);
    contacts = contacts.sort((c1, c2)=>{
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