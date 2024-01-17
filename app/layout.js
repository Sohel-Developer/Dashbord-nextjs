
import './globals.css'
import logo from '@/public/asd1.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaAlignLeft, FaBell, FaChartBar, FaChevronDown, FaFootballBall, FaFutbol, FaGlobe, FaGripHorizontal, FaRegEnvelope, FaRegHeart, FaUserCircle } from "react-icons/fa";



export const metadata = {
  title: 'Dashbord | Matches ',
  description: 'Dashbord For Fotball website',
}



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="flex">
        <div className='min-w-24 bg-black min-h-screen min-'>
          <Image src={logo} alt="Logo" />
          <nav className='text-white mt-8 flex flex-col items-center gap-9'>
            <Link className='sideBarLink' href='/'> <FaAlignLeft /></Link>
            <Link className='sideBarLink' href='/'> <FaGripHorizontal /></Link>
            <Link className='sideBarLink' href='/'> <FaChartBar /></Link>
            <div className='w-1/2 border-b-2 my-4 border-gray-300'></div>
            <Link className='sideBarLink' href='/'><FaFutbol /> </Link>
            <Link className='sideBarLink' href='/'><FaFootballBall /> </Link>
            <Link className='sideBarLink' href='/'><FaGlobe /> </Link>
          </nav>
        </div>
        <div className='w-full'>
          <div className=' lg:h-24   bg-[#0D0D0D] text-white lg:flex text-center justify-between items-center space-y-3 lg:space-y-0'>
            <nav className='space-x-7 ps-7'>
              <Link className='text-xl' href="/matches">Matches</Link>
              <Link className='text-xl' href="/staking">Staking</Link>
              <Link className='text-xl' href="/">Rewords</Link>
              <Link className='text-xl' href="/">Trade</Link>
            </nav>
            <h1 className='text-2xl'>The Premier collection</h1>
            <div className='lg:flex justify-between items-center space-y-5 lg:space-y-5'>
              <div className='flex gap-7 justify-center text-2xl pr-10'>
                <Link href='/'><FaBell /></Link>
                <Link href='/'><FaRegEnvelope /></Link>
                <Link href='/'><FaRegHeart /></Link>
              </div>
              <div className='flex items-center justify-center gap-5'>
                <Link className='text-5xl ' href="/"> <FaUserCircle /></Link>
                <span className='flex items-center justify-center pr-5'>Wallet ID <FaChevronDown /></span>
              </div>
            </div>
          </div>

          {children}
        </div>

      </body>
    </html >
  )
}
