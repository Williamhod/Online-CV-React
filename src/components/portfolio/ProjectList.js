import React, { Component } from "react";
import Project, { ProjectEmpty } from "./Project";
import { portfolioData } from "../../data/portfolioData";

export default class ProjectList extends Component {
  state = {
    radios: [
      { id: 1, value: "all" },
      { id: 2, value: "javascript" },
      { id: 3, value: "css" },
      { id: 4, value: "sass" },
    ],
    selectedRadio: "all",
    projectsFiltered: portfolioData,
  };

  handleRadio = (event) => {
    let radio = event.target.value;
    this.setState({
      selectedRadio: radio,
      projectsFiltered: portfolioData.filter((item) =>
        item.languages.includes(radio)
      ),
    });
  };

  render() {
    let { radios, selectedRadio } = this.state;

    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>
        <div className="projects">
          {this.state.projectsFiltered.map((item) => (
            <Project key={item.id} item={item} />
          ))}
          {Array.from(
            { length: 6 - this.state.projectsFiltered.length },
            (_, i) => (
              <ProjectEmpty key={i} />
            )
          )}
        </div>
      </div>
    );
  }
}
