const contacts = require("../models/contact");

const listContacts = function (req, res) {
  contacts.query("select * from contact;", function (error, results) {
    if (error) {
      console.log("error occured", error);
      return res.status(500).send(error);
    }
    res.send(results);
  });
};

const showContact = function (req, res) {
  const contactID = req.params.id;
  //Interpolation
  //Type coarsiton- Concat - Dynamic Typing
  contacts.query("select * from contact where id=" + contactID, function (
    error,
    results
  ) {
    if (error) {
      console.log("error occured", error);
      return res.status(500).send(error);
    }
    res.send(results);
  });
};
const deleteContact = function (req, res) {
  const contactID = req.params.id;
  //Interpolation
  //Type coercion- Concat - Dynamic Typing
  //Template literals
  contacts.query("delete from contact where id=" + contactID, function (
    error,
    results
  ) {
    if (error) {
      console.log("error occured", error);
      return res.status(500).send(error);
    }
    res.send(results);
  });
};

const createContact = function (req, res) {
  const body = req.body;
  const val = `'${body.LastName}','${body.FirstName}','${body.email}','${body.address}'`;
  console.log(val);
  const sql =
    "insert into reaz_contact(LastName,FirstName,email,address) values(" +
    val +
    ")";
  console.log(sql);
  contacts.query(sql, function (error, results) {
    if (error) {
      console.log("error occured", error);
      return res.status(500).send(error);
    }
    console.log(results);
    res.send(results);
  });
};
const updateContact = function (req, res) {
  const contactID = req.params.id;
  const body = req.body;
  contacts.query(
    "update contact set " +
      "LastName= " +
      `'${body.LastName}'` +
      " where ID=" +
      contactID,
    function (error, results) {
      if (error) {
        console.log("error occured", error);
        return res.status(500).send(error);
      }
      console.log(results);
      res.send(results);
    }
  );
};

module.exports = {
  listContacts,
  showContact,
  deleteContact,
  createContact,
  updateContact,
};
