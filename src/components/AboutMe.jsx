import React from "react"
import { useNavigate } from "react-router-dom";
import profilePic from '../assets/img/TTEIProfile2.png'

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-4 lg:mb-6">

      {/* รูปภาพพาดเต็มจอ แต่กึ่งกลางและไม่เบี้ยว */}
      <div className="relative w-screen overflow-hidden">
        <img src={profilePic} alt="TTEI" className="w-full object-cover" />
      </div>

      {/* เนื้อหาวางกลางจอ */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center lg:items-start mt-10">
        <h2 className="pb-2 text-4xl tracking-tighter text-center lg:text-left lg:text-6xl"
          style={{ fontFamily: "'Kanit', sans-serif" }}>
          โตชิบานำสิ่งที่ดี...สู่ชีวิต
        </h2>
        <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text lg:text-3xl tracking-tight text-transparent text-center lg:text-left sm:text-xl"
          style={{ fontFamily: "'Kanit', sans-serif" }}>
          Thai Toshiba Electric Industries นำสิ่งที่ดีมอบให้คนไทยมากว่า 55 ปี
        </span>

        
        {/* กล่องข้อความสีแดงครอบคำว่า อ่านข้อมูลเพิ่มเติม */}
        <p
          onClick={() => navigate("/info-about-me")}
          className="bg-red-500 text-white px-6 py-3 mt-10 cursor-pointer select-none"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          อ่านข้อมูลเพิ่มเติม
        </p>
      </div>

    </div>
  )
}

export default AboutMe
