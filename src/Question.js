import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [shortInfo, setShortInfo] = useState(true);

  const toggleInfo = () => {
    setShortInfo(!shortInfo);
  };

  let classes = shortInfo
    ? "question-container"
    : "question-container bot-shadow";

  return (
    <div className={classes}>
      <div className="title-and-btn">
        <h4>{title}</h4>
        <button>
          {shortInfo ? (
            <AiOutlinePlus className="icon" onClick={toggleInfo} />
          ) : (
            <AiOutlineMinus className="icon" onClick={toggleInfo} />
          )}
        </button>
      </div>
      {shortInfo ? null : <p>{info}</p>}
    </div>
  );
};

export default Question;
