import React from "react"
import { FaPhone } from "react-icons/fa6";
import PartnerSection from '../components/PartnerSection';

const InfoAboutMe = () => {
  return (
    <div className="mt-20 max-w-5xl mx-auto px-4">
      <h3 className="text-3xl font-bold mb-6 text-center"
        style={{ fontFamily: "'Kanit', sans-serif" }}>
        เกี่ยวกับเรา
      </h3>

      <div className="max-w-4xl mx-auto p-6 space-y-4" style={{ fontFamily: "'Kanit', sans-serif" }}>
        <div className="flex">
          <div className="w-1/3 bg-red-600 text-white px-4 py-2">ชื่อบริษัท</div>
          <div className="w-2/3 bg-white text-black px-4 py-2 border border-gray-200">
            บริษัท ไทยโตชิบา อุตสาหกรรม จำกัด (TTEI)
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 bg-red-600 text-white px-4 py-2">ก่อตั้ง</div>
          <div className="w-2/3 bg-white text-black px-4 py-2 border border-gray-200">
            29 กันยายน 2512
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 bg-red-600 text-white px-4 py-2">ที่อยู่</div>
          <div className="w-2/3 bg-white text-black px-4 py-2 border border-gray-200">
            129/1-5 หมู่ 2 ถนนติวานนท์ ตำบลท่าทราย อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 11000
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 bg-red-600 text-white px-4 py-2">พื้นที่</div>
          <div className="w-2/3 bg-white text-black px-4 py-2 border border-gray-200">
            พื้นที่ของพื้นที่ดินรวมทั้งหมด มีขนาด 58,352 ตารางเมตร
            <br/>พื้นที่ใช้สอยรวมของอาคาร (รวมทุกชั้น) มีขนาด 73,635 ตารางเมตร
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 bg-red-600 text-white px-4 py-2">ประเภทธุรกิจ</div>
          <div className="w-2/3 bg-white text-black px-4 py-2 border border-gray-200">
            การผลิตและจำหน่ายเครื่องใช้ไฟฟ้าภายในบ้าน
          </div>
        </div>

        {/* เพิ่มข้อมูลอื่น ๆ ได้ที่นี่ เช่น */}
        <div className="flex">
          <div className="w-1/3 bg-red-600 text-white px-4 py-2">ผู้บริหาร</div>
          <div className="w-2/3 bg-white text-black px-4 py-2 border border-gray-200">
            คุณกนิษฐ์ เมืองกระจ่าง
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 bg-red-600 text-white px-4 py-2">ทุนจดทะเบียน</div>
          <div className="w-2/3 bg-white text-black px-4 py-2 border border-gray-200">
            198.2 ล้านบาท
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 bg-red-600 text-white px-4 py-2">จำนวนพนักงาน</div>
          <div className="w-2/3 bg-white text-black px-4 py-2 border border-gray-200">
            1,465 คน (ข้อมูลปี 2568)
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 bg-red-600 text-white px-4 py-2">โทรศัพท์</div>
          <div className="w-2/3 bg-white text-black px-4 py-2 border border-gray-200">
             <FaPhone className="inline mr-2" />02-588-3010, 02-589-0160, 02-591-9555 แฟกซ์ 02-589-7028
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 bg-red-600 text-white px-4 py-2">บริษัทคู่ค้า</div>
          <div className="w-2/3 bg-white text-black px-4 py-2 border border-gray-200">
            
          </div>
        </div>
         <div className="mt-10">
            <PartnerSection />
        </div>

      </div>
    </div>
  );
};

export default InfoAboutMe;
