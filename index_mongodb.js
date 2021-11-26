const expressModule = require("express");
const app = expressModule();
const cors = require("cors");

app.use(expressModule.json());
app.use(cors());

app.options("/addproject_mongodb", cors());

const mongoose = require("mongoose");
const projects_collection = require("./Mongo-DB/project");
const project_model = projects_collection.Project_model;

mongoose
  .connect(
    "mongodb://ahmadbutt4260:A12345@cluster0-shard-00-00.e5rgn.mongodb.net:27017,cluster0-shard-00-01.e5rgn.mongodb.net:27017,cluster0-shard-00-02.e5rgn.mongodb.net:27017/coursera?ssl=true&replicaSet=atlas-4tpdh4-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log("Successfully Connected to the Database");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  console.log("/projects page accessed");
  res.header("Access-Control-Allow-Origin", "*");

  project_model
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/signin", (req, res) => {
  console.log("/signin page accessed");
  res.header("Access-Control-Allow-Origin", "*");

  project_model
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post("/addproject_mongodb", (req, res) => {
  console.log("Post method called");
  console.log(req.body);
  res.header("Access-Control-Allow-Origin", "*");

  const new_project = new project_model({
    username: req.body.username,
    password: req.body.password,
  });

  new_project
    .save()
    .then((result) => {
      res.send("Successfully Login:" + result);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(3000, () => {
  console.log("Server Started Listening at port 3000");
});
