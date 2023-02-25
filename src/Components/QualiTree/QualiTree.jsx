import React from "react";
import "./QualiTree.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const QualiTree = ({ qualification }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="QualiTree" style={darkMode ? {"color":"black"}:null}>
        {qualification.map((items, val) =>
          val % 2 === 0 ? (
            <div className="left-QualiTree" key={val}>
              <span>{items.name}</span>
              <span>{items.year}</span>
            </div>
          ) : null
        )}

        <div className="middlebar"></div>
        {qualification.map((items, val) =>
          val % 2 !== 0 ? (
            items.name === "" ? (
              <div className="right-QualiTree" style={{ filter: "opacity(0)" }} key={val}>
                <span>{items.name}</span>
                <span>{items.year}</span>
              </div>
            ) : (
              <div className="right-QualiTree" key={val}>
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
