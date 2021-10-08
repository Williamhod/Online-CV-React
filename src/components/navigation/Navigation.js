import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

import { IoHomeOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import {
  RiGitRepositoryLine,
  RiContactsBookLine,
  RiLinkedinBoxLine,
  RiGithubFill,
} from "react-icons/ri";

function Navigation() {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img
            className="img-sidebar"
            src="./media/profil.jpg"
            alt="profil professionnel"
          />
          <h3>Hodicq William</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <IoHomeOutline className="nav-icon" size={23} />
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <GiSkills className="nav-icon" size={23} />
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <RiGitRepositoryLine className="nav-icon" size={23} />
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <RiContactsBookLine className="nav-icon" size={23} />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/william-hodicq/"
              target="blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinBoxLine className="nav-link-icon" size={40} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Williamhod">
              <RiGithubFill className="nav-link-icon" size={40} />
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Williamhod - 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
