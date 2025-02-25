import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {

    const textRef = useRef(null);

    useEffect(() => {
        const splitext = new SplitType(textRef.current, { types: "words" });
    
        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 64%",
                end: "bottom 90%",
                // markers: true
            }
        });
    
        t2.from(splitext.words, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });
    
        return () => {
            t2.kill();
            splitext.revert();
        };
    }, []);

    useGSAP(() => {
        const t3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#boxcontain",
                start: "top 88%",
                end: "bottom 90%",
                // markers: true
            }
        });
    
        t3.from(["#box1", "#box2", "#box3", "#box4"], {
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.7,
            ease: "none"
        });
    
        return () => {
            t3.kill(); 
        };
    });
    


    return (
        <section id='story' className='relative w-full'>
            <div className='mx-auto max-w-[1280px] p-6 md:px-15 pb-10 flex-none justify-center overflow-hidden'>
                <div ref={textRef} className='relative z-2 flex flex-col max-w-1112 pb-6'>
                    <h2 className='text-sm font-semibold leading-[50px] tracking-wider uppercase text-center'>Your story <span className='text-sm text-blue-600 font-bold'>telling</span></h2>
                    <h1 className='mx-auto md:text-6xl max-md:text-3xl max-w-[700px] font-bold md:leading-[70px] max-md:leading-[40px] tracking-wider max-md:tracking-wide uppercase text-center'>
                        Every piece of art tells a story
                    </h1>
                </div>
                
                <div id='boxcontain'  className='flex flex-col md:flex-row md:flex-wrap'>
                    <div className='md:flex-row flex flex-wrap relative mt-5 gap-3 justify-center lg:px-10'>
                        <div id='box1' className='md:w-[45%] w-full min-h-110 relative border-2 border-purple-500 rounded-xl overflow-hidden'>
                            <video src="/960-142611994_small.mp4" loading="lazy" autoPlay muted loop playsInline className='max-md:absolute max-md:bottom-53 max-md:scale-140'></video>
                            <button className='flex absolute top-3 left-3 items-center bg-gray-200 px-2 rounded-4xl'>
                                <img src="/images/play-button.png" alt="" width={"30px"} height={"30px"} />
                                <div className='p-2 py-3 text-sm font-semibold'>
                                    Play Video
                                </div>
                            </button>


                            <div className='absolute bottom-0 pl-5 pb-7'>
                                <h1 className='text-left text-2xl font-semibold leading-10'>Connect, Create, Commerce</h1>
                                <h2 className='text-left text-sm font-semibold mr-29'>Offering buyers a chance to own a piece of that narrative</h2>
                                <button className='px-5 py-2 mt-5 text-white bg-black rounded-4xl font-semibold hover:bg-[#2d2d2d] cursor-pointer'>How it works?</button>
                            </div>
                        </div>

                        <div id='box2' className='md:w-[45%] border-2 border-[#f06750] rounded-xl overflow-hidden'>
                            <img src="/images/Story/E-commerce_art.jpeg" alt="E-commerce" className='object-cover' />
                            <div className='p-5'>
                                <h1 className='text-left text-2xl font-semibold leading-10'>Where Art Breathes Commerce</h1>

                                <h2 className='text-left text-sm font-semibold'>Artist spirit with commercial viability, providing a platform where creativity</h2>
                                <button className='px-5 py-2 mt-5 mb-3 text-black bg-gray-300 rounded-4xl font-semibold cursor-pointer hover:bg-gray-200'>Read more</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row md:flex-wrap gap-3 justify-center mt-4 lg:px-10'>
                        <div id='box3' className='md:w-[45%] border-[#8b8d80] border-2 relative rounded-xl overflow-hidden gap-3'>
                            <img src="/images/Story/Children-drawing1.jpg" alt="E-commerce" className='object-cover' />
                            <div className='p-5'>
                                <h1 className='text-left text-2xl font-semibold leading-10'>Spin Your Art into Gold</h1>

                                <h2 className='text-left text-sm font-semibold'>Unleash your artistic potential, where innovation and creativity converge</h2>
                                <button className='px-5 py-2 mt-5 mb-3 text-black bg-gray-300 rounded-4xl font-semibold cursor-pointer hover:bg-gray-200'>Join us now</button>
                            </div>
                        </div>

                        <div id='box4' className='md:w-[45%] row-start-auto border-2 border-[#0f2316] rounded-xl overflow-hidden gap-3'>
                            <img src="/images/Story/Focused Young Man Working at Desk.jpeg" alt="E-commerce" className='object-cover' />
                            <div className='p-5'>
                                <h1 className='text-left text-2xl font-semibold leading-10'>Bridging Art and Technology</h1>

                                <h2 className='text-left text-sm font-semibold'>Explore the fusion of traditional artistry with modern digital tools, unlocking new creative possibilites</h2>
                                <button className='px-5 py-2 mt-5 mb-3 text-black bg-gray-300 rounded-4xl font-semibold cursor-pointer hover:bg-gray-200'>Discover more</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </section >
    )
}

export default Story