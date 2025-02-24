import { useState, useEffect, useRef } from 'react'
import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import Spotlight from './sections/Spotlight'
import Creative from './sections/Creative'
import Community from './sections/Community'
import Story from './sections/Story'
import Pricing from './sections/Pricing'
import Connect from './sections/Connect'
import Footer from './sections/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const scrollRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    },100);
    // Disable the browser's automatic scroll restoration
    
  }, []);

  const [herostart, setherostart] = useState(false)

  useEffect(() => {
    if (scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
        smartphone: { smooth: true },
        lerp: 0.05, 
        multiplier: 0.8,
      });

      return () => {
        locomotiveScroll.destroy();
      };
    }
  }, []);


  return (
    <>
        <main data-scroll-container ref={scrollRef} className="overflow-hidden">
          <Header onAnimationComplete={() => setherostart(true)}/>
          <Hero startAnimation={herostart} onAnimationComplete={() => setfeaturestart(true)} />
          <Showcase />
          <Spotlight/>
          <Creative />
          <Community />
          <Story />
          <Pricing/>
          <Connect />
          <Footer />
        </main>
    </>
  )
}

export default App

