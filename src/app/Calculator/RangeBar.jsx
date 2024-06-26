import React, { useState, useEffect } from "react";

const SliderComponent = () => {
  const [value, setValue] = useState(50);

  useEffect(() => {
    // Set the initial value of the slider
    document.querySelector('input[type="range"]').style.setProperty("--value", value + "%");
  }, [value]);

  return (
    <div className="flex items-center mb-4">
      <div className="w-full">
        <input
          type="range"
          className="w-full appearance-none bg-transparent cursor-pointer"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            height: "40px", // Increased height
            background:
              "linear-gradient(to right, #34fcb4 0%, #34fcb4 var(--value, 0%), #000 var(--value, 0%))",
            backgroundSize: "100% 12px", // Adjust background size
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            "--value": "50%", // Initial value
          }}
          onInput={(e) => {
            e.target.style.setProperty("--value", e.target.value + "%");
          }}
        />
        <style jsx>{`
          input[type="range"] {
            border: 1px solid grey; /* Grey border */
            background-color: black; /* Black background */
          }
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 30px; /* Set to same height as slider bar */
            height: 30px; /* Set to same height as slider bar */
            background: url("/assets/green-logo.svg") no-repeat center;
            cursor: pointer;
          }
          input[type="range"]::-moz-range-thumb {
            width: 30px; /* Set to same height as slider bar */
            height: 30px; /* Set to same height as slider bar */
            background: url("/assets/green-logo.svg") no-repeat center;
            cursor: pointer;
          }
          input[type="range"]::-ms-thumb {
            width: 30px; /* Set to same height as slider bar */
            height: 30px; /* Set to same height as slider bar */
            background: url("/assets/green-logo.svg") no-repeat center;
            cursor: pointer;
          }
          input[type="range"]::-webkit-slider-runnable-track {
            height: 30px; /* Increased height */
            background: transparent;
          }
          input[type="range"]::-moz-range-track {
            height: 30px; /* Increased height */
            background: transparent;
          }
          input[type="range"]::-ms-track {
            height: 30px; /* Increased height */
            background: transparent;
          }
        `}</style>
      </div>
      <img
        src="/assets/moon.png"
        alt="Moon"
        className="ml-4 w-12 h-12"
      />
    </div>
  );
};

export default SliderComponent;
