import utils from "./utils.js"

const phonebook = document.getElementById('phonebook');
let contact = {};

document.addEventListener("DOMContentLoaded", function() {
    utils.displayPhonebook(phonebook, contact);
});

document.getElementById('form-add').addEventListener('submit', function(e) {
    e.preventDefault();
})
document.getElementById('form-search').addEventListener('submit', function(e) {
    e.preventDefault();
})

// Event listener for add button's click event
document.getElementById('form-add').addEventListener('submit', function() {
    const name = document.getElementById('input-name');
    if (name.value in contact){
        window.alert('Name already exists!');
        name.focus();
    }
    else {
        const phone = document.getElementById('input-phone'); 
        contact[name.value] = phone.value;
        utils.displayPhonebook(phonebook, contact);
        name.value = "";
        phone.value = "";
        name.focus();
    }
})

// Event listener for find button's click event
document.getElementById('btn-find').addEventListener('click', function(){
    if (document.getElementById('input-search').value != ""){
        const found = utils.findContact(document.getElementById('input-search').value, contact);
        if (found != null){
            utils.displayPhonebook(phonebook, found);
        }
        else {
            utils.displayPhonebook(phonebook, 'Nothing matched your search!!!', 1)
        }
    }
});

// If user delete everything in the search box, reload the phonebook
document.getElementById('input-search').addEventListener('keyup', function(event) {
    const key = event.key;
    if(key === "Delete" || key === "Backspace"){
        const value = document.getElementById('input-search').value;
        if (value == ""){
            utils.displayPhonebook(phonebook, contact);
        }
    }
})

document.getElementById('btn-delete').addEventListener('click', function(){
    contact = utils.getUniquePhonebook(contact);
    console.log(contact);
    utils.displayPhonebook(phonebook, contact);
})

