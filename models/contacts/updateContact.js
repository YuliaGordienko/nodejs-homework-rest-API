const fs = require("fs/promises");
const listContacts = require("./listContacts");
const PATH = require("./contactsPath");

const updateContact = async (contactId, data) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((it) => it.id === contactId);
  if (idx === -1) {
    return null;
  }

  const updatedContact = { ...contacts[idx], ...data };
  contacts[idx] = updatedContact;

  await fs.writeFile(PATH, JSON.stringify(contacts, null, 2));
  return updatedContact;
};

module.exports = updateContact;
