const fs = require("fs/promises");
const readData = require("./readData");
const PATH = require("./contactsPath");

const crypto = require("crypto");

const addContact = async (name, email, phone) => {
  const contacts = await readData();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(PATH, JSON.stringify(contacts, null, 2));
  return newContact;
};
module.exports = addContact;
