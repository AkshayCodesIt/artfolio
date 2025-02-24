import React from 'react'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import SplitType from 'split-type'


const Creative = () => {

    const textRef = useRef(null);

    useEffect(() => {
        const splitext = new SplitType(textRef.current, { types: "words" });
    
        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 84%",
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

    useEffect(() => {
        const t3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".creativeimg",
                start: "top 53%",
                end: "bottom 53%",
                // scrub: true,
                // markers: true,
            }
        });

        t3.set(["#cimg1", "#cimg2", "#cimg3", "#cimg4", "#cimg5", "#cimg6", "#cimg7"],{
            y: 0,
            scale: 0,
            rotate: "-45deg",
            duration: 1,
            transformOrigin: "right bottom",
        }).to(["#cimg1", "#cimg2", "#cimg3", "#cimg4", "#cimg5", "#cimg6", "#cimg7"],{
            // delay: 0.3,
            y: (index) => ["0", "10", "20", "30", "40", "50", "60"][index],
            ease: "power2.out",
            transformOrigin: "right bottom"
        }).to(["#cimg1", "#cimg2", "#cimg3", "#cimg4", "#cimg5", "#cimg6", "#cimg7"],{
            x: (index) => ["0", "-10", "-20", "-30", "-40", "-50", "-60"][index],
            opacity: 1,
            scale: 1,
            rotate: "0deg",
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            transformOrigin: "right bottom"
        }).to(["#cimg1", "#cimg2", "#cimg3", "#cimg4", "#cimg5", "#cimg6", "#cimg7"],{
            x:0,
            y:0,
            transformOrigin: "bottom center",
            rotate: (index) => ["-20deg", "-15deg", "-10deg", "-5deg", "0deg", "5deg", "10deg"][index],
        });

        return () => {
            t3.kill();
        };
    }, []);


    return (
        <section className='relative flex w-full h-[100dvh] justify-center overflow-hidden'>
            <div className='cimgae hidden md:flex items-center overflow-hidden'>
                <img id='cimg1' src="/images/CreativeImg/Cimg1.jpeg" alt="image" className='creativeimg' />
                <img id='cimg2' src="/images/CreativeImg/Cimg2.jpeg" alt="image" className='creativeimg' />
                <img id='cimg3' src="/images/CreativeImg/Cimg3.jpeg" alt="image" className='creativeimg' />
                <img id='cimg4' src="/images/CreativeImg/Cimg4.jpeg" alt="image" className='creativeimg' />
                <img id='cimg5' src="/images/CreativeImg/Cimg5.jpeg" alt="image" className='creativeimg' />
                <img id='cimg6' src="/images/CreativeImg/Cimg6.jpeg" alt="image" className='creativeimg' />
                <img id='cimg7' src="/images/CreativeImg/Cimg7.jpeg" alt="image" className='creativeimg' />
            </div>


            <div className='flex justify-center max-w-[1100px] md:pt-85 pt-70'>
                <p id="crvtext" ref={textRef} className='inline md:text-5xl text-center md:leading-14 text-4xl font-semibold  lg:px-0 md:px-15 px-7'>
                    Whether you're an artist looking to sell your work or buyer seeking <span className='text-green-400'>unique</span> pieces connects you to world of creativity commerece.
                </p>
            </div>

        </section>
    )
}

export default Creative