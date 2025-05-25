import React, { useState } from 'react';
import logotoshiba from '../assets/img/Toshiba_Logo.jpg';
import logottei from '../assets/img/logoTTEI.jpg';
import { TfiEmail } from "react-icons/tfi";
import { FaPhone, FaCopy } from "react-icons/fa6";

const Contacts = () => {
  const [copied, setCopied] = useState(false);
  const internalPhone = '4900 ต่อ 4907';

  const handleCopy = () => {
    navigator.clipboard.writeText(internalPhone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-[1200px] text-center mx-auto p-8">
      <h1
        className="text-4xl font-bold mb-4"
        style={{ fontFamily: "'Kanit', sans-serif" }}
      >
        ข้อมูลติดต่อ
      </h1>

      {/* TTEI */}
      <div className="p-8 text-left">
        <img 
          src={logottei}
          alt="Logo TTEI"
          className="w-full max-w-[400px] md:max-w-[300px] lg:max-w-[400px] h-auto mx-auto lg:mx-0"
        />
        <p
          className="mt-6 mb-2 px-4 py-2 text-base md:text-lg text-black leading-relaxed bg-white rounded-xl shadow-md inline-block mx-auto"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          <a
            href="http://ttei.toshiba.co.th/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-600"
          >
            Thai Toshiba Electric Industries Co. Ltd.
          </a>
        </p>
        <p
          className="mb-6 px-4 py-2 text-base md:text-lg text-black leading-relaxed bg-white rounded-xl shadow-md inline-block mx-auto"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          หรือ 
          <a className="ml-2 hover:underline text-black">
            <TfiEmail className="inline mr-2" />
            Email: info@ttei.toshiba.co.th
          </a>
        </p>
      </div>

      {/* Toshiba Thailand */}
      <div className="p-8 text-left">
        <img 
          src={logotoshiba}
          alt="Logo Toshiba"
          className="w-full max-w-[400px] md:max-w-[300px] lg:max-w-[400px] h-auto mx-auto lg:mx-0"
        />
        <p
          className="mt-6 mb-6 px-4 py-2 text-base md:text-lg text-black leading-relaxed bg-white rounded-xl shadow-md inline-block mx-auto"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          <a
            href="https://www.toshiba-lifestyle.com/th"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-600"
          >
            Toshiba Thailand
          </a> 
        </p>
      </div>

      {/* แผนก */}
      <div className="p-8 text-left">
        <p
          className="mt-6 mb-4 px-4 py-2 text-base md:text-lg text-black leading-relaxed bg-white rounded-xl shadow-md inline-block mx-auto"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          แผนก E&E
        </p>

        {/* โทรศัพท์หลัก */}
        <a
          href="tel:025890160"
          className="block mb-4 hover:underline text-black"
        >
          <FaPhone className="inline mr-2 text-red-600" />
          โทร: 02-589-0160 ต่อหน่วยงานความปลอดภัย <button onClick={handleCopy} className="text-blue-600 hover:text-blue-800">
            {copied ? 'คัดลอกแล้ว' : <FaCopy />}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
