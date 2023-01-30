var express = require("express");
var professionalRouter = express.Router();

var db = require("../dbconnection.js");

//get all professionals
professionalRouter.get("", (req, res) => {
  let qry = "select * from professionals";
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      res.send({
        message: "all professionals data",
        data: result,
      });
    }
  });
});

//get single professional
professionalRouter.get("/:id", (req, res) => {
  let id = req.params.id;
  let qry = `select * from professionals where id = ${id}`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
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

//load professional sessions
professionalRouter.get("/sessions/:professionalId", (req, res) => {
  let professionalId = req.params.professionalId;
  let qry = `select professional_book.id, name, slot, is_available from professional_book inner join professionals on professionals.id = professional_book.fk_professional where fk_professional = ${professionalId}`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
      res.send({
        message: "Error",
        data: err,
      });
    }

    result = result.map((row) => {
      row.day = row.slot.substring(0, 3);
      row.time = row.slot.substring(3);
      row.is_available == 1
        ? (row.is_available = true)
        : (row.is_available = false);
      return row;
    });

    result.sort((a, b) => a.time - b.time);

    res.send({
      message: "Professional book",
      data: result,
    });
  });
});

module.exports = professionalRouter;
