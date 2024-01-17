import StakedCard from '@/public/components/Card';
import React from 'react';


const StakingPage = () => {
    return (
        <div className='bg-[#151515] h-[calc(100%-96px)]'>
            <div className='md:flex justify-between items-center gap-5 px-10 text-white '>
                <div className='py-7 space-y-3'>
                    <h2 className='text-5xl'>Back Your Team | Staking</h2>
                    <p className='text-xl font-bold'>They win, you win. Each badge staked earns $asd based on real life wins. </p>
                    <p>Gold = 50 for a win, 25 for a draw - Silver = 20 for a win, 10 for a draw - Bronze = 10 for a win, 5 for a draw. <br />
                        Badges must be staked prior to the game week to count towards $asd allocation.</p>
                </div>
                <div className='p-8 bg-gray-400 rounded-xl text-center '>
                    <h2 className='text-4xl mb-5 font-semibold'>450$ USD</h2>
                    <button className='bg-[#A259FF] px-8 py-3 rounded-lg font-bold'>CLAIM</button>
                </div>
            </div>
            <div className='bg-[#B2B2B2] flex justify-evenly py-3 my-5'>
                <button>Staked <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                    2
                </span></button>
                <button> Not Staked <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                    2
                </span></button>
            </div>

            <div className='flex justify-evenly flex-wrap gap-5 '>
                <StakedCard />
                <StakedCard />
                <StakedCard />
                <StakedCard />
                <StakedCard />
                <StakedCard />
            </div>
        </div>
    );
};

export default StakingPage;