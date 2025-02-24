import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import React from 'react'
import SplitType from 'split-type'

const Community = () => {

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

        gsap.fromTo("#commid1", {
            y: -70,
            yoyo: true,
            duration: 4,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
            
        })

        gsap.fromTo("#commid2", {
            y: -70,
            yoyo: true,
            duration: 4,
            delay: 1,
            repeat: -1,
            
        }, {
            y: 70,
            duration: 4,
            delay: 1,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
            
        })

        gsap.fromTo("#commid3", {
            y: -70,
            yoyo: true,
            duration: 4,
            delay: 2,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            delay: 2,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
            
        })

        gsap.fromTo("#commid4", {
            y: -70,
            yoyo: true,
            duration: 4,
            delay: 3,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            delay: 3,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
            
        })

        gsap.fromTo("#commid5", {
            y: -70,
            yoyo: true,
            duration: 4,
            delay: 4,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            delay: 4,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
            
        })

        gsap.fromTo("#commid6", {
            y: -70,
            yoyo: true,
            duration: 4,
            delay: 5,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            delay: 5,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
            
        })

        gsap.fromTo("#commid7", {
            y: -70,
            yoyo: true,
            duration: 4,
            delay: 6,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            delay: 6,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
        })

        gsap.fromTo("#commid8", {
            y: -70,
            yoyo: true,
            duration: 4,
            delay: 7,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            delay: 7,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
            
        })

        gsap.fromTo("#commid9", {
            y: -70,
            yoyo: true,
            duration: 4,
            // delay: 8,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            // delay: 8,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
            
        })

        gsap.fromTo("#commid10", {
            y: -70,
            yoyo: true,
            duration: 4,
            delay: 1,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            delay: 1,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
            
        })

        gsap.fromTo("#commid11", {
            y: -70,
            yoyo: true,
            duration: 4,
            delay: 2,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            delay: 2,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
            
        })

        gsap.fromTo("#commid12", {
            y: -70,
            yoyo: true,
            duration: 4,
            delay: 3,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            delay: 3,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
            
        })

        gsap.fromTo("#commid13", {
            y: -70,
            yoyo: true,
            duration: 4,
            delay: 4,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            delay: 4,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
            
        })

        gsap.fromTo("#commid14", {
            y: -70,
            yoyo: true,
            duration: 4,
            delay: 5,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            delay: 5,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
            
        })

        gsap.fromTo("#commid15", {
            y: -70,
            yoyo: true,
            duration: 4,
            delay: 6,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            delay: 6,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
            
        })

        gsap.fromTo("#commid16", {
            y: -70,
            yoyo: true,
            duration: 4,
            delay: 7,
            repeat: -1,
            ease: 'none',
            yoyoEase: "power1.inOut",
            
        }, {
            y: 70,
            duration: 4,
            delay: 7,
            repeat: -1,
            ease: "none",
            yoyoEase: "power1.inOut",
        })

    },[]);

    useEffect(() => {
        gsap.to(".allprofileleft", {
            x: "-100%",
            duration: 50,
            ease: "none",
            repeat: -1,
            force3D: true
        })

        gsap.to(".allprofileright", {
            x: "100%",
            duration: 50,
            ease: "none",
            repeat: -1,
            force3D: true,
        })
    },[]);



    return (
        <section className='relative w-full h-[100dvh]'>

            <div className='flex flex-nowrap py-30'>
                <div className='allprofileleft flex shrink-0 items-center flex-row flex-nowrap'>
                    <img id="commid1" src="/images/CommImg/comming1.jpg" alt="Profile" className='commprofile' />
                    <img id="commid2" src="/images/CommImg/comming2.jpg" alt="Profile" className='commprofile' />
                    <img id="commid3" src="/images/CommImg/comming3.jpg" alt="Profile" className='commprofile' />
                    <img id="commid4" src="/images/CommImg/comming4.jpg" alt="Profile" className='commprofile' />
                    <img id="commid5" src="/images/CommImg/comming5.jpg" alt="Profile" className='commprofile' />
                    <img id="commid6" src="/images/CommImg/comming6.jpg" alt="Profile" className='commprofile' />
                    <img id="commid7" src="/images/CommImg/comming7.jpg" alt="Profile" className='commprofile' />
                    <img id="commid8" src="/images/CommImg/comming8.jpg" alt="Profile" className='commprofile' />
                    <img id="commid9" src="/images/CommImg/comming9.jpg" alt="Profile" className='commprofile' />
                    <img id="commid10" src="/images/CommImg/comming10.jpg" alt="Profile" className='commprofile' />
                    <img id="commid11" src="/images/CommImg/comming11.jpg" alt="Profile" className='commprofile' />
                    <img id="commid12" src="/images/CommImg/comming12.jpg" alt="Profile" className='commprofile' />
                    <img id="commid13" src="/images/CommImg/comming13.jpg" alt="Profile" className='commprofile' />
                    <img id="commid14" src="/images/CommImg/comming14.jpg" alt="Profile" className='commprofile' />
                    <img id="commid15" src="/images/CommImg/comming15.jpg" alt="Profile" className='commprofile' />
                    <img id="commid16" src="/images/CommImg/comming16.png" alt="Profile" className='commprofile' />
                </div>

                <div className='allprofileleft flex shrink-0 items-center flex-row flex-nowrap'>
                    <img id="commid1" src="/images/CommImg/comming1.jpg" alt="Profile" className='commprofile' />
                    <img id="commid2" src="/images/CommImg/comming2.jpg" alt="Profile" className='commprofile' />
                    <img id="commid3" src="/images/CommImg/comming3.jpg" alt="Profile" className='commprofile' />
                    <img id="commid4" src="/images/CommImg/comming4.jpg" alt="Profile" className='commprofile' />
                    <img id="commid5" src="/images/CommImg/comming5.jpg" alt="Profile" className='commprofile' />
                    <img id="commid6" src="/images/CommImg/comming6.jpg" alt="Profile" className='commprofile' />
                    <img id="commid7" src="/images/CommImg/comming7.jpg" alt="Profile" className='commprofile' />
                    <img id="commid8" src="/images/CommImg/comming8.jpg" alt="Profile" className='commprofile' />
                    <img id="commid9" src="/images/CommImg/comming9.jpg" alt="Profile" className='commprofile' />
                    <img id="commid10" src="/images/CommImg/comming10.jpg" alt="Profile" className='commprofile' />
                    <img id="commid11" src="/images/CommImg/comming11.jpg" alt="Profile" className='commprofile' />
                    <img id="commid12" src="/images/CommImg/comming12.jpg" alt="Profile" className='commprofile' />
                    <img id="commid13" src="/images/CommImg/comming13.jpg" alt="Profile" className='commprofile' />
                    <img id="commid14" src="/images/CommImg/comming14.jpg" alt="Profile" className='commprofile' />
                    <img id="commid15" src="/images/CommImg/comming15.jpg" alt="Profile" className='commprofile' />
                    <img id="commid16" src="/images/CommImg/comming16.png" alt="Profile" className='commprofile' />
                </div>
            </div>

            <div className='flex w-full justify-center items-center'>
                <div ref={textRef} className='flex flex-col items-center max-w-[650px]'>
                    <h1 className='SemiSans-font flex md:text-[50px] max-md:text-[36px] tracking-wide leading-12 max-md:leading-10 text-center max-w-[100%]'>
                        You will find yourself among us
                    </h1>
                    <h2 className='flex justify-center max-md:text-[13px] text-center font-semibold my-5 max-md:my-3 max-w-[60%]'>
                        Dive into a dynamic community where artists and buyers seamlessly merge
                    </h2>
                </div>
            </div>

            <div className='flex items-center flex-row-reverse flex-nowrap py-30'>
                <div className='allprofileright flex shrink-0 items-center flex-row flex-nowrap'>
                    <img id="commid1" src="/images/CommImg/comming1.jpg" alt="Profile" className='commprofile' />
                    <img id="commid2" src="/images/CommImg/comming2.jpg" alt="Profile" className='commprofile' />
                    <img id="commid3" src="/images/CommImg/comming3.jpg" alt="Profile" className='commprofile' />
                    <img id="commid4" src="/images/CommImg/comming4.jpg" alt="Profile" className='commprofile' />
                    <img id="commid5" src="/images/CommImg/comming5.jpg" alt="Profile" className='commprofile' />
                    <img id="commid6" src="/images/CommImg/comming6.jpg" alt="Profile" className='commprofile' />
                    <img id="commid7" src="/images/CommImg/comming7.jpg" alt="Profile" className='commprofile' />
                    <img id="commid8" src="/images/CommImg/comming8.jpg" alt="Profile" className='commprofile' />
                    <img id="commid9" src="/images/CommImg/comming9.jpg" alt="Profile" className='commprofile' />
                    <img id="commid10" src="/images/CommImg/comming10.jpg" alt="Profile" className='commprofile' />
                    <img id="commid11" src="/images/CommImg/comming11.jpg" alt="Profile" className='commprofile' />
                    <img id="commid12" src="/images/CommImg/comming12.jpg" alt="Profile" className='commprofile' />
                    <img id="commid13" src="/images/CommImg/comming13.jpg" alt="Profile" className='commprofile' />
                    <img id="commid14" src="/images/CommImg/comming14.jpg" alt="Profile" className='commprofile' />
                    <img id="commid15" src="/images/CommImg/comming15.jpg" alt="Profile" className='commprofile' />
                    <img id="commid16" src="/images/CommImg/comming16.png" alt="Profile" className='commprofile' />
                </div>

                <div className='allprofileright flex shrink-0 items-center flex-row flex-nowrap'>
                    <img id="commid1" src="/images/CommImg/comming1.jpg" alt="Profile" className='commprofile' />
                    <img id="commid2" src="/images/CommImg/comming2.jpg" alt="Profile" className='commprofile' />
                    <img id="commid3" src="/images/CommImg/comming3.jpg" alt="Profile" className='commprofile' />
                    <img id="commid4" src="/images/CommImg/comming4.jpg" alt="Profile" className='commprofile' />
                    <img id="commid5" src="/images/CommImg/comming5.jpg" alt="Profile" className='commprofile' />
                    <img id="commid6" src="/images/CommImg/comming6.jpg" alt="Profile" className='commprofile' />
                    <img id="commid7" src="/images/CommImg/comming7.jpg" alt="Profile" className='commprofile' />
                    <img id="commid8" src="/images/CommImg/comming8.jpg" alt="Profile" className='commprofile' />
                    <img id="commid9" src="/images/CommImg/comming9.jpg" alt="Profile" className='commprofile' />
                    <img id="commid10" src="/images/CommImg/comming10.jpg" alt="Profile" className='commprofile' />
                    <img id="commid11" src="/images/CommImg/comming11.jpg" alt="Profile" className='commprofile' />
                    <img id="commid12" src="/images/CommImg/comming12.jpg" alt="Profile" className='commprofile' />
                    <img id="commid13" src="/images/CommImg/comming13.jpg" alt="Profile" className='commprofile' />
                    <img id="commid14" src="/images/CommImg/comming14.jpg" alt="Profile" className='commprofile' />
                    <img id="commid15" src="/images/CommImg/comming15.jpg" alt="Profile" className='commprofile' />
                    <img id="commid16" src="/images/CommImg/comming16.png" alt="Profile" className='commprofile' />
                </div>
            </div>
        </section>
    )

}

export default Community