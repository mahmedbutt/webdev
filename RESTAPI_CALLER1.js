import axios from "axios";

function GetProjects(params) {
  return axios({ method: "GET", url: "http://localhost:3000/" });
}

function PostProject(params) {
  return axios({
    method: "POST",
    url: "http://localhost:3000/signin",
    data: params,
    body: JSON.stringify(params.username, params.password),
  });
}

export { GetProjects, PostProject };
