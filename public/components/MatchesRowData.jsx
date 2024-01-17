import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaClock, FaHeart, FaMapMarkerAlt } from "react-icons/fa";

import barcelona from '@/public/barcelona.png'
import realmardrid from '@/public/realmadrid.png'

const MatchesRowData = () => {
    return (
        <div className='text-white rounded-md bg-black   flex  justify-between items-center p-5 matchesRow'>
            <div className='flex items-center gap-5'>
                <Image src={barcelona} alt='Barcelona Flag' />
                <p>Barcelona</p>
            </div>
            <div className='flex items-center gap-5'>
                <Image src={realmardrid} alt='Real Mardid' />
                <p>Real Mardid</p>
            </div>
            <div className='flex items-center gap-3'>
                <FaClock />
                <span>5:00 PM</span>
            </div>
            <div className='flex items-center gap-3'>
                <FaMapMarkerAlt />
                <span>Spain</span>
            </div>
            <div >
                <FaHeart />
            </div>
            <Link href="/" className='flex gap-3 items-center'>View Details <FaArrowRight /></Link>
        </div>
    );
};

export default MatchesRowData;