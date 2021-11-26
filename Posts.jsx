import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import PostData from "./data.json";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }
  render() {
    return (
      <div>
        {PostData.map((projects, index) => {
          return (
            <div>
              <ReactBootStrap.Card style={{ width: "18rem" }}>
                <div>
                  <ReactBootStrap.Card.Img variant="top" src={projects.image} />
                </div>
                <div className="divtext">
                  <ReactBootStrap.Card.Body variant="right">
                    <ReactBootStrap.Card.Title className="title">
                      {projects.title}
                    </ReactBootStrap.Card.Title>
                    <ReactBootStrap.Card.Text className="level">
                      {projects.Partner}
                      <br /> {projects.Learning_Product}
                      <br />
                      {projects.Rating} <br /> {projects.Level}
                    </ReactBootStrap.Card.Text>
                  </ReactBootStrap.Card.Body>
                </div>
              </ReactBootStrap.Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
