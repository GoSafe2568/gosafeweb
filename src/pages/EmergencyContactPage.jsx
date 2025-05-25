import React from 'react';
import image from '../assets/img/PhoneNumber.jpg'

const EmergencyContactPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4"
      style={{ fontFamily: "'Kanit', sans-serif" }}>Emergency Contacts (เบอร์ติดต่อฉุกเฉิน)</h1>
      <div>
        <p className="text-justify indent-8 mt-10 text-lg text-black max-w-4xl"
        style={{ fontFamily: "'Kanit', sans-serif" }}>
        บริษัท ไทยโตชิบาอุตสาหกรรม จำกัด ได้จัดให้มีช่องสัญญาณและเบอร์สายตรงสำหรับติดต่อในกรณีฉุกเฉิน หรือในกรณีปกติของแต่ละหน่วยงาน ดังนี้
        </p>
    </div>
    <div className="flex items-center justify-center px-4">
    <p className="mt-8 text-lg text-center text-neutral-500 max-w-4xl"
    style={{ fontFamily: "'Kanit', sans-serif" }}>ข้อมูลเกี่ยวกับเบอร์ติดต่อฉุกเฉินในพื้นที่ TTEI</p>
    </div>
    <div className="flex justify-center lg:p-8">
        <img src={image} alt="TTEI" className="w-[600px] border border-stone-900 rounded-3xl"/>
    </div>
    </div>
  );
};

export default EmergencyContactPage;
