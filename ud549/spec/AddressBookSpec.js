// new suite "Address Book"
describe('Address Book', () => {

  let addressBook,
      thisContact;

  beforeEach(() => {

    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  // new spec "should be able to add a contact"
  it('should be able to add a contact', () => {
    
    addressBook.addContact(thisContact);

    expect(addressBook.getContact(0)).toBe(thisContact);

  });

  it('should be able to delete a contact', () => {

    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});


describe ('Async Address Book', function() {
  const addressBook = new AddressBook();

  beforeEach(function(done) {
    addressBook.getInitialContacts(function() {
      done();
    });
  });

  it('should grab initial contacts', function(done) {
    expect(addressBook.initialComplete).toBe(true);
    done();
  });
});