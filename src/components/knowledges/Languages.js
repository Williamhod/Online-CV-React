import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "HTML", xp: 1.7 },
      { id: 2, value: "CSS", xp: 1.7 },
      { id: 3, value: "SCSS", xp: 1.2 },
      { id: 4, value: "Javascript", xp: 1 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.4 },
      { id: 2, value: "Bootstrap", xp: 1 },
      { id: 3, value: "SASS", xp: 1},
      { id: 4, value: "Material UI", xp: 0.4 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
