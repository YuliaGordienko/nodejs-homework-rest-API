const fs = require("fs/promises")
const readData = require('./readData')
const PATH = require("./contactsPath")
const removeContact = async (contactId) => {
  const contacts = await readData();
  const contactForRemove = contacts.find(
    (contact) => String(contact.id) === String(contactId)
  );
  const result = contacts.filter(
    (contact) => String(contact.id) !== String(contactId)
  );

  await fs.writeFile(PATH, JSON.stringify(result, null, 2));
  return contactForRemove;
};
module.exports = removeContact;