/**
 * Function to create a new name-phone number pair in the phonebook
 * @param {String} name 
 * @param {Number} phone 
 * @returns newly created object with name as key and phone number as value
 *  */
const createElement = (name, phone) => {
    const element = document.createElement('div');
    element.className = "contact";
    element.innerHTML = `<div class="name">${name}</div>
                         <div class="phone">${phone}</div>`;
    return element;
}

/**
 * Function to insert an element into the DOM
 * @param {} container DOM element containing the phonebook
 * @param {*} display_info the element to insert
 * @param {*} code if code=0, insert a name-phone number pair, if code=1 insert the message
 */
const displayPhonebook = (container, display_info, code=0) => {
    container.innerHTML = '';
    if (code == 1){
        const element = document.createElement('div');
        element.className = "not-found";
        element.innerHTML = display_info;
        container.appendChild(element);
    }
    else {
        for (const [name, phone] of Object.entries(display_info)){
            const element = createElement(name, phone);
            container.appendChild(element);
        }
    }
}

/**
 * Function to search the phonebook by name or by number
 * @param {*} input the search string
 * @param {*} contact the phonebook to perform search on
 * @returns the object if found, null if not found
 */
const findContact = (input, contact) => {
    const sanitized_input = String(input).trim().toLowerCase();
    for (const [name, phone] of Object.entries(contact)){
        if (sanitized_input == name || sanitized_input == phone){
            return {[name]: phone};
        }
    }
    return null;
}

/**
 * Function to create a new phonebook with only unique phone numbers    
 * @param {contact} object containing name and phone number 
 * @returns new phonebook with only unique phone numbers
 */
const getUniquePhonebook = (contact) => {
    const res = {};
    for (const [name, phone] of Object.entries(contact)){
        if (!(Object.values(res).includes(phone))){
            res[name] = phone;
        }
    }
    return res;
}


const utils = {
    createElement: createElement,
    findContact: findContact,
    displayPhonebook: displayPhonebook,
    getUniquePhonebook: getUniquePhonebook,
}

export default utils;