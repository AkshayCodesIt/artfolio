import React from 'react'
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ startAnimation }) => {

  React.useEffect(() => {
    let scrollAnim;

    let t1 = gsap.timeline({ paused: true });

    gsap.set(".imgsize", { opacity: 0, y: 500, rotate: "-45deg", force3D: true });

    setTimeout(() => {
      if (startAnimation) {
        t1.to(".imgsize", {
          opacity: 1,
          y: 0,
          duration: 1,
          rotate: '-45deg',
          ease: "power2.out",
          force3D: true
        });

        t1.add(() => {
          gsap.to(["#img3", "#img2", "#img1", "#img4"], {
            y: (index) => [0, 15, 40, 0][index],
            x: (index) => ["-60%", "-150%", "-240%", "0%"][index],
            rotate: (index) => ["-5deg", "-10deg", "-12deg", "0deg"][index],
            duration: 1,
            ease: "power2.out",
            force3D: true
          });

          gsap.to(["#img5", "#img6", "#img7"], {
            y: (index) => [0, 15, 40][index],
            x: (index) => ["60%", "150%", "240%"][index],
            rotate: (index) => ["5deg", "10deg", "12deg"][index],
            duration: 1,
            ease: "power2.out",
            force3D: true
          });
        }, "+=0.3");

        t1.play();
      }

      if (document.querySelector(".imgsize")) {
        scrollAnim = gsap.timeline({
          scrollTrigger: {
            trigger: ".imgsize",
            start: "top 90%",
            end: "bottom 85%",
            scrub: 3,
          }
        })
          .to(".imgsize", { y: 0, x: 0, rotate: "-45deg", duration: 1, ease: "power2.out" })
          .to(".imgsize", { y: 700, rotate: "0deg", duration: 5, ease: "power2.out" })
          .to(["#img1", "#img2", "#img3", "#img4", "#img5", "#img6", "#img7"], {
            x: (index) => [100, 200, 300, 400, 500, 600, 700][index],
            y: (index) => [700, 750, 800, 850, 900, 950, 1000][index],
            duration: 1,
            ease: "power2.out",
            force3D: true
          });
      }
    }, 100);

    const handleResize = () => {
      gsap.set(".imgsize", { clearProps: "all" });
      t1.restart(true, false);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      t1.kill();
      if (scrollAnim) scrollAnim.kill();
      window.removeEventListener("resize", handleResize);
    };


  }, [startAnimation]);


  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {

      const t2 = gsap.timeline();

      t2.add(gsap.fromTo("#palette",
        { opacity: 0, x: -200 }, 
        { opacity: 100, x: 60, duration: 2, ease: "power2.out", }
      ), "hello").to("#palette", {
        rotate: -30,
        yoyo: true,
        repeat: -1,
        duration: 5,

      });

      t2.add(gsap.fromTo("#markers",
        { opacity: 0, x: -200 }, 
        { opacity: 100, x: 60, duration: 2, ease: "power2.out" }
      ), "hello").to("#markers", {
        rotate: 125,
        yoyo: true,
        repeat: -1,
        duration: 5,

      });

      t2.add(gsap.fromTo("#books",
        { opacity: 0, x: 300 }, 
        { opacity: 100, x: 60, duration: 2, ease: "power2.out" }
      ), "hello").to("#books", {
        rotate: -20,
        yoyo: true,
        repeat: -1,
        duration: 7,

      });

      t2.add(gsap.fromTo("#painttube",
        { opacity: 0, x: 200, y: 200 }, 
        { opacity: 100, x: -10, y: 0, duration: 2, ease: "power2.out" }
      ), "hello")

      t2.add(gsap.set("#paintfall", {
        // scale: 0,
        transformOrigin: "bottom center",
        x: 210,
        y: 60,
        scale: 0,
        opacity: 0,
      })
      )
        .to("#paintfall", {
          scale: 1.8,
          duration: 1,
          opacity: 0.15,
        });
    });

    mm.add("(max-width: 767px)", () => {
      const t3 = gsap.timeline();

      t3.add(gsap.fromTo("#palette",
        { opacity: 0, x: -150 },
        { opacity: 1, x: 10, duration: 1.5, ease: "power2.out" }
      ), "hello").to("#palette", {
        rotate: -30,
        yoyo: true,
        repeat: -1,
        duration: 5,

      });

      t3.add(gsap.fromTo("#markers",
        { opacity: 0, x: -150 },
        { opacity: 1, x: 15, duration: 1.5, ease: "power2.out" }
      ), "hello").to("#markers", {
        rotate: 125,
        yoyo: true,
        repeat: -1,
        duration: 5,

      });

      t3.add(gsap.fromTo("#books",
        { opacity: 0, x: 150 },
        { opacity: 1, x: 30, duration: 1.5, ease: "power2.out" }
      ), "hello").to("#books", {
        rotate: -20,
        yoyo: true,
        repeat: -1,
        duration: 7,

      });

      t3.add(gsap.fromTo("#painttube",
        { opacity: 0, x: 150, y: 150 },
        { opacity: 1, x: -5, y: 0, duration: 1.5, ease: "power2.out" }
      ), "hello");

      t3.add(gsap.set("#paintfall", {
        transformOrigin: "bottom center",
        x: 170,
        y: 10,
        scale: 0,
        opacity: 0,
      }))
        .to("#paintfall", {
          scale: 1.5,
          duration: 1,
          opacity: 0.15,
        });
    });

    return () => mm.revert();

  }, [])






  return (


    <section data-scroll-section id='home' className='relative pt-20 h-[100vh]'>
      <div className='mx-auto my-auto max-w-[1280px] max-lg:mt-40 lg:mt-6 max-md:mt-10 lg:p-6 md:p-4 p-2 pt-10 pb-10 flex-none justify-center overflow-hidden'>
        <div className='lg:hidden md:block'>
          <img id='palette' src={import.meta.env.BASE_URL + "/images/Herosection/BG/paint-palette.svg"} alt="" className='absolute bottom-5 max-md:bottom-3 md:scale-130 md:-left-12.5 -left-16 -rotate-5 z-2' />
          <img id='books' src={import.meta.env.BASE_URL + "/images/Herosection/BG/books.svg"} alt="" className='absolute top-15 max-md:top-15 md:scale-130 md:-right-2.5 -right-19 -rotate-50 z-2' />

          <div className=''>
            <img id='painttube' src={import.meta.env.BASE_URL + "/images/Herosection/BG/painttube.svg"} alt="" className='absolute bottom-3 -rotate-45 -right-10 md:scale-140 z-2' />
            <img id='paintfall' src={import.meta.env.BASE_URL + "/images/Herosection/BG/paintfall.svg"} alt="" className='absolute bottom-53 opacity-0 -rotate-45 right-10 z-1 scale-120 scale-y-150 md:scale-150 md:scale-y-200 md:bottom-73 md:right-30' />

          </div>

          <img id='markers' src={import.meta.env.BASE_URL + "/images/Herosection/BG/markers.svg"} alt="" className='absolute md:top-32 rotate-140 md:-left-14 md:scale-150 scale-120 -left-15 top-16 z-2' />

        </div>
        <div className='relative flex flex-wrap justify-center z-2 lg:min-w-112 max-md:max-w-170 max-md:mt-10 pb-6'>
          <h1 className='basementgrot-font lg:text-[74px] md:text-[45px] text-[45px] font-semibold lg:leading-[99px] md:leading-20.5 leading-15.5 tracking-[-0.02em] uppercase text-center'>A place to display your <span className='masterpiece mx-auto font-extrabold lg:text-[100px] md:text-[80px] text-[45px]'>masterpiece</span></h1>
        </div>
        <div className='hidden lg:flex flex-col items-center z-20'>
          <img src={import.meta.env.BASE_URL + "/images/Herosection/himg1.jpeg"} alt="Image" id='img1' className='imgsize' />
          <img src={import.meta.env.BASE_URL + "/images/Herosection/himg2.jpeg"} alt="Image" id='img2' className='imgsize' />
          <img src={import.meta.env.BASE_URL + "/images/Herosection/himg3.jpeg"} alt="Image" id='img3' className='imgsize' />
          <img src={import.meta.env.BASE_URL + "/images/Herosection/himg8.jpeg"} alt="Image" id='img4' className='imgsize' />
          <img src={import.meta.env.BASE_URL + "/images/Herosection/himg5.jpeg"} alt="Image" id='img5' className='imgsize' />
          <img src={import.meta.env.BASE_URL + "/images/Herosection/himg6.jpeg"} alt="Image" id='img6' className='imgsize' />
          <img src={import.meta.env.BASE_URL + "/images/Herosection/himg7.jpeg"} alt="Image" id='img7' className='imgsize' />

        </div>

        <div className='flex justify-center w-full'>
          <div className='lg:max-w-[40%] md:max-w-[60%] max-w-[85%] text-center lg:pt-60 font-semibold md:text-sm text-xs z-10'>
            Artists can display their masterpieces, and buyers can discover and purchase works that resonate with them
          </div>
        </div>

        <div className='flex max-md:flex-col max-md:w-[250px] flex-row justify-center mx-auto pt-4'>
          <button className="relative SemiSans-font tracking-wider px-5 py-2 m-2 text-white rounded-4xl font-semibold cursor-pointer z-10 overflow-hidden bg-black transition-colors duration-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#95ecb0] before:to-[#0b3866] before:z-[-1] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
            Join for $9.99/month
          </button>

          <button className='px-6 py-2 m-2 text-black bg-gray-300 rounded-4xl font-semibold cursor-pointer z-10 hover:bg-gray-200'>
            Read more
          </button>
        </div>

      </div>

    </section>
  )
}

export default Hero