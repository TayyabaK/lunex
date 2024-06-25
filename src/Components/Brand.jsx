import React from "react";

const Brand = () => {
  return (
    <div className="bg-black px-[100px] border-b-[0.25px] border-browngrey">
      <div>
        <div className="text-white text-center font-Archivo font-semibold text-2xl tracking-[7px] uppercase py-[30px] border-b-[0.25px] border-browngrey">
          AS SEEN IN THE MEDIA
        </div>
      </div>

      <div>
        <div className="flex flex-row gap-[10px] justify-between mt-[50px] px-[5px] md:px-[30px] mb-[50px] ">
          <div className="max-w-[200px] w-full">
            <img src="/assets/image-175-brand.png" alt="brand1" height={100} />{" "}
          </div>
          <div className="border-l border-gray-700 h-12" />

          <div className="max-w-[130px] w-full ">
            <img src="/assets/Group-15-brand.png" alt="brand1" height={60} />
          </div>
          <div className="border-l border-gray-700 h-12"></div>

          <div className="max-w-[180px] w-full ">
            <img src="/assets/Group-12-brand.png" alt="brand1" height={80} />
          </div>
          <div className="border-l border-gray-700 h-12"></div>

          <div className="max-w-[180px] w-full ">
            <img src="/assets/Group-13-brand.png" alt="brand1" height={100} />{" "}
          </div>
          <div className="border-l border-gray-700 h-12"></div>

          <div className="max-w-[200px] w-full ">
            <img src="/assets/Group-14-brand.png" alt="brand1" height={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
