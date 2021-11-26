import React, { Component } from "react";
import { GetProjectsFromMongoDB } from "./RESTAPI_CALLER";
import "./Projects.css";

class PROJECTS_DISPLAY extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], new_project: "" };
  }
  render() {
    return (
      <div>
        <div>
          <ul>
            {this.state.projects.map((project) => {
              return (
                <div className="divmain" key={project.id}>
                  <div style={{ padding: "20px 0px" }}>
                    <img src={project.image} alt=""></img>
                  </div>
                  <div className="divtext">
                    <p className="title">{project.title}</p>
                    <p className="partner">{project.Partner}</p>
                    <p className="lp">{project.Learning_Product}</p>
                    <p className="rating">{project.Rating}</p>
                    <p className="level">{project.Level}</p>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("Projects_Display mounted.");
    this.FetchProjectsFromMongoDB();
  }

  FetchProjectsFromMongoDB() {
    GetProjectsFromMongoDB().then((response) => {
      console.log(response.data);
      this.setState({ projects: response.data });
    });
    return [];
  }
}

export default PROJECTS_DISPLAY;
