const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },

  EndDate: {
    type: Date,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
});

const List = mongoose.model("Data", DataSchema);
const TeamSchema = new mongoose.Schema({
  team: {
    type: String,
    // required: true,
  },
  runrate: {
    type: Date,
    // required: true,
  },

  win: {
    type: Date,
    // required: true,
  },
  lose: {
    type: String,
    // required: true,
  },
});

const Teams= mongoose.model("teams", TeamSchema);



module.exports = List,Teams
