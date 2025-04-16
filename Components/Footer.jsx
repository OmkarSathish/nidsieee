// import Image from 'next/image'
// import React from 'react'
// import {assets} from '../Assest/assets'

// const Footer = () => {
//     return (
//         <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 itemscenter'>
//             <Image src={assets.logo_light} alt= '' width={120}/>
//         </div>

//     )
// }
// export default Footer

import Image from 'next/image';
import React from 'react';
import { assets } from '../Assets/assets'; // ✅ Ensure correct folder name

const Footer = () => {
    return (
        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
            <Image src={assets.logo_light} alt='' width={120} height={50} />
            <p className='text-sm text-white'>All rights reserved. Copyright @blogger-Anvitha and the Nidhis</p>

            <div className ='flex'>
                <Image src = {assets.facebook_icon} alt ='' width={40} height={40} />
                <Image src = {assets.twitter_icon} alt ='' width={40} height={40} />
                <Image src = {assets.googleplus_icon} alt ='' width={40} height={40} />


            </div>
        </div>
    );
};

export default Footer;
