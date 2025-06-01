import React from "react";
import "../App.css";

const Profile = ({ setData }) => {
  // const { name, age, email } = data;

  const handleInputChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="body-wrapper">
      <div className="content-wrapper">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="enter you name"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="enter you age"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="enter you email"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
