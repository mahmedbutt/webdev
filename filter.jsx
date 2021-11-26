import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import "./filter.css";

class FilterTester extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const language = [
      "English",
      "Spanish",
      "Rusian",
      "French",
      "Portuguese(Portugal)",
      "German",
      "Arabic",
      "Vietnamese",
      "Italian",
    ];

    const Level = ["Beginner", "Intermediate", "Mixed", "Advanced"];

    const duration = [
      "Less than 2 Hours",
      "1-3 Months",
      "1-4 Weeks",
      "3+ Months",
    ];

    const subject = [
      "Computer Science",
      "Information Technology",
      "Buisness",
      "Data Science",
      "Social Sciences",
      "Physical Science and Engineering",
      "Arts and Humanities",
      "Health",
      "Personal Development",
    ];

    const skills = [
      "Computer Programming",
      "Web Development",
      "Theoretical Computer Science",
      "Software Engineering",
      "Strategy and Operations",
      "Programming Prnciples",
      "Mathematics",
      "Project MAnagement",
      "Computer Architecture",
    ];

    const partner = [
      "Coursera Project Network",
      "Google Cloud",
      "IBM",
      "University of Michigan",
      "Moscow Institute of Physics and Technology",
      "The State University of New York",
      "University of California, Irvine",
      "Google",
      "LearnQuest",
    ];

    const learnproduct = [
      "Guided Projects",
      "Courses",
      "Specialization",
      "Professional Certificates",
      "MasterTrack™ Certificates",
      "Degrees",
    ];

    const defaultlanguage = "Language";
    const defaultlevel = "Level";
    const defaultduration = "Duration";
    const defaultsubject = "Subject";
    const defaultskills = "Skills";
    const defaultpartner = "Partner";
    const defaultLearnproduct = "Learning Product";

    return (
      <div className="filter">
        <p className="para">Showing 1138 total results for "web development"</p>
        <div className="div_main">
          <p className="flt">Filter by</p>
          <Dropdown
            className="div_filter"
            options={language}
            onChange={this._onSelect}
            value={defaultlanguage}
            placeholder="Select an option"
          />
          <Dropdown
            className="div_filter"
            options={Level}
            onChange={this._onSelect}
            value={defaultlevel}
            placeholder="Select an option"
          />
          <Dropdown
            className="div_filter"
            options={duration}
            onChange={this._onSelect}
            value={defaultduration}
            placeholder="Select an option"
          />
          <Dropdown
            className="div_filter"
            options={subject}
            onChange={this._onSelect}
            value={defaultsubject}
            placeholder="Select an option"
          />
          <Dropdown
            className="div_filter"
            options={skills}
            onChange={this._onSelect}
            value={defaultskills}
            placeholder="Select an option"
          />
          <Dropdown
            className="div_filter"
            options={partner}
            onChange={this._onSelect}
            value={defaultpartner}
            placeholder="Select an option"
          />
          <Dropdown
            className="div_filter"
            options={learnproduct}
            onChange={this._onSelect}
            value={defaultLearnproduct}
            placeholder="Select an option"
          />
        </div>
      </div>
    );
  }
}
export default FilterTester;
