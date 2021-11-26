const mongoose = require("mongoose");

const project_Schema = mongoose.Schema;

const new_proj_schema = new project_Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  date_posted: { type: Date },
  number_of_bids: { type: Number },
});

const Project_model = mongoose.model("projects", new_proj_schema);

module.exports.Project_model = Project_model;
