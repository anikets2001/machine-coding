import React from "react";
import "../App.css";

const Interests = ({ data, setData }) => {
  const  interests  = data.interests;
  return (
    <div className="body-wrapper">
      <div className="content-wrapper">
        <div>
          <input type="checkbox" id="coding" name="coding" />
          <label htmlFor="coding">coding</label>
        </div>

        <div>
          <input type="checkbox" id="javascript" name="javascript" />
          <label htmlFor="javascript">javascript</label>
        </div>

        <div>
          <input type="checkbox" id="react" name="react" />
          <label htmlFor="react">react</label>
        </div>
      </div>
    </div>
  );
};

export default Interests;
