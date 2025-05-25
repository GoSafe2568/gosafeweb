import React from 'react';
import { motion } from 'framer-motion';

const PartnerSection = () => {
  const upperImageNames = [
    "amazonbasics.png",
    "Bajaj.png",
    "BIMART.png",
    "comfeeLogo.png",
    "Croma.png",
    "EMPIRE.png",
    "ENGEL.png",
    "Flipkart.png",
    "GeneralElectricLogo.png",
  ];

  const lowerImageNames = [
    "HAFELE.png",
    "Haier.png",
    "HERAN.png",
    "IFB2.png",
    "Midea.png",
    "Morphy.png",
    "PanasonicLogo.png",
    "Target.png",
    "TECO.png",
  ];

  return (
    <div className='flex flex-col items-center mt-[100px]'>
      <h2 className='text-5xl text-black mb-10'>Business Partners</h2>
      <div className='container mx-auto'>
      <div className='flex'>
        <motion.div 
        initial={{ x:0 }} 
        animate={{x:"-100%"}}
        transition={{duration:60, repeat:Infinity}}
        className='flex flex-shrink-0'>
          {upperImageNames.map((name, index) => {
            return <img className='w-56 h-40' src={`/PartnerLogo/${name}`}
              key={index}  />
          })}
        </motion.div>
        
        <motion.div 
        initial={{ x:0 }} 
        animate={{x:"-100%"}}
        transition={{duration:60, repeat:Infinity}}
        className='flex flex-shrink-0'>
          {upperImageNames.map((name, index) => {
            return <img className='w-56 h-40' src={`/PartnerLogo/${name}`}
              key={index}  />
          })}
        </motion.div>
        </div>

        <div className='flex'>
        <motion.div 
        initial={{ x:"-100%" }} 
        animate={{x:0}}
        transition={{duration:60, repeat:Infinity}}
        className='flex flex-shrink-0'>
          {lowerImageNames.map((name, index) => {
            return <img className='w-56 h-40' src={`/PartnerLogo/${name}`}
              key={index}  />
          })}
        </motion.div>
        
        <motion.div 
        initial={{ x:"-100%" }} 
        animate={{x:0}}
        transition={{duration:60, repeat:Infinity}}
        className='flex flex-shrink-0'>
          {lowerImageNames.map((name, index) => {
            return <img className='w-56 h-40' src={`/PartnerLogo/${name}`}
              key={index}  />
          })}
        </motion.div>
        </div>
        </div>
      </div>
  );
};

export default PartnerSection;
