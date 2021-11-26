import React, { Component } from "react";
import "./file.css";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";
import image5 from "./5.png";
import image6 from "./6.png";
import image7 from "./7.png";
import image8 from "./8.png";
import image9 from "./9.png";
import image10 from "./10.png";

class ListTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [0, 1, 2, 3, 4],

      arr_withObjects: [
        {
          Image: <img src={image1} alt="IMG" />,
          title: "Web Design for Everybody: Basics of Web Development & Coding",
          Partner: "University Of Michigan",
          Learning_Product: "SPECIALIZATION",
          Level: "Beginner",
          Rating: "4.7",
        },
        {
          Image: <img src={image2} alt="IMG" />,
          title: "HTML, CSS, and Javascript for Web Developers",
          Partner: "Johns Hopkins University",
          Learning_Product: "COURSE",
          due_date: new Date("April 13, 2021 10:00:00"),
        },
        {
          Image: <img src={image3} alt="IMG" />,
          title: "Full-Stack Web Development with React",
          Partner: "The Hong Kong University of Science and Technology",
          Learning_Product: "SPECIALIZATION",
          due_date: new Date("April 13, 2021 10:00:00"),
        },

        {
          Image: <img src={image4} alt="IMG" />,
          title: "Introduction to Web Development",
          Partner: "University of California, Davis",
          Learning_Product: "COURSE",
          due_date: new Date("April 13, 2021 10:00:00"),
        },

        {
          Image: <img src={image5} alt="IMG" />,
          title: "IBM Full Stack Cloud Developer",
          Partner: "IBM",
          Learning_Product: "PROFESSIONAL CERTIFICATE",
          due_date: new Date("April 13, 2021 10:00:00"),
        },

        {
          Image: <img src={image6} alt="IMG" />,
          title: "Full Stack Web Development with Angular",
          Partner: "The Hong Kong University of Science and Technology",
          Learning_Product: "SPECIALIZATION",
          due_date: new Date("April 13, 2021 10:00:00"),
        },

        {
          Image: <img src={image7} alt="IMG" />,
          title: "Web Applications for Everybody",
          Partner: "University Of Michigan",
          Learning_Product: "SPECIALIZATION",
          due_date: new Date("April 13, 2021 10:00:00"),
        },

        {
          Image: <img src={image8} alt="IMG" />,
          title: "Responsive Website Development and Design",
          Partner: "Goldsmiths, University of London",
          Learning_Product: "SPECIALIZATION",
          due_date: new Date("April 13, 2021 10:00:00"),
        },

        {
          Image: <img src={image9} alt="IMG" />,
          title: "Google IT Support",
          Partner: "Google",
          Learning_Product: "PROFESSIONAL CERTIFICATE",
          due_date: new Date("April 13, 2021 10:00:00"),
        },

        {
          Image: <img src={image10} alt="IMG" />,
          title: "Django for Everybody",
          Partner: "University Of Michigan",
          Learning_Product: "SPECIALIZATION",
          due_date: new Date("April 13, 2021 10:00:00"),
        },
      ],
    };
  }

  render() {
    return (
      <Multiple_Projects
        projects={this.state.arr_withObjects}
      ></Multiple_Projects>
    );
  }

  doubleElement() {
    let arr2 = [];
    for (let j = 0; j < this.state.arr.length; j++) {
      arr2[j] = this.state.arr[j] + this.state.arr[j];
    }
    this.setState({ arr: arr2 });
    console.log(this.state.arr.length);
  }

  doubleElement_map() {
    let arr2 = [];

    arr2 = this.state.arr.map((element) => element + element);

    this.setState({ arr: arr2 });
  }
}

function Multiple_Projects(props) {
  let projs = props.projects;

  let list_items = projs.map((proj) => (
    <ul>
      <li key={proj.title}>
        <div className="div_arr ">
          <div>
            <p className="div_img">{proj.Image}</p>
          </div>
          <div className="div_details">
            <h2 className="div_title">{proj.title}</h2>
            <p className="div_partner">{proj.Partner}</p>
            <div className="div_lp">{proj.Learning_Product}</div>
          </div>
        </div>
      </li>
    </ul>
  ));
  console.log(list_items);
  return <ul>{list_items}</ul>;
}
export default ListTester;
