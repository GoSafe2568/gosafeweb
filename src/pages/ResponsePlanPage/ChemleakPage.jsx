import React from 'react';
import Leakimage from "../../assets/img/response/LeakPost.jpg";
import GHSimage from "../../assets/img/response/GHSPost.jpg";

const ChemleakPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h1
        className="text-4xl font-bold mb-6"
        style={{ fontFamily: "'Kanit', sans-serif", textDecoration: "underline" }}
      >
        โปสเตอร์วิธีรับมือเมื่อเกิดเหตุสารเคมีรั่วไหล<br />ในสถานประกอบการ
      </h1>

      <div className="flex flex-col lg:flex-row justify-center gap-8 mb-12">
        <img
          src={Leakimage}
          alt="Leak"
          className="w-full lg:w-1/2 rounded-3xl border border-stone-900 shadow-lg object-contain"
        />
      </div>

      <h2
        className="text-3xl font-semibold mb-6"
        style={{ fontFamily: "'Kanit', sans-serif", textDecoration: "underline" }}
      >
        การจำแนกความเป็นอันตรายของสารเคมี
      </h2>

      <div className="flex flex-col lg:flex-row justify-center gap-8">
        <img
          src={GHSimage}
          alt="GHS"
          className="w-full lg:w-1/2 rounded-3xl border border-stone-900 shadow-lg object-contain"
        />
      </div>
    </div>
  );
};

export default ChemleakPage;