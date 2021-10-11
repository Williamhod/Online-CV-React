import React from "react";
import "./NotFound.scss";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

function NotFound() {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Désolé cette page n'existe pas !</h3>
        <NavLink exact to="/">
          <IoHomeOutline className="notFound-icon" size={23} />
          <span> Accueil</span>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
