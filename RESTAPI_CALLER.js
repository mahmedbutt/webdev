import axios from "axios";

function GetProjectsFromMongoDB(params) {
  return axios({ method: "GET", url: "http://localhost:3000/" });
}

function ValidateSignin(params) {
  return axios({ method: "GET", url: "http://localhost:3000/signin" });
}

function PostProjecttoMongo(params) {
  const new_project = { username: params.username, password: params.password };

  return axios({
    method: "POST",
    url: "http://localhost:3000/addproject_mongodb",
    data: new_project,
    body: JSON.stringify(params.username, params.password),
  });
}

export { GetProjectsFromMongoDB, PostProjecttoMongo, ValidateSignin };
