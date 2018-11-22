import React from "react";
import "../css/Hearts.css";

const Hearts = props => {
  const heartTotal = props.count.map((point, index) => {
    return <div key={`${props.char}${index}`} className="heart-point" />;
  });

  return <section className={`hearts ${props.char}`}>{heartTotal}</section>;
};

export default Hearts;
