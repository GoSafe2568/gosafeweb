import React from 'react';
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const SingleEC = ({ name, image, link }) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      {/* เปลี่ยนจาก Link เป็น a */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white cursor-pointer">
          <div className="w-full h-full opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 hidden md:block"></div>
          <img src={image} alt="Eqiupment Check Image" className="w-full h-full object-cover" />
        </div>
      </a>

      <div>
        <h2 className="md:text-xl text-xl text-green-800" style={{ fontFamily: "'Kanit', sans-serif" }}>{name}</h2>
      </div>
    </div>
  );
};

export default SingleEC;
