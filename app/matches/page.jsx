import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import flag1 from '@/public/Chelsea-flag.png'
import bollImg from '@/public/soccer-goal.png'
import livarpool from '@/public/liverpool1.png'
import everton from '@/public/everton1.png'
import LatestMatches from '@/public/components/LatestMatches'

const MatchesPage = () => {
    return (
        <section className='bg-[#151515] w-full h-[calc(100%-96px)] grid grid-cols-[340px_1fr_340px]'>
            <div className='mt-16'>
                <div className='px-3'>
                    <div className='flex mb-6 justify-between items-center text-white'>
                        <h2 className='text-xl text-[var(--primary-color)]'>Live Matches</h2>
                        <span className='flex space-x-2'><FaArrowLeft className='text-gray-600' /> <FaArrowRight className='text-[var(--primary-color)]' /></span>
                    </div>
                    <div className='border p-4  text-center border-[var(--primary-color)] rounded-lg grid grid-cols-3'>
                        <div className=' flex flex-col items-center gap-3 '>
                            <Image src={flag1} alt='Chelsea-Flag' />
                            <p className='text-white'>Chelsea</p>
                            <p className='py-1 px-6 bg-white rounded-md'>1.8</p>
                        </div>
                        <div className='flex flex-col items-center gap-3'>
                            <small className='text-gray-400'>Premier League</small>
                            <p className='text-white text-2xl'>1:2</p>
                            <div className='w-2 h-2 -ms-10  rounded-full bg-[var(--primary-color)]'></div>
                            <p className='py-1 px-6 bg-white rounded-md'>1.8</p>
                        </div>
                        <div className=' flex flex-col items-center gap-3 '>
                            <Image src={flag1} alt='flag' />
                            <p className='text-white'>Leicester C</p>
                            <p className='py-1 px-6 bg-white rounded-md'>1.3</p>
                        </div>

                    </div>
                </div>

                {/* 2nd div */}
                <div className='bg-black m-3 text-white rounded-md space-y-5 py-5'>
                    <div className='grid grid-flow-col text-center col-span-3'>
                        <span>Team</span><span>D</span><span>L</span><span>Ga</span><span>Gd</span><span>Pts</span>
                    </div>
                    <div className='grid grid-flow-col text-center col-span-3'>
                        <span>Liver Pool</span><span>6</span><span>2</span><span>21</span><span>16</span><span>23</span>
                    </div>
                    <div className='grid grid-flow-col text-center col-span-3'>
                        <span>Liver Pool</span><span>6</span><span>2</span><span>21</span><span>16</span><span>23</span>
                    </div>
                    <div className='grid grid-flow-col text-center col-span-3'>
                        <span>Liver Pool</span><span>6</span><span>2</span><span>21</span><span>16</span><span>23</span>
                    </div>
                    <div className='grid grid-flow-col text-center col-span-3'>
                        <span>Liver Pool</span><span>6</span><span>2</span><span>21</span><span>16</span><span>23</span>
                    </div>
                </div>

                <div className='bg-black m-3 text-white rounded-md space-y-3 py-5'>
                    <div className=' flex justify-between px-3 '>
                        <span>Team</span> <div className='space-x-10 border-b-[1px] pb-2 border-gray-500 w-1/2'><span>Holding</span><span>$ASD</span></div>
                    </div>
                    <div className=' flex justify-between text-center px-3'>
                        <span>Wallet ID Hare</span> <div className='space-x-10 border-b-[1px] pb-2 border-gray-500 w-1/2'><span>23</span><span>38</span></div>
                    </div>
                    <div className=' flex justify-between text-center px-3'>
                        <span>Wallet ID Hare</span> <div className='space-x-10 border-b-[1px] pb-2 border-gray-500 w-1/2'><span>23</span><span>38</span></div>
                    </div>
                    <div className=' flex justify-between text-center px-3'>
                        <span>Wallet ID Hare</span> <div className='space-x-10 border-b-[1px] pb-2 border-gray-500 w-1/2'><span>23</span><span>38</span></div>
                    </div>
                    <div className=' flex justify-between text-center px-3'>
                        <span>Wallet ID Hare</span> <div className='space-x-10 border-b-[1px] pb-2 border-gray-500 w-1/2'><span>23</span><span>38</span></div>
                    </div>

                </div>
            </div>
            {/* 2nd Div */}
            <div className=' grid-cols-6 p-5'>
                <div className='bg-[var(--primary-color)] rounded-md p-10 flex justify-between items-center'>

                    <div className='text-white space-y-5 '>
                        <h1 className='text-5xl'>Liverpool</h1>

                        <p>VS</p>
                        <h1 className='text-5xl'>Everton</h1>
                        <div className='flex text-xl gap-5'>
                            <span >5:00PM</span><span>Spain</span>
                        </div>
                        <p>Next Fixture</p>
                    </div>

                    <div className='flex gap-5'>
                        <Image src={livarpool} width='165px' height='165px' alt='Liverpool' />
                        <Image src={everton} width='165px' height='165px' alt='everton' />
                    </div>



                </div>
                <div className='mt-5 '>
                    <LatestMatches />
                </div>
            </div>

            {/* 3rd Div */}

            <div className='mt-16'>
                <div className='px-3'>
                    <div className='flex mb-6 justify-between items-center text-white'>
                        <h2 className='text-xl'>Trending Now</h2>
                        <span className='flex space-x-2'><FaArrowLeft className='text-gray-600' /> <FaArrowRight className='text-gray-400' /></span>
                    </div>
                    <div className='border p-4  text-center border-[var(--primary-color)] rounded-lg grid grid-cols-3'>
                        <div className=' flex flex-col items-center gap-3 '>
                            <Image src={flag1} alt='Chelsea-Flag' />
                            <p className='text-white'>Chelsea</p>
                            <p className='py-1 px-6 bg-white rounded-md'>1.8</p>
                        </div>
                        <div className='flex flex-col items-center gap-3'>
                            <small className='text-gray-400'>Premier League</small>
                            <p className='text-white text-2xl'>1:2</p>
                            <div className='w-2 h-2 -ms-10  rounded-full bg-[var(--primary-color)]'></div>
                            <p className='py-1 px-6 bg-white rounded-md'>1.8</p>
                        </div>
                        <div className=' flex flex-col items-center gap-3 '>
                            <Image src={flag1} alt='flag' />
                            <p className='text-white'>Leicester C</p>
                            <p className='py-1 px-6 bg-white rounded-md'>1.3</p>
                        </div>

                    </div>


                    <div className='text-black my-10 space-y-5 py-5 bg-green-600  rounded-md'>
                        <div className='flex justify-evenly items-center'>
                            <span>Attacks</span>
                            <span>27</span>
                            <div className="w-2/5 bg-white rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-black h-2.5 w-3/5 rounded-full" ></div>
                            </div>
                            <span>12</span>
                        </div>
                        <div className='flex justify-evenly items-center'>
                            <span>Attacks</span>
                            <span>6</span>
                            <div className="w-2/5 bg-white rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-black h-2.5 w-2/5 rounded-full" ></div>
                            </div>
                            <span>16</span>
                        </div>
                        <div className='flex justify-evenly items-center'>
                            <span>Attacks</span>
                            <span>70%</span>
                            <div className="w-2/5 bg-white rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-black h-2.5 w-4/5 rounded-full" ></div>
                            </div>
                            <span>30%</span>
                        </div>

                    </div>

                </div>

                <div className='text-white bg-[var(--primary-color)] ms-3 flex items-center gap-3 mt-20 rounded-t-md rounded-s-md'>
                    <div className='p-2'>
                        <h2 className='text-xl '>Try Your Luck in</h2>
                        <h1 className='text-3xl  font-bold'>SWAPs</h1>
                        <p className='text-sm'>Swap a card or trade for SOL</p>
                    </div>
                    <Image className='-mt-8 ' src={bollImg} alt='' />

                </div>






            </div>

        </section>
    );
};

export default MatchesPage;