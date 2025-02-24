import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Showcase = () => {


    useGSAP(() => {
        gsap.to(".bgside", {
            y: -60,
            x: -40,
            rotate: 20,
            scale: 1.1,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "none",
        });
    }, []);



    return (
        <section id='discover' className='md:py-30 md:px-20 pt-10 w-full h-[100dvh] p-7'>
            <div className=' md:max-w-[65%] relative max-w-[90%] z-10 max-md:mt-10'>

                <div className='lg:hidden bgside -z-1 absolute top-0 md:top-55 max-md:top-45 md:-right-90 max-md:-right-70 rotate-45'>
                    <img src="/images/scribble1.svg" alt="" />
                </div>

                <h1 className='basementgrot-font drop-shadow-md md:text-6xl text-4xl font-extrabold tracking-wide py-4 uppercase bg-gradient-to-r from-[#0f68a9] via-[#07f49e] to-[#42047e] bg-clip-text text-transparent'>
                    Discover. Create. Connect.
                </h1>

                <h2 className='Sans-font text-1xl text-gray-800 font-medium py-5 uppercase tracking-wider'>
                    A marketplace built for artists & collectors
                </h2>

                <div className='md:max-w-[75%] Sans-font max-w-[90%] text-[16px] font-medium tracking-wider py-3'>
                    Welcome to Artfolio, the ultimate marketplace where artists, collectors, and enthusiasts come together. Whether you're an artist looking to sell your work or a collector searching for unique pieces, we make the process seamless and rewarding.
                </div>

                <button className='relative mt-7 SemiSans-font tracking-wider px-5 py-2 m-2 text-white rounded-4xl font-semibold cursor-pointer z-10 overflow-hidden bg-black transition-colors duration-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#95ecb0] before:to-[#0b3866] before:z-[-1] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100'>
                    Join for $9.99/month
                </button>

            </div>


        </section>
    )
}

export default Showcase