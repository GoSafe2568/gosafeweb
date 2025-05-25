import React from 'react';
import image from '../../assets/img/EHSOrganizationChart.png';

const Feedback = () => {

  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className='text-5xl text-black mb-6'>
        EHS Organization
      </h2>

      <div>
        <p
          className="text-center mt-6 mb-6 px-4 py-2 text-base md:text-lg text-black mx-auto max-w-3xl leading-relaxed bg-white rounded-xl shadow-md"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          แผนผังหน่วยงานสิ่งแวดล้อม อาชีวอนามัย และความปลอดภัย <br/>(EHS : Environment Health and Safety)
        </p>
      </div>

      <div className="flex justify-center lg:p-8">
        <img
          src={image}
          alt="TTEI"
          className="w-full md:w-[700px] lg:w-[800px] border border-stone-900 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Feedback;