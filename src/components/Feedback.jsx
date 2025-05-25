import React from 'react';
import image from '../assets/img/Feedbackpig.png';
import { GoArrowRight } from "react-icons/go";
import { motion } from 'framer-motion';

const Feedback = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfoOhxe6L1O_STlRgWEPXATN02vvMg7P8g8QeYBAatLsoejeg/viewform";

  return (
    <div className="max-w-[1200px] text-center mx-auto p-8">
      <h1
        className="text-4xl font-bold mb-4"
        style={{ fontFamily: "'Kanit', sans-serif" }}
      >
        ความคิดเห็นเกี่ยวกับ Website นี้
      </h1>

      <div>
        <p
          className="text-justify indent-8 mt-10 mb-6 px-4 py-2 text-base md:text-lg text-black mx-auto max-w-3xl leading-relaxed bg-white rounded-xl shadow-md"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          แบบประเมินนี้ เป็นการเก็บข้อมูลภายในสถานประกอบกิจการเท่านั้น ทั้งนี้ เพื่อให้ทางทีมงานนำไปแก้ไขและปรับปรุงเว็บไซต์ให้ดียิ่งขึ้น ขอบคุณสำหรับความคิดเห็นของคุณ ! 🙇🏻‍♀️
        </p>
      </div>

      <div className="flex justify-center lg:p-8">
        <img
          src={image}
          alt="TTEI"
          className="w-3/5 md:w-3/5 lg:w-3/5 border border-stone-900 rounded-2xl"
        />
      </div>

      {/* ปุ่มพร้อมลูกศรที่ขยับเมื่อ hover ที่ปุ่ม */}
      <motion.a
        href={googleFormUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md mt-6"
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{
          rest: { },
          hover: { }
        }}
      >
        ทำแบบประเมิน
        <motion.span
          className="ml-2"
          variants={{
            rest: { x: 0, scale: 1 },
            hover: { x: 8, scale: 1 }
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <GoArrowRight size={24} />
        </motion.span>
      </motion.a>
    </div>
  );
};

export default Feedback;