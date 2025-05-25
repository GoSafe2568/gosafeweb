import React from 'react'
import image from "../../assets/img/response/AEDPost.jpg";

const AEDPage = () => {
  return (
    <div className="max-w-[600px] mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'Kanit', sans-serif", textDecoration: "underline"}}>โปสเตอร์วิธีการใช้งานเครื่อง AED</h1>
                  
        <div className="flex justify-center lg:p-8">
            <img src={image} alt="How to use AED" className="border border-stone-900 rounded-3xl"/>
        </div>
    </div>
    );
};

export default AEDPage