const smt = require("./contacts")
const argv = require('yargs').argv;
function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case 'list':
        smt.listContacts().then(v=>console.log(v))
        break;
  
      case 'get':
        smt.getContactById(id).then(v=>console.log(v))
        break;
  
      case 'add':
        smt.addContact(name, email, phone).then(v=>console.log(v))
        break;
  
      case 'remove':
        smt.removeContact(id).then(v=>console.log(v))
        break;
  
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }
  
  invokeAction(argv);