import React, { useState } from "react";

const phases = [
  {
    phase: "Phase 1",
    tasks: [
      "Presale launch",
      "Formation",
      "Marketing Campaign",
      "Development",
      "License Acquisition",
    ],
  },
  {
    phase: "Phase 2",
    tasks: [
      "iOS and Android Development",
      "Beta launch",
      "Complete Presale",
      "RBLX Launch on DEX",
      "Viral Marketing Push",
    ],
  },
  {
    phase: "Phase 3",
    tasks: [
      "Presale launch",
      "Formation",
      "Marketing Campaign",
      "Development",
      "License Acquisition",
    ],
  },
  {
    phase: "Phase 4",
    tasks: [
      "iOS and Android Development",
      "Beta launch",
      "Complete Presale",
      "RBLX Launch on DEX",
      "Viral Marketing Push",
    ],
  },
  {
    phase: "Phase 5",
    tasks: [
      "iOS and Android Development",
      "Beta launch",
      "Complete Presale",
      "RBLX Launch on DEX",
      "Viral Marketing Push",
    ],
  },
  {
    phase: "Phase 6",
    tasks: [
      "iOS and Android Development",
      "Beta launch",
      "Complete Presale",
      "RBLX Launch on DEX",
      "Viral Marketing Push",
    ],
  },
  {
    phase: "Phase 7",
    tasks: [
      "Presale launch",
      "Formation",
      "Marketing Campaign",
      "Development",
      "License Acquisition",
    ],
  },
  {
    phase: "Phase 8",
    tasks: [
      "iOS and Android Development",
      "Beta launch",
      "Complete Presale",
      "RBLX Launch on DEX",
      "Viral Marketing Push",
    ],
  },
];

const Roadmap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhase, setSelectedPhase] = useState(null);
  const phasesToShow = 5; // Number of phases to show at once

  const handleNext = () => {
    if (currentIndex + phasesToShow < phases.length) {
      setCurrentIndex(currentIndex + phasesToShow);
    }
  };

  const handleBack = () => {
    if (currentIndex - phasesToShow >= 0) {
      setCurrentIndex(currentIndex - phasesToShow);
    }
  };

  const handlePhaseSelect = (index) => {
    setSelectedPhase(index);
  };

  return (
    <div
      className="bg-black text-white py-16 px-32 z-10 w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/roadmap-back.svg')",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-[48px] font-bold mb-8 text-[#34fcb4] z-20">
        {" "}
        {String.fromCharCode(47, 47)}
        <span className="text-white">Roadmap</span>
      </h2>
      <div className="flex overflow-x-auto border-t border-b border-browngrey py-8 scrollbar-hide justify-center">
        {phases.slice(currentIndex, currentIndex + phasesToShow).map((phaseInfo, index) => {
          const globalIndex = currentIndex + index;
          return (
            <div
              key={globalIndex}
              className={`p-4 border-[0.25px] flex-none w-[200px] ${
                selectedPhase === globalIndex
                  ? "border-[#34fcb4]"
                  : "border-browngrey"
              } relative bg-black`}
              onClick={() => handlePhaseSelect(globalIndex)}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`flex items-center justify-center w-4 h-4 bg-black border border-white rounded-full neon-circle ${
                    selectedPhase === globalIndex ? "bg-[#34fcb4]" : ""
                  }`}
                >
                  {selectedPhase === globalIndex && (
                    <span className="w-2 h-2 bg-[#34fcb4] rounded-full"></span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#34fcb4] ml-2">
                  {phaseInfo.phase}
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                {phaseInfo.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="flex mt-8 justify-end space-x-40">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="flex flex-row items-center disabled:opacity-50"
        >
          <img
            className="ml-2 w-6 h-4 pt-2"
            alt="Arrow"
            src="/assets/left-arrow.svg"
          />
          <span className="ml-2 [font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg">
            BACK
          </span>
        </button>
        <button
          className="flex flex-row items-center disabled:opacity-50"
          onClick={handleNext}
          disabled={currentIndex + phasesToShow >= phases.length}
        >
          <span className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg">
            NEXT
          </span>
          <img
            className="ml-2 w-6 h-4 pt-2"
            alt="Arrow"
            src="/assets/right-arrow.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default Roadmap;
