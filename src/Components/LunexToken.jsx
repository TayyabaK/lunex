import React from "react";

const LunexToken = () => {
  return (
    <div>
      <div className="">
        <div className="flex flex-row justify-center my-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="mx-12 text-white font-bold text-[18px]">
              LUNEX TOKEN
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LunexToken;
