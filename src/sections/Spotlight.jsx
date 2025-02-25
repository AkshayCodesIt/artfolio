import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Spotlight = () => {

    useGSAP(() => {
        const animation = gsap.to(".alllogos", {
          x: "-100%",
          duration: 40,
          repeat: -1,
          ease: "none",
          force3D: true,
        });
    
        return () => animation.kill();
      }, []);

    return (
        <section id='community' className='relative w-full md:px-15 py-20 px-2'>
            <div className='md:py-4 lg:mx-17 max-w-[1250px] md:mx-5 mx-5'>
                <h1 className='Sans-font lg:text-[60px] md:text-5xl max-md:text-[26px] font-bold font-sans tracking-wider md:leading-17 leading-12'>
                    Connecting Creativity:
                </h1>
                <h1 className='Sans-font lg:text-[60px] md:text-5xl max-md:text-[24px] font-bold font-sans tracking-wider md:leading-17 md:mt-1 max-md:leading-7'>
                    Where Artists Meet Opportunities
                </h1>
            </div>

            <div className='flex justify-center md:mt-2 m-5'>
                <img src="/images/Spotlight/artistman.png" alt="Show your creativity" className='spotimg' />
            </div>

            <div className='md:py-10 lg:mx-17 mx-5 mt-7 md:mt-0'>
                <h2 className='Sans-font md:text-5xl text-4xl '>
                    Trusted by the best
                </h2>
                <h3 className='text-sm font-semibold pt-4'>
                    Our growth hackers are experts in the identifying and capturing on the most
                </h3>
            </div>


            <div className='alllogos flex w-full mt-5 mb-0 md:mt-0'>

                <div className='flex w-[1368px]  items-center z-10'>
                    <img src="/images/Logos/Artblocks.svg" alt="" className='logos ' />
                    <img src="/images/Logos/Diplomart.svg" alt="" className='logos ' />
                    <img src="/images/Logos/GoogleArtsCulture.svg" alt="" className='logos ' />
                    <img src="/images/Logos/MassArt.svg" alt="" className='logos ' />
                    <img src="/images/Logos/Masterworks.svg" alt="Masterworks" className='logos ' />
                    <img src="/images/Logos/MuseumArt.svg" alt="MuseumArt" className='logos ' />
                    <img src="/images/Logos/SinemArt.svg" alt="SinemArt" style={{ height: 50 }} className='logos ' />
                    <img src="/images/Logos/Theatre.svg" alt="Theatre" className='logos ' />
                    <img src="/images/Logos/NationalGalleries.svg" alt="Theatre" className='logos ' />

                    <img src="/images/Logos/Artblocks.svg" alt="" className='logos ' />
                    <img src="/images/Logos/Diplomart.svg" alt="" className='logos ' />
                    <img src="/images/Logos/GoogleArtsCulture.svg" alt="" className='logos ' />
                    <img src="/images/Logos/MassArt.svg" alt="" className='logos ' />
                    <img src="/images/Logos/Masterworks.svg" alt="Masterworks" className='logos ' />
                    <img src="/images/Logos/MuseumArt.svg" alt="MuseumArt" className='logos ' />
                    <img src="/images/Logos/SinemArt.svg" alt="SinemArt" style={{ height: 50 }} className='logos ' />
                    <img src="/images/Logos/Theatre.svg" alt="Theatre" className='logos ' />
                    <img src="/images/Logos/NationalGalleries.svg" alt="Theatre" className='logos ' />
                </div>
            </div>

        </section>
    )
}

export default Spotlight