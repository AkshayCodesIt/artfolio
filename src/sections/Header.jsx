import React from 'react'
import logo from '/images/svgviewer-output.svg'
import { useGSAP } from '@gsap/react'
import { useState } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-scroll'

const Header = ({ onAnimationComplete }) => {

  const [menuopen, setmenuopen] = useState(false)

  useGSAP(() => {
    gsap.from("header", { duration: 1, y: -100, opacity: 0, ease: "none", onComplete: onAnimationComplete });
  }, []);


  return (


    <header className='fixed top-0 left-0 z-50 w-full px-5 py-3 m-auto'>
      <div className='nav-blur flex justify-between items-center border border-gray-300 shadow-md rounded-2xl px-3 md:py-1'>
        <div className='flex flex-row shrink-0 drop-shadow h-12'>
          <img src={logo} alt="artfolio" className='object-cover shrink-0 h-full md:p-1 p-2' />
        </div>

        {/* Desktop menu */}
        <ul className='hidden md:flex lg:space-x-15 space-x-8 font-medium'>
          <li>
            <Link to="home" smooth={true} duration={500} offset={-70} className='cursor-pointer text-sm font-semibold hover:text-gray-600'>
              Home
            </Link>
          </li>
          <li>
            <Link to="discover" smooth={true} duration={500} offset={0} className='cursor-pointer text-sm font-semibold hover:text-gray-500'>
              Discover
            </Link>
          </li>
          <li>
            <Link to="community" smooth={true} duration={500} offset={0} className='cursor-pointer text-sm font-semibold hover:text-gray-500'>
              Community
            </Link>
          </li>
          <li>
            <Link to="story" smooth={true} duration={500} offset={-60} className='cursor-pointer text-sm font-semibold hover:text-gray-500'>
              Story
            </Link>
          </li>
          <li>
            <Link to="pricing" smooth={true} duration={500} offset={-70} className='cursor-pointer text-sm font-semibold hover:text-gray-500'>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="connect" smooth={true} duration={500} offset={-70} className='cursor-pointer text-sm font-semibold hover:text-gray-500'>
              Connect
            </Link>
          </li>
        </ul>
        {/* </div> */}
        <div className='hidden md:block px-5 py-2 m-2 text-white bg-black relative SemiSans-font tracking-wider rounded-4xl font-semibold cursor-pointer z-10 overflow-hidden transition-colors duration-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#95ecb0] before:to-[#0b3866] before:z-[-1] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100'>
          Join
        </div>


        <button className="md:hidden z-50 size-9 border-2 border-gray-400 rounded-xl flex justify-center items-center cursor-pointer"
          onClick={() => setmenuopen(!menuopen)}
        >
          <img
            src={`/images/Herosection/${menuopen ? "close" : "menu"}.svg`}
            alt="magic"
            className="size-6 object-contain"
          />

        </button>

        {/* mobile menu */}


        <div id='menu-blur' className={`absolute overflow-hidden md:hidden top-16 left-0 w-full bg-yellow-600m rounded-2xl flex flex-col items-center gap-6 font-semibold text-lg transform transition-all duration-600 ease-in-out ${menuopen ? 'translate-y-0 opacity-100 bg-linear-to-r from-[#94d2bd] to-[#f0f3bd]' : 'scale-0 origin-top-right opacity-0 pointer-events-none'}`}
        >
          <ul className='flex flex-col space-y-4 py-5 items-center w-full nav-blur'>
            <li>
              <Link to="home" smooth={true} duration={500} offset={-70} onClick={() => setmenuopen(false)} className='cursor-pointer bg-amber-700, text-sm font-semibold hover:text-gray-500'>
                Home
              </Link>
            </li>
            <li>
              <Link to="discover" smooth={true} duration={500} offset={0} onClick={() => setmenuopen(false)} className='cursor-pointer text-sm font-semibold hover:text-gray-500'>
                Discover
              </Link>
            </li>
            <li>
              <Link to="community" smooth={true} duration={500} offset={0} onClick={() => setmenuopen(false)} className='cursor-pointer text-sm font-semibold hover:text-gray-500'>
                Community
              </Link>
            </li>
            <li>
              <Link to="story" smooth={true} duration={500} offset={0} onClick={() => setmenuopen(false)} className='cursor-pointer text-sm font-semibold hover:text-gray-500'>
                Story
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} duration={500} offset={0} onClick={() => setmenuopen(false)} className='cursor-pointer text-sm font-semibold hover:text-gray-500'>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="connect" smooth={true} duration={500} offset={0} onClick={() => setmenuopen(false)} className='cursor-pointer text-sm font-semibold hover:text-gray-500'>
                Connect
              </Link>
            </li>
            <li>
              <div className='md:hidden px-5 py-2 m-2 text-white text-sm bg-black rounded-4xl font-semibold cursor-pointer'>
                Join
              </div>
            </li>
          </ul>
        </div>


      </div>




    </header >
  )
};

export default Header