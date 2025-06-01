import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar-wrapper">
      <div className="outer">
        <div className="inner" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
      <div>progress bar</div>
    </div>
  );
};

export default ProgressBar;
