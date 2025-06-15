import React, { useRef, useState } from "react";

const lightSequence = [
  { color: "red", duration: 3000 },
  { color: "green", duration: 3000 },
  { color: "yellow", duration: 1000 },
];

const lightDisplayOrder = ["red", "green", "yellow"];

const TrafficLight = () => {
  const timeoutRef = useRef(null);
  const indexRef = useRef(0);
  const [activeLight, setActiveLight] = useState(null);

  const runCycle = () => {
    const current = lightSequence[indexRef.current];
    setActiveLight(current.color);

    timeoutRef.current = setTimeout(() => {
      indexRef.current = (indexRef.current + 1) % lightSequence.length;
      runCycle();
    }, current.duration);
  };

  const startCycle = () => {
    if (timeoutRef.current) return;
    runCycle();
  };

  const stopCycle = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    setActiveLight(null);
  };

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {lightDisplayOrder.map((color) => (
          <div
            key={color}
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              backgroundColor: color === activeLight ? color : "gray",
              marginTop: "16px",
            }}
          />
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
          style={{
            padding: "8px",
            color: "#fff",
            marginLeft: "8px",
            backgroundColor: timeoutRef.current ? "gray" : "green",
            cursor: timeoutRef.current ? "not-allowed" : "pointer",
          }}
          disabled={timeoutRef.current}
          onClick={startCycle}
        >
          Start
        </button>
        <button
          style={{
            padding: "8px",
            color: "#fff",
            backgroundColor: activeLight === null ? "gray" : "red",
            cursor: activeLight === null ? "not-allowed" : "pointer",
            marginLeft: "8px",
          }}
          disabled={activeLight === null}
          onClick={stopCycle}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
