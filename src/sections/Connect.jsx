import { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap'
import React from 'react'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Matter from 'matter-js';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger)

const Connect = () => {

    const sceneRef = useRef(null);

    useEffect(() => {

        if (!sceneRef.current) {
            console.warn("Scene ref is null! Matter.js cannot render.");
            return;
        }

        console.log("Scene Ref:", sceneRef.current);

        const engine = Matter.Engine.create();
        const world = engine.world;
        engine.world.gravity = 0.3;

        const renderer = Matter.Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: sceneRef.current.clientWidth,
                height: sceneRef.current.clientHeight,
                wireframes: false,
                background: "transparent",
                pixelRatio: window.devicePixelRatio,
            }
        });

        const ground = Matter.Bodies.rectangle(250, 401, 1500, 19, { isStatic: true, render: { fillStyle: 'transparent' } });
        const wall = Matter.Bodies.rectangle(-9, 401, 19, 800, { isStatic: true, render: { fillStyle: 'transparent' } });

        const ball1 = Matter.Bodies.circle(0, -500, 35, {
            restitution: 1,
            density: 0.01,
            frictionAir: 0.03,
            friction: 0.005,
            render: {
                sprite: {
                    texture: `${import.meta.env.BASE_URL}images/Connect/ball1.svg`,
                    xScale: 0.63, 
                    yScale: 0.63
                }
            },
        });

        const ball2 = Matter.Bodies.circle(100, -2650, 35, {
            restitution: 1, 
            density: 0.01,
            frictionAir: 0.03,
            friction: 8,
            render: {
                sprite: {
                    texture: `${import.meta.env.BASE_URL}images/Connect/ball2.svg`,
                    xScale: 0.63, 
                    yScale: 0.63
                }
            }, 
            
        });
        const ball3 = Matter.Bodies.circle(200, -1760, 35, {
            restitution: 1, 
            density: 0.01,
            frictionAir: 0.03,
            friction: 8,
            render: {
                sprite: {
                    texture: `${import.meta.env.BASE_URL}images/Connect/ball3.svg`,
                    xScale: 0.63, 
                    yScale: 0.63
                }
            }, 
            
        });
        const ball4 = Matter.Bodies.circle(270, -550, 35, {
            restitution: 1, 
            density: 0.01,
            frictionAir: 0.03,
            friction: 8,
            render: {
                sprite: {
                    texture: `${import.meta.env.BASE_URL}/images/Connect/ball4.svg`,
                    xScale: 0.63, 
                    yScale: 0.63
                }
            }, 
            
        });
        const ball5 = Matter.Bodies.circle(250, -880, 35, {
            restitution: 1, 
            density: 0.01,
            frictionAir: 0.03,
            render: {
                sprite: {
                    texture: `${import.meta.env.BASE_URL}images/Connect/ball5.svg`,
                    xScale: 0.63, 
                    yScale: 0.63
                }
            }, 
            
        });
        const ball6 = Matter.Bodies.circle(210, -670, 35, {
            restitution: 1, 
            density: 0.01,
            frictionAir: 0.03,
            friction: 8,
            render: {
                sprite: {
                    texture: `${import.meta.env.BASE_URL}images/Connect/ball6.svg`,
                    xScale: 0.63, 
                    yScale: 0.63
                }
            }, 
            
        });
        const ball7 = Matter.Bodies.circle(200, -530, 35, {
            restitution: 1, 
            density: 0.01,
            frictionAir: 0.03,
            friction: 8,
            render: {
                sprite: {
                    texture: `${import.meta.env.BASE_URL}images/Connect/ball7.svg`,
                    xScale: 0.63, 
                    yScale: 0.63
                }
            }, 
            
        });
        const ball8 = Matter.Bodies.circle(230, -920, 35, {
            restitution: 1, 
            density: 0.01,
            frictionAir: 0.03,
            friction: 8,
            render: {
                sprite: {
                    texture: `${import.meta.env.BASE_URL}images/Connect/ball8.svg`,
                    xScale: 0.63, 
                    yScale: 0.63
                }
            }, 
            
        });
        const ball9 = Matter.Bodies.circle(330, -820, 35, {
            restitution: 1, 
            density: 0.01,
            frictionAir: 0.03,
            friction: 8,
            render: {
                sprite: {
                    texture:`${import.meta.env.BASE_URL}images/Connect/ball9.svg`,
                    xScale: 0.63, 
                    yScale: 0.63
                }
            }, 
            
        });
        const ball10 = Matter.Bodies.circle(230, -120, 35, {
            restitution: 1, 
            density: 0.01,
            frictionAir: 0.03,
            friction: 8,
            render: {
                sprite: {
                    texture: `${import.meta.env.BASE_URL}images/Connect/ball10.svg`,
                    xScale: 0.63, 
                    yScale: 0.63
                }
            }, 
            
        });

        console.log("Ball Position:", ball1.position);

        Matter.World.add(world, [ground, wall, ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10]);

        const runner = Matter.Runner.create();
        gsap.to(sceneRef.current, {
            scrollTrigger: {
                trigger: sceneRef.current,
                start: "top 75%",
                onEnter: () => {
                    console.log("ScrollTrigger Activated!");
                    Matter.Runner.run(runner, engine);
                    Matter.Render.run(renderer);
                },
                onLeaveBack: () => {
                    console.log("ScrollTrigger Stopped!");
                    Matter.Runner.stop(runner);
                },
            },
        });

        return () => {
            Matter.Render.stop(renderer);
            Matter.World.clear(world);
            Matter.Engine.clear(engine);
            Matter.Runner.stop(runner);
            renderer.canvas.remove();
        };
    }, []);

    useEffect(() => {
        gsap.to(".neontitle", {
            x: "-100%",
            duration: 30,
            ease: "none",
            repeat: -1,
        });
    }, []);



    return (
        <section id='connect' className='relative flex w-full h-auto justify-center lg:p-10 p-5 mx-auto'>
            <div className='flex flex-wrap w-full gap-4 lg:mx-40'>
                <div ref={sceneRef} className='w-full bg-gradient-to-t from-[#95ecb0] to-[#f3f98a] relative rounded-2xl overflow-hidden shrink-0 h-[394px]'>
                
                    <div className='absolute top-6 flex text-5xl font-semibold flex-nowrap overflow-hidden'>
                        <div className='neontitle flex text-6xl font-semibold flex-nowrap shrink-0 items-center'>
                            <img src={import.meta.env.BASE_URL + "/images/Connect/Label1.svg"} alt="" className='h-18 mx-2' />
                            Inspired by the people <img src={import.meta.env.BASE_URL + "/images/Connect/Label2.svg"} alt="" className='h-18 mx-2' /> A New Art Platform for Creative Minds <img src={import.meta.env.BASE_URL + "/images/Connect/Label3.svg"} alt="" className='h-18 mx-2' />
                        </div>
                        <div className='neontitle flex text-6xl font-semibold flex-nowrap shrink-0 items-center'>
                            <img src={import.meta.env.BASE_URL + "/images/Connect/Label1.svg"} alt="" className='h-18 mx-2' />
                            Inspired by the people <img src={import.meta.env.BASE_URL + "/images/Connect/Label2.svg"} alt="" className='h-18 mx-2' /> A New Art Platform for Creative Minds <img src={import.meta.env.BASE_URL + "/images/Connect/Label3.svg"} alt="" className='h-18 mx-2' />
                        </div>
                    </div>


                </div>

                <div className='flex flex-nowrap flex-col md:flex-row w-full h-auto gap-4'>
                    <div className='flex md:w-[50%] h-[550px] relative bg-[url(/images/Connect/Joyful%20Academic%20Team.jpeg)] rounded-2xl bg-cover overflow-hidden'>

                        <div className='cn-bgblur w-full px-8 mb-0 absolute bottom-0 pb-8'>
                            <h1 className='text-white font-semibold text-4xl'>Meets <span className='block'>new people</span></h1>
                            <p className='text-white w-[60%] text-xs py-5 tracking-wider'>Creators and enhusiasts to share, discover, and purchase unique artworks.</p>
                            <button className='px-5 py-2 m-2 text-black bg-white rounded-4xl font-semibold cursor-pointer tracking-wide hover:bg-gray-100'>Let's Meet</button>
                        </div>

                    </div>

                    <div className='flex md:w-[50%] h-[550px] relative bg-[url(/images/Connect/colorbrush.jpeg)] rounded-2xl bg-cover overflow-hidden'>

                        <div className='cn-bgblur w-full px-8 mb-0 absolute bottom-0 pb-8'>
                            <h1 className='text-white font-semibold text-4xl'>Archieve <span className='block'>of new arts</span></h1>
                            <p className='text-white w-[80%] text-xs py-5 tracking-wider'>Canvas Carousal is the platform where the artists can ride the wave of creativity, showcasing their work to a broad audience.</p>
                            <button className='px-5 py-2 m-2 text-black bg-white rounded-4xl font-semibold cursor-pointer tracking-wide hover:bg-gray-100'>Archieves</button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Connect