function AddressBook() {
  this.contacts = [];
  this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb) {
  let self = this;

  // fake API call
  setTimeout(function() {
    self.initialComplete = true;
    if(cb) {
      return cb();
    }
  }, 3);
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index) {
  return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(contact) {
  this.contacts.splice(contact, 1);
}