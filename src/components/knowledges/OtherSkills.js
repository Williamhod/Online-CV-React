import React from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
function OtherSkills() {
  const Skill = ({ label }) => (
    <li>
      <AiOutlineCheckSquare />
      <span>{label}</span>
    </li>
  );
  return (
    <div className="otherSkills">
      <h3>Autres compétences</h3>
      <div className="list">
        <ul>
          <Skill label="Anglais niveau I3-4" />
          <Skill label="Allemand intermédiaire" />
          <Skill label="GitHub" />
          <Skill label="SEO" />
        </ul>
        <ul>
          <Skill label="VS Code" />
          <Skill label="Express" />
          <Skill label="MongoDB" />
          <Skill label="MySQL" />
        </ul>
      </div>
    </div>
  );
}

export default OtherSkills;
