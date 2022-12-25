import React from "react";
import "./experience.css";

const Progress = ({ done }) => {
  // create an empty object to use later see in style
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 1000);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  );
};

export default Progress;
