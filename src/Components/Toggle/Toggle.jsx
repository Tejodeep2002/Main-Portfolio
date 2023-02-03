import React from "react";
import bulbON from "../../images/bulb-ON.png";
import bulbOFF from "../../images/bulb-OFF.png";
import "./Toggle.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div
      className="toggle"
      onClick={handleClick}
      style={
        darkMode
          ? { "borderColor": "var(--white)" }
          : { "borderColor": "black" }
      }
    >
      {darkMode ? (
        <img src={bulbON} alt="" style={{width:"2.5rem",height:"2rem"}}/>
      ) : (
        <img src={bulbOFF} alt=""  style={{width:"2rem",height:"2rem"}}/>
      )}
    </div>
  );
};

export default Toggle;
