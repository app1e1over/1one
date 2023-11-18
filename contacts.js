// contacts.js
var path = require("path");
const fs = require("fs").promises;
const contactsPath = "./db/contacts.json";

// TODO: задокументувати кожну функцію
async function listContacts() {
  return await fs.readFile(contactsPath).then((v) => JSON.parse(v.toString()));
  // ...твій код. Повертає масив контактів.
}

async function getContactById(contactId) {
  let res = null;
  (await listContacts()).forEach((el) => {
    if (res !== null) {
      return;
    }
    if (el.id === contactId) {
      res = el;
    }
  });
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  return res;
}

async function removeContact(contactId) {
  let res = null;
  let newArr = [];
  (await listContacts()).forEach((el) => {
    if (el.id === contactId) {
      res = el;
    } else {
      newArr.push(el);
    }
  });
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  if (res !== null) {
    fs.writeFile(contactsPath, JSON.stringify(newArr));
  }
  return res;

  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
    let id = name.toString(16)+phone.toString(16)
    let res = {id, name, email, phone}
    fs.writeFile(contactsPath, JSON.stringify([...(await listContacts()), res]));
    return res;
  // ...твій код. Повертає об'єкт доданого контакту.
}
module.exports = {
    listContacts,
    removeContact,
    addContact,
    getContactById
}