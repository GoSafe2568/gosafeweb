import React from 'react'
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-start sm:items-start lg:items-center mt-0 lg:mt-6 px-4">

      {/* หัวข้อบรรทัดที่ 1 */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-left lg:text-center"
          style={{ fontFamily: "'Kanit', sans-serif" }}>
        เว็บไซต์รวบรวมข้อมูลความปลอดภัยใน
      </h1>

      {/* หัวข้อบรรทัดที่ 2 */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-left lg:text-center">
        A Website To Help You Stay Safe by
      </h1>

      {/* Mobile version: TTEi ปรากฏในบรรทัดที่ 3 บนหน้าจอเล็ก */}
      <h1 className="block lg:hidden text-5xl sm:text-6xl font-extrabold tracking-wide
                     bg-gradient-to-r from-gray-500 via-red-500 to-[#b0120a] 
                     text-transparent bg-clip-text animate-gradient-x text-left lg:text-center mt-2">
        TTEI
      </h1>

      {/* Desktop version: TTEi แบบเดิม ปรากฏเฉพาะเมื่อหน้าจอใหญ่ */}
      <h1 className="hidden lg:block absolute right-20 top-0 text-7xl lg:text-8xl font-extrabold tracking-wide
                     bg-gradient-to-r from-gray-500 via-red-500 to-[#b0120a] 
                     text-transparent bg-clip-text animate-gradient-x">
        TTEI
      </h1>

      {/* พารากราฟ */}
      <p className="mt-6 text-sm sm:text-base lg:text-lg text-center text-neutral-600 max-w-4xl px-2"
         style={{ fontFamily: "'Kanit', sans-serif" }}>
        เป็นเว็บไซต์ที่รวบรวมข้อมูลด้านความปลอดภัย อาทิเช่น แผนที่เส้นทางหนีไฟ จุดรวมพล จุดติดตั้งถังดับเพลิง เบอร์โทรฉุกเฉิน 
        ที่ให้ผู้มาเยือนทุกท่านสามารถเข้าถึงข้อมูลความปลอดภัยของบริษัทได้สะดวกมากขึ้น และใช้เป็นเครื่องมือรับมือเหตุฉุกเฉินภายในพื้นที่ของบริษัท ไทยโตชิบาอุตสาหกรรม จำกัด
      </p>
    </div>
  )
}

export default HeroSection;
