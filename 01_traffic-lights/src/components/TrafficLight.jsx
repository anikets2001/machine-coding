import React, { useEffect, useRef, useState } from "react";

const lights = ["red", "yellow", "green"];
const durations = {
  red: 3000,
  green: 3000,
  yellow: 1000,
};

const TrafficLight = () => {
  const timeoutRef = useRef(null);
  const indexRef = useRef(0);
  const [activeLight, setActiveLight] = useState(null);

  const runCycle = () => {
    const currentLight = lights[indexRef.current];
    setActiveLight(currentLight);

    timeoutRef.current = setTimeout(() => {
      indexRef.current = (indexRef.current + 1) % lights.length;
      runCycle();
    }, durations[currentLight]);
  };

  const startCycle = () => {
    if (timeoutRef.current) return;
    runCycle();
  };
  const stopCycle = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {lights.map((color) => (
          <div
            key={color}
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              marginTop: "8px",
              backgroundColor: color === activeLight ? color : "#ccc",
            }}
          ></div>
        ))}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "24px",
        }}
      >
        <button
          onClick={startCycle}
          style={{ padding: "8px", backgroundColor: "green", color: "#fff" }}
        >
          Start
        </button>
        <button
          onClick={stopCycle}
          style={{
            padding: "8px",
            backgroundColor: "red",
            color: "#fff",
            marginLeft: "8px",
          }}
        >
          End
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
