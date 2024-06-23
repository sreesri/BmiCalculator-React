import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");

  function calculateBmi() {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters)
      setBmi(bmiValue.toFixed(2))
      if (bmiValue < 18.5) {
        setBmiStatus("UnderWeight")
      } else if (bmiValue < 24.9) {
        setBmiStatus("Healthy")
      } else if (bmiValue < 29.9) {
        setBmiStatus("Overweight")
      } else {
        setBmiStatus("Obese")
      }
    }
    else {
      setBmi(null)
      setBmiStatus("")
    }
    setHeight("")
    setWeight("")
  }

  return (
    <>
      <div className="bmi-container">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="text"
              name="height"
              value={height}
              id="height"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="text"
              name="weight"
              value={weight}
              id="weight"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          {bmi !== null && <div className="result">
            <p>Your BMI is {bmi}</p>
            <p>Status: {bmiStatus}</p>
          </div>}
        </div>
      </div>
    </>
  );
}

export default App;
