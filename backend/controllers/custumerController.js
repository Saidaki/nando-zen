var express = require("express");
var custumerRouter = express.Router();

var db = require("../dbconnection.js");

//get all custumers
custumerRouter.get("", (req, res) => {
  let qry = "select * from custumers";
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      res.send({
        message: "all custumers data",
        data: result,
      });
    }
  });
});

//get single custumer
custumerRouter.get("/:id", (req, res) => {
  let id = req.params.id;
  let qry = `select * from custumers where id = ${id}`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
      res.send({
        message: "Error",
        data: err,
      });
    }
    if (result.length > 0) {
      res.send({
        message: "single data",
        data: result,
      });
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

//load custumer sessions
custumerRouter.get("/sessions/:custumerId", (req, res) => {
  let custumerId = req.params.custumerId;
  let qry = `SELECT custumer_professional_book.id, professional_book.id AS id_prof_book, slot, professionals.name
  FROM custumer_professional_book 
  INNER JOIN professional_book ON professional_book.id = custumer_professional_book.fk_professional_book 
  INNER JOIN professionals ON professionals.id = professional_book.fk_professional
  WHERE custumer_professional_book.fk_custumer = ${custumerId}`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
      res.send({
        message: "Error",
        data: err,
      });
    }
    if (result.length > 0) {
      result = result.map((row) => {
        row.day = row.slot.substring(0, 3);
        row.time = row.slot.substring(3);
        return row;
      });

      res.send({
        message: "Professional book",
        data: result,
      });
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

module.exports = custumerRouter;
