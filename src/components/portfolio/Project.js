import React, { Component } from "react";

export const ProjectEmpty = () => (
  <div className="project" style={{ background: "none", boxShadow: "none" }} />
);

export default class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
   
    document.body.classList.toggle('noScrollY')
  };

  render() {
    let { name, languagesIcons, source, info, picture } = this.props.item;

    return (
      <div className={this.state.showInfo ? "project" : "project blur"}>
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="demo du projet" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {this.state.showInfo && (
          <div className="showInfos blur">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    Code source
                  </a>
                </div>
              </div>
              <p className="text">{info}</p>
              <div className="button return" onClick={this.handleInfo}>
                Retourner sur la page
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
