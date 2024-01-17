import { Card } from 'flowbite-react';
import React from 'react';
import livarpoll from '@/public/liverpool1.png'
import Image from 'next/image';
const StakedCard = () => {
    return (
        <div className='text-white  rounded-md'>
            <Image src={livarpoll} className='w-full rounded-lg' alt="Flag" />
            <div className='bg-[#2B2B2B] px-10 py-7'>
                <div>
                    <p className='text-2xl '>@2085</p>
                    <p className='mt-3'>Liverpool</p>
                </div>
                <div className='flex justify-between gap-5 py-3 text-xs text-gray-600'>
                    <span>Rarity</span>
                    <span>$ASD for a WIN</span>
                </div>
                <div className='flex justify-between items-center gap-10'>
                    <span>GOLD</span>
                    <span>50</span>
                </div>
            </div>
        </div>
    );
};

export default StakedCard;