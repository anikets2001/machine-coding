import React from "react";
import "../App.css";

const Settings = ({data, setData}) => {
  const theme = data.theme
  return (
    <div className="body-wrapper">
      <div className="content-wrapper">
        <div>
          <input type="radio" id="light" name="theme" />
          <label htmlFor="light">light</label>
        </div>

        <div>
          <input type="radio" id="dark" name="theme" />
          <label htmlFor="dark">dark</label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
