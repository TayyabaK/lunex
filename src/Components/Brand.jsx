import React from "react";

const Brand = () => {
  return (
    <div className="bg-black p-[50px] ">
      <section>
        <div className="text-white text-center font-Archivo font-bold text-4xl tracking-widest uppercase">
          AS SEEN IN THE MEDIA
        </div>
      </section>

      <section>
        <div className="flex flex-row justify-between mt-[50px] px-[30px]">
          <img
            src="/assets/image-175-brand.png"
            alt="brand1"
            height={100}
            width={200}
          />
          <img
            src="/assets/Group-15-brand.png"
            alt="brand1"
            height={60}
            width={130}
          />
          <img
            src="/assets/Group-12-brand.png"
            alt="brand1"
            height={80}
            width={180}
          />
          <img
            src="/assets/Group-13-brand.png"
            alt="brand1"
            height={100}
            width={180}
          />
          <img
            src="/assets/Group-14-brand.png"
            alt="brand1"
            height={80}
            width={200}
          />
        </div>
      </section>
    </div>
  );
};

export default Brand;
