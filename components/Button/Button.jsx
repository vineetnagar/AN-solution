import React from "react";
import Style from "./Button.module.css";

const Button = ({ btnName, icon, handleClick }) => {
  return (
    <div>
      <button
        type="button"
        className={`btn btn-info button ${Style.button}`}
        onCLick={() => handleClick()}
      >
        {btnName} &nbsp; &nbsp; {icon}
      </button>
    </div>
  );
};

export default Button;
