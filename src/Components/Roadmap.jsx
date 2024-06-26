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
  const phasesToShow = 6; // Number of phases to show at once

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
    <div className="bg-black text-white py-16 px-32">
      <h2 className="text-3xl font-bold mb-8 text-[#34fcb4]">
        {" "}
        {String.fromCharCode(47, 47)} Roadmap
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 border-t border-b border-browngrey borer-[0.25px] py-8">
        {phases
          .slice(currentIndex, currentIndex + phasesToShow)
          .map((phaseInfo, index) => {
            const globalIndex = currentIndex + index;
            return (
              <div
                key={globalIndex}
                className={`p-4 border-[0.25px] ${
                  selectedPhase === globalIndex
                    ? "border-[#34fcb4]"
                    : "border-browngrey"
                } rounded-md relative`}
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
      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
        >
          <span className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg">
            BACK
          </span>
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + phasesToShow >= phases.length}
        >
          <span className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg">
            NEXT
          </span>
        </button>
      </div>
    </div>
  );
};

export default Roadmap;
