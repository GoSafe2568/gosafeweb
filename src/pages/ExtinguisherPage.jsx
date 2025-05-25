import React, { useEffect } from 'react';
import Lottie from "lottie-react";
import animation from "../lotties/down.json";
import { motion } from 'framer-motion';
import { LuMessageCircleQuestion } from "react-icons/lu";
import { SiFireship } from "react-icons/si";
import imageE1 from '../assets/img/Ex1.png';
import imageE2 from '../assets/img/Ex2.png';
import imageE3 from '../assets/img/Ex3.png';
import imageE4 from '../assets/img/Ex4.png';
import imageFT from '../assets/img/FireType.png';
import imageHOW from '../assets/img/pass2.png';

// Animation Component
const SlideInSection = ({ children, from = 'left' }) => {
  const variants = {
    hidden: { x: from === 'left' ? -200 : 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      className="my-16"
    >
      {children}
    </motion.div>
  );
};

const ExtinguisherPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="max-w-[1200px] mx-auto p-8">
      {/* หัวข้อหลัก */}
      <h1 className="text-4xl font-bold mb-4 text-justify" style={{ fontFamily: "'Kanit', sans-serif" }}>
        ถังดับเพลิง (Extinguisher)
      </h1>

      {/* รายละเอียดถังดับเพลิง 3 ชนิด พร้อมแอนิเมชัน */}
    <div className="mt-6 flex flex-col lg:flex-row items-start gap-6">
      {/* ข้อความฝั่งซ้าย */}
    <div className="text-lg text-black" style={{ fontFamily: "'Kanit', sans-serif" }}>
      <p className="mb-2">
        บริษัท ไทยโตชิบาอุตสาหกรรม จำกัด มีถังดับเพลิงอยู่ 3 ชนิด คือ
      </p>
      <p className="mb-1">1. ชนิดผงเคมีแห้ง</p>
      <p className="mb-1">2. ชนิดน้ำยาเหลวระเหย BF2000 (ถังสีเขียว)</p>
      <p className="mb-1">3. เครื่องดับเพลิงชนิดอัตโนมัติ แบบติดตั้งเพดาน (Auto)</p>
    </div>

      {/* แอนิเมชันฝั่งขวา */}
      <div className="w-20 h-20 lg:mt-2 sm:hidden lg:block">
        <Lottie animationData={animation} loop={true} />
      </div>

    </div>

      {/* ประเภทของไฟ */}
      <SlideInSection from="right">
        <div className="bg-green-100 p-6 rounded-xl shadow-md mt-8">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2" style={{ fontFamily: "'Kanit', sans-serif" }}>
        <SiFireship className="text-red-500" />
          ก่อนอื่นมารู้จักประเภทของไฟกันก่อน
        <SiFireship className="text-red-500" />
        </h2>

          <p className="text-justify indent-8 text-lg" style={{ fontFamily: "'Kanit', sans-serif" }}>
            การที่สิ่งบางสิ่งจะติดไฟได้นั้น ต้องมีครบองค์ประกอบจากสามเหลี่ยมไฟก่อน ได้แก่ เชื้อเพลิง (Fuel), ความร้อน (Heat), ออกซิเจน (Oxygen)
            และสิ่งที่ช่วยทวีความรุนแรง คือ "ปฏิกิริยาลูกโซ่" หรือ Chain Reaction นั่นเอง 
          </p>
          <p className="text-justify indent-8 text-lg" style={{ fontFamily: "'Kanit', sans-serif" }}>
          ไฟมี 5 ประเภท
          </p>
          <div className='max-h-[1150px] max-w-[1250px] rounded-xl overflow-hidden transform transition-all duration-500 mt-4'>
            <div className='w-full h-full opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden'></div>
            <img src={imageFT} alt='ประเภทของไฟ' className='w-full h-full' />
          </div>
        </div>
      </SlideInSection>

      {/* รูปภาพถังดับเพลิง */}
      <div className="max-w-[1250px] mx-auto mt-8">
        <img src={imageE1} alt="ถังดับเพลิงชนิดผงเคมีแห้ง" className="w-full mb-4" />
        <img src={imageE2} alt="ถังดับเพลิงชนิดน้ำยาเหลวระเหย" className="w-full" />
        <img src={imageE3} alt="ถังดับเพลิงชนิดน้ำยาเหลวระเหย" className="w-full mb-4" />
        <img src={imageE4} alt="ถังดับเพลิงชนิดน้ำยาเหลวระเหย" className="w-full" />
      </div>

      {/* วิธีใช้ถังดับเพลิง */}
      <SlideInSection from="left">
      <div className="bg-yellow-100 p-6 rounded-xl shadow-md mt-6 relative sm:h-[700px] lg:h-[1150px] pb-[50px] sm:pb-0">

          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2" style={{ fontFamily: "'Kanit', sans-serif" }}>
            วิธีการใช้ถังดับเพลิงอย่างถูกต้อง ดึง ปลด กด ส่ายคืออะไร <LuMessageCircleQuestion />
          </h2>

          <div className='max-h-[1150px] max-w-[1250px] rounded-xl overflow-hidden transform transition-all duration-500 mt-4'>
            <div className='w-full h-full opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden'></div>
            <img src={imageHOW} alt='วิธีใช้ถังดับเพลิง' className='w-full h-full' />
            <div className="relative h-[500px]">
            <video controls width="30%" className="absolute top-[-390px] sm:right-16 sm:top-[-420px] lg:right-[100px] lg:top-[-760px] rounded-xl shadow-md">
              <source src="/videos/PASS.mp4" type="video/mp4" />
            </video>
          </div>
          </div>
        </div>
      </SlideInSection>
    </div>
  );
};

export default ExtinguisherPage;
