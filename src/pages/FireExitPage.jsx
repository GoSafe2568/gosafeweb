import React, { useEffect } from 'react';
import { FaRegFilePdf } from "react-icons/fa6";
import imageF1 from '../assets/img/layoutF1.png';
import imageF2 from '../assets/img/layoutF2.png';
import imageF3 from '../assets/img/layoutF3.png';

const fireExitData = [
  {
    image: imageF1,
    title: 'ชั้น 1 (Floor 1)',
    description: 'แสดงแผนผังทางหนีไฟและอุปกรณ์ดับเพลิงสำหรับชั้น 1',
    pdfLink: 'https://drive.google.com/file/d/19KghTEXTVZO8pglK4fz65tc1Mju5f8ad/view?usp=sharing',
  },
  {
    image: imageF2,
    title: 'ชั้น 2 (Floor 2)',
    description: 'แสดงแผนผังทางหนีไฟและอุปกรณ์ดับเพลิงสำหรับชั้น 2',
    pdfLink: 'https://drive.google.com/file/d/1Tmx8wXjJ51prtAU7seeEway0-WcHxoeZ/view?usp=sharing',
  },
  {
    image: imageF3,
    title: 'ชั้น 3 (Floor 3)',
    description: 'แสดงแผนผังทางหนีไฟและอุปกรณ์ดับเพลิงสำหรับชั้น 3',
    pdfLink: 'https://drive.google.com/file/d/1Bewvre_bGvs98btB6RPU-RpXLV-LbY9l/view?usp=sharing',
  },
];

const FireExitPage = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="max-w-[1200px] mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Kanit', sans-serif" }}>
        เส้นทางหนีไฟและจุดติดตั้งอุปกรณ์ดับเพลิง (FIRE EXIT & FIRE HOSE CABINET)
      </h1>
      <p className="text-justify indent-8 mt-6 text-lg text-black max-w-4xl" style={{ fontFamily: "'Kanit', sans-serif" }}>
        อาคารในบริษัท ไทยโตชิบาอุตสาหกรรม จำกัด มีทั้งหมด 3 ชั้น และมีชั้นลอยแทรกอยู่ระหว่างชั้นด้วย แผนผังเส้นทางหนีไฟของแต่ละชั้น มีดังนี้
      </p>
      <div className="mt-10 flex flex-col gap-12">
        {fireExitData.map((item, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-8 items-center">
            <img src={item.image} alt={item.title} className="w-full max-w-md border rounded-xl" />
            <div className="text-left max-w-md space-y-4">
              <h2 className="text-2xl font-semibold text-green-800" style={{ fontFamily: "'Kanit', sans-serif" }}>
                {item.title}
              </h2>
              <p className="text-gray-700" style={{ fontFamily: "'Kanit', sans-serif" }}>
                {item.description}
              </p>
              <a
                href={item.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition w-100 max-w-sm"
              >
                เปิด PDF <FaRegFilePdf className="ml-2"/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FireExitPage;
