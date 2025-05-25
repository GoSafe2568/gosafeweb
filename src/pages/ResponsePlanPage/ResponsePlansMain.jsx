import React, { useEffect } from 'react';
import ResponsePlanText from './ResponsePlanText'
import SingleResponsePlan from './SingleResponsePlan'

import image1 from '../../assets/img/firepexels.jpg'
import image2 from '../../assets/img/leakpexels.jpg'
import image3 from '../../assets/img/earthquakepexels.jpg'
import image4 from '../../assets/img/floodpexels.jpg'
import image5 from '../../assets/img/AEDpig.jpg'
import image6 from '../../assets/img/response.jpg'

const ResponsePlan =[
{
    name: 'ไฟไหม้ (conflagration)',
    align: 'right',
    image: image1,
    link: '/FireRes',
},
{
    name: 'สารเคมีรั่วไหลในโรงงาน (Chemicals and Dangerous Goods Spill)',
    align: 'left',
    image: image2,
    link: '/LeakRes',
},
{
    name: 'แผ่นดินไหว (Earthquake)',
    align: 'right',
    image: image3,
    link: '/EarthquakeRes',
},
{
    name: 'น้ำท่วม (Flood)',
    align: 'left',
    image: image4,
    link: '/FloodRes',
},
{
    name: 'วิธีการใช้เครื่องกระตุกหัวใจไฟฟ้าอัตโนมัติ (AED)',
    align: 'right',
    image: image5,
    link: '/AED',
},
{
    name: 'วิธีการช่วยฟื้นคืนชีพขั้นพื้นฐาน (CPR)',
    align: 'left',
    image: image6,
    link: '/CPR',
},
];

const ResponsePlansMain = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div id='ResponsePlan' className='max-w-[1200px] mx-auto px-4'>
  <ResponsePlanText />
  <div className='flex flex-col md:grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto mt-12'>
    {ResponsePlan.map((item, index) => (
      <SingleResponsePlan 
        key={index} 
        name={item.name} 
        align={item.align} 
        image={item.image}
        link={item.link} 
      />
    ))}
  </div>
</div>
  );
};

export default ResponsePlansMain