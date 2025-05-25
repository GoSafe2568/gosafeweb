import React from 'react';
import image from '../assets/img/Assemblyandward.jpg'

const AssemblyPointPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4"
      style={{ fontFamily: "'Kanit', sans-serif" }}>Assembly Point (จุดรวมพล)</h1>
      <div>
        <p className="text-justify indent-8 mt-10 text-lg text-black max-w-4xl"
        style={{ fontFamily: "'Kanit', sans-serif" }}>
        บริเวณพื้นที่ของบริษัท ไทยโตชิบาอุตสาหกรรม จำกัด ได้จัดให้มีจุดรวมพลไว้รอบๆพื้นที่ตามแผนกต่าง ๆ ทั้งหมด 7 จุด และห้องพยาบาล 1 จุด ตั้งอยู่ในอาคารโรงอาหาร
        </p>
    </div>
    <div className="flex items-center justify-center px-4">
    <p className="mt-8 text-lg text-center text-neutral-500 max-w-4xl"
    style={{ fontFamily: "'Kanit', sans-serif" }}>ข้อมูลเกี่ยวกับจุดรวมพลเมื่อเกิดเหตุฉุกเฉินภายในพื้นที่ TTEI</p>
    </div>
    <div className="flex justify-center lg:p-8">
        <img src={image} alt="TTEI" className="border border-stone-900 rounded-3xl"/>
    </div>
    </div>
  );
};

export default AssemblyPointPage;
