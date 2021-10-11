import React from "react";
import Experience from "../../components/knowledges/Experience";
import Hoobies from "../../components/knowledges/Hoobies";
import Languages from "../../components/knowledges/Languages";
import OtherSkills from "../../components/knowledges/OtherSkills";
import "./Knowledges.scss";

function Knowledges() {
  return (
    <div className="knowledges">
      <div className="knowledgesContent">
        <Languages />
        <Experience />
        <OtherSkills />
        <Hoobies />
      </div>
    </div>
  );
}

export default Knowledges;
