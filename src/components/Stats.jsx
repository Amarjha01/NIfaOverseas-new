// import React from 'react'

// const Stats = () => {
//   return (
//     <div className='  h-auto w-full py-2'>
//       <ul className=' grid grid-cols-4   text-center gap-3 '>
//         <li className='bg-amber-600 py-5'>
//             <p>3000</p>
//             <p>Exhibitors</p>
//         </li>
//         <li className='bg-amber-600 py-5'>
//             <p>3000</p>
//             <p>Exhibitors</p>
//         </li>
//         <li className='bg-amber-600 py-5'>
//             <p>3000</p>
//             <p>Exhibitors</p>
//         </li>
//         <li className='bg-amber-600 py-5'>
//             <p>3000</p>
//             <p>Exhibitors</p>
//         </li>
      
//       </ul>
//     </div>
//   )
// }

// export default Stats

import React from 'react';

const statsData = [
  { number: "3000", label: "Exhibitors" },
  { number: "5000", label: "Visitors" },
  { number: "200", label: "Speakers" },
  { number: "50", label: "Countries" },
];

const Stats = () => {
  return (
    <div className="h-auto w-full py-2" id='stats'>
      <ul className="grid grid-cols-4 text-center gap-3 mx-1.5">
        {statsData.map((stat, index) => (
          <li key={index} className="bg-amber-600 py-5">
            <p className="text-xl font-bold">{stat.number}</p>
            <p className="text-sm">{stat.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stats;