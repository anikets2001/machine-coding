/*---
requirements:
create a tabs component with three tabs - profile, interests, settings
inside profile we will have three input fields - name, age, email
inside interests we will have checkboxes for interests
at last in settings tab we will have theme toggle functionality and a submit button (which will simple log the details)

there must be three button on the bottom previous, next and submit depending upon the current tab
---*/

import React, { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

const TabComponent = () => {
  const [data, setData] = useState({
    name: "Aniket",
    age: 24,
    email: "aniketsingh90126@gmail.com",
    interests: ["coding", "javascript", "react"],
    theme: "light",
  });
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 1,
      name: "Profile",
      component: <Profile data={data} setData={setData} />,
    },
    {
      id: 2,
      name: "Interests",
      component: <Interests data={data} setData={setData} />,
    },
    {
      id: 3,
      name: "Settings",
      component: <Settings data={data} setData={setData} />,
    },
  ];

  const activeTabComponent = tabs[activeTab];

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const handlePrevious = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleNext = () => {
    setActiveTab((prev) => prev + 1);
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <div className="tabs-wrapper">
      <div className="tabs-header-wrapper">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`${tab.id === activeTabComponent.id ? "active" : "tab"}`}
            onClick={() => handleTabChange(index)}
          >
            {tab?.name}
          </div>
        ))}
      </div>
      <div className="tabs-body">{activeTabComponent.component}</div>

      <div className="btn-wrapper">
        {activeTab !== 0 && (
          <button className="prev-btn" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {activeTab !== tabs.length - 1 && (
          <button className="next-btn" onClick={handleNext}>
            Next
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default TabComponent;


