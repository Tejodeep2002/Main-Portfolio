import React from "react";
import "./QualiTree.css";

const QualiTree = ({ qualification }) => {
  return (
    <>
      <div className="QualiTree">
        {qualification.map((items, val) =>
          val % 2 === 0 ? (
            <div className="left-QualiTree">
              <span>{items.name}</span>
              <span>{items.year}</span>
            </div>
          ) : null
        )}

        <div className="middlebar"></div>
        {qualification.map((items, val) =>
          val % 2 !== 0 ? (
            items.name === "" ? (
              <div className="right-QualiTree" style={{ filter: "opacity(0)" }}>
                <span>{items.name}</span>
                <span>{items.year}</span>
              </div>
            ) : (
              <div className="right-QualiTree">
                <span>{items.name}</span>
                <span>{items.year}</span>
              </div>
            )
          ) : null
        )}
      </div>
    </>
  );
};

export default QualiTree;
