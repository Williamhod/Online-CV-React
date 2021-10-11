import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="homeContent">
        <div className="content">
          <h1>Hodicq William</h1>
                  <h2>Développeur Front-end junior</h2>
                  <div className="pdf">
                      <a href="./media/CV.pdf" target="blank">Télécharger CV</a>
                      <a href="./media/LM.pdf" target="blank">Télécharger LM</a>
                  </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
