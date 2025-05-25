import React from 'react'
import image from "../../assets/img/response/FloodPost.jpg";

const FloodPage = () => {
  return (
    <div className="max-w-[600px] mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'Kanit', sans-serif", textDecoration: "underline"}}>โปสเตอร์วิธีรับมือเมื่อเกิดอุทกภัย</h1>
              
        <div className="flex justify-center lg:p-8">
            <img src={image} alt="FloodRes" className="border border-stone-900 rounded-3xl"/>
        </div>
    </div>
    );
};

export default FloodPage