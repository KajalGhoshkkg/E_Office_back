const express = require("express");
const {
  SquadronCreation,
  getSquadronDetails,
  deleteSquadron,
  updateSquadronDetails,
} = require("../controller/squadronController");

const SquadronRoute = express.Router();

SquadronRoute.post("/createsquadron", SquadronCreation);
SquadronRoute.get("/getsquadrondetails", getSquadronDetails);
SquadronRoute.delete("/deletesquadron/:id", deleteSquadron);
SquadronRoute.patch("/updatesquadrondetails/:id", updateSquadronDetails);

module.exports = SquadronRoute;
