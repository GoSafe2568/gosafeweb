import React, { useEffect } from 'react';
import { FaLine } from "react-icons/fa6";
import ECText from './ECText';
import SingleEC from './SingleEC';

import image1 from '../../assets/img/Pang/9.png';
import image2 from '../../assets/img/Pang/10.png';
import image3 from '../../assets/img/Pang/11.png';
import image4 from '../../assets/img/Pang/12.png';
import image5 from '../../assets/img/Pang/13.png';
import image6 from '../../assets/img/Pang/14.png';

const EqiupmentCheck = [
  {
    name: 'อ่างล้างตาและฝักบัวล้างตัว',
    align: 'right',
    image: image1,
    link: image1, // เปิดรูปเต็ม
  },
  {
    name: 'ตู้สายฉีดน้ำดับเพลิง',
    align: 'left',
    image: image2,
    link: image2,
  },
  {
    name: 'อุปกรณ์ระงับเหตุฉุกเฉิน',
    align: 'right',
    image: image3,
    link: image3,
  },
  {
    name: 'เปลสนาม',
    align: 'left',
    image: image4,
    link: image4,
  },
  {
    name: 'กล่องพยาบาล',
    align: 'right',
    image: image5,
    link: image5,
  },
  {
    name: 'ตู้กดน้ำดื่ม',
    align: 'left',
    image: image6,
    link: image6,
  },
];

const ECMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id='ResponsePlan' className='max-w-[1200px] mx-auto px-4'>
      <ECText />
      <div className='flex flex-col md:grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto mt-12'>
        {EqiupmentCheck.map((item, index) => (
          <SingleEC 
            key={index} 
            name={item.name} 
            align={item.align} 
            image={item.image}
            link={item.link} 
          />
        ))}
        
      </div>
      <div className='text-center mt-10'>
        <span className="text-md text-blue-600 whitespace-nowrap" style={{ fontFamily: "'Kanit', sans-serif" }}>
        สอบถามเพิ่มเติมที่ <FaLine className="inline ml-2 mr-2 text-green-600"/>Line : Safety Reminder Bot
        </span>
      </div>
    </div>
  );
};

export default ECMain;
