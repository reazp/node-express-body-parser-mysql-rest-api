//routes/contacts.js
const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");
router.get("/", contactsController.listContacts);
//Dynamic routing
router.get("/:id", contactsController.showContact);
router.delete("/:id", contactsController.deleteContact);
router.post("/", contactsController.createContact);
router.put("/:id", contactsController.updateContact);
module.exports = router;
