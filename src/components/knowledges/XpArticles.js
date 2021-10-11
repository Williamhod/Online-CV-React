import React from "react";

function XpArticles(props) {
  return (
    <>
      <h3>{props.title}</h3>

      <div>
        {props.main.map((item) => {
          return (
            <div key={item.id} className="exp1">
              <h4>{item.name}</h4>
                  <h5>{item.year}</h5>
                  <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default XpArticles;
