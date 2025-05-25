import React from 'react'
import InformationText from './InformationText'
import SingleInformation from './SingleInformation'

import image1 from '../../assets/img/AssemblyPoint.jpg'
import image2 from '../../assets/img/fireexit2.jpg'
import image3 from '../../assets/img/Extinguisher2.jpg'
import image4 from '../../assets/img/contact.jpg'
import image5 from '../../assets/img/safetymanual.jpg'
import image6 from '../../assets/img/response.jpg'
import image7 from '../../assets/img/safetyeqiupment.jpg'

const Informations =[
{
    name: 'จุดรวมพล (Assembly Point)',
    year: 'Last:2025',
    align: 'right',
    image: image1,
    link: '/assembly-point',
},
{
    name: 'เส้นทางหนีไฟและจุดติดตั้งอุปกรณ์ดับเพลิง (FIRE EXIT & FIRE HOSE CABINET)',
    year: 'Last:2025',
    align: 'left',
    image: image2,
    link: '/layout-fire-exit',
},
{
    name: 'ถังดับเพลิง (Extinguisher)',
    year: 'Last:2025',
    align: 'right',
    image: image3,
    link: '/extinguisher',
},
{
    name: 'เบอร์ติดต่อฉุกเฉิน (Emergency Contacts)',
    year: 'Last:2025',
    align: 'left',
    image: image4,
    link: '/emergency-contacts',
},
{
    name: 'คู่มือความปลอดภัยในการทำงาน (Safety Manual)',
    year: 'Last:2025',
    align: 'right',
    image: image5,
    link: 'https://drive.google.com/file/d/1xNCQ9NNxJse3yn44AvmZdzQL-UGau7k1/view?usp=sharing',
},
{
    name: 'วิธีรับมือในสถานการณ์ฉุกเฉิน (Emergency Response Plans)',
    year: 'Last:2025',
    align: 'left',
    image: image6,
    link: '/emergency-response-plans',
},
{
    name: 'วิธีตรวจสอบอุปกรณ์ความปลอดภัย (Safety Equipment Inspection)',
    year: 'Last:2025',
    align: 'right',
    image: image7,
    link: '/ec',
},
];

const InformationMain = () => {
  return (
    <div id='information' className='max-w-[1200px] mx-auto px-4'>
        <InformationText/>
    <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {Informations.map((item,index)=>{
            return <SingleInformation 
            key={index} 
            name={item.name} 
            year={item.year} 
            align={item.align} 
            image={item.image}
            link={item.link} />
        })}
    </div>
    </div>
  );
};

export default InformationMain