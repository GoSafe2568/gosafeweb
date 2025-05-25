import React from 'react'
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-start sm:items-start lg:items-center mt-0 lg:mt-6 px-4">
      {/* ข้อความบรรทัดที่ 1 */}
      <h1 className="text-4xl sm:text-2xl lg:text-4xl sm:text-left lg:text-center"
      style={{ fontFamily: "'Kanit', sans-serif" }}>
        เว็บไซต์รวบรวมข้อมูลความปลอดภัยใน
      </h1>

      {/* ข้อความบรรทัดที่ 2 */}
      <h1 className="text-4xl sm:text-2xl lg:text-4xl font-semibold sm:text-left lg:text-center">
        A Website To Help You Stay Safe by
      </h1>

      {/* TTEi ขนาดใหญ่ สีไล่เทา-แดง อยู่ด้านขวา */}
      <span className="absolute right-32 top-6 sm:right-20 sm:top-0 lg:right-25 lg:top-0 
                 text-7xl lg:text-8xl font-extrabold tracking-wide
                 bg-gradient-to-r from-gray-500 via-red-500 to-[#b0120a] 
                 text-transparent bg-clip-text animate-gradient-x">
  TTEi
</span>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
      style={{ fontFamily: "'Kanit', sans-serif" }}>
      เป็นเว็บไซต์ที่รวบรวมข้อมูลด้านความปลอดภัย อาทิเช่น แผนที่เส้นทางหนีไฟ จุดรวมพล จุดติดตั้งถังดับเพลิง เบอร์โทรฉุกเฉิน 
      ที่ให้ผู้มาเยือนทุกท่านสามารถเข้าถึงข้อมูลความปลอดภัยของบริษัทได้สะดวกมากขึ้น และใช้เป็นเครื่องมือรับมือเหตุฉุกเฉินภายในพื้นที่ของบริษัท ไทยโตชิบาอุตสาหกรรม จำกัด
      </p>
    </div>
    
  )
}

export default HeroSection;
