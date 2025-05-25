import React from 'react'
import image1 from "../../assets/img/response/EarthquakePost1.jpg";
import image2 from "../../assets/img/response/EarthquakePost2.jpg";

const EarthquakePage = () => {
  return (
    <div className="max-w-[600px] mx-auto p-8 text-center">
              <h1 className="text-4xl font-bold mb-4"
              style={{ fontFamily: "'Kanit', sans-serif", textDecoration: "underline"}}>โปสเตอร์วิธีรับมือเมื่อเกิดเหตุการณ์แผ่นดินไหว</h1>
  
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 space-y-4 lg:space-y-0 p-4">
  
        <div>
          <img
      src={image1}
      alt="EarthquakeRes1"
      className="w-[90vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[600px] border border-stone-900 rounded-3xl"/>
        </div>
  
        <div>
          <img
      src={image2}
      alt="EarthquakeRes2"
      className="w-[90vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[600px] border border-stone-900 rounded-3xl"/>
        </div>
          </div>
        </div>
          );
        };

export default EarthquakePage