import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Pricing = () => {
  return (
    <section id='pricing' className='relative flex w-full h-auto justify-center py-10 lg:px-30 px-7'>
      <div className='max-w-[1112px] w-full'>
        <div className='relative flex flex-wrap z-2 border-2xl pb-6 lg:ml-8'>
          <DotLottieReact
            src="https://lottie.host/dd09160f-d493-4e2a-b66d-1706085519db/BLOV91WdDI.lottie"
            loop
            autoplay
            className='hidden lg:block absolute scale-110 -right-50 z-0 -top-10 rotate-12'
          />
          <h1 className='font-bold md:text-4xl text-left text-3xl py-4'>
            Unlock Exclusive Access to the World of Art
          </h1>
          <p className='font-semibold text-left text-sm mb-4'>
            Join our membership and bring creativity to life. Showcase your work, connect with collectors, and gain insights to grow your artistic journey.
          </p>
          <span className='hidden max-md:block text-[#92db00] text-xs'>
            [ Swipe right to left to see more price options ]
          </span>
        </div>

    
        <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className='overflow-x-auto scrollbar-hide scroll-smooth'>
          <div className='flex justify-start md:flex-nowrap flex-nowrap gap-3 mx-0 lg:ml-6 md:w-max'>
            {/* Price 1 */}
            <div className='lg:max-w-[35%] max-lg:w-[330px] h-auto border-2 border-gray-300 rounded-xl p-6 z-10 bg-white shrink-0'>
              <h3 className='h3'>Basic plan</h3>
              <p className='text-4xl font-bold font-sans py-3'>$9.99 <span className='text-xs font-semibold'>per artist per month</span></p>
              <p className='pb-5 text-xs text-[#83878E] font-semibold'>For emerging artists looking to showcase their work.</p>
              <button className='w-full block bg-[#111727] text-white p-2 rounded-xl my-1 font-semibold hover:bg-[#262f44] cursor-pointer'>Get started</button>
              <button className='w-full bg-white border border-gray-400 text-black p-2 rounded-xl my-1 font-semibold hover:bg-gray-100 cursor-pointer'>Chat to support</button>
              <div className='border-gray-300 my-6'></div>
              <h4 className='h4'>Features</h4>
              <ul>
                <li className='price'>Create and list up to artworks</li>
                <li className='price'>Basic analytics on views and sales</li>
                <li className='price'>10GB storage for high-quality images</li>
                <li className='price'>Standard artist profile page</li>
                <li className='price'>Basic email support</li>
              </ul>
            </div>

            {/* Price 2 */}
            <div className='lg:max-w-[35%] max-lg:w-[330px] h-auto bg-[#111727] rounded-xl p-6 z-10 shrink-0'>
              <h3 className='h3 col'>Professional plan</h3>
              <p className='text-4xl text-white font-bold font-sans py-3'>$20 <span className='text-xs font-semibold'>per artist per month</span></p>
              <p className='pb-5 text-xs text-[#e7e7e7] font-semibold'>For growing artists who want more visibility and sales.</p>
              <button className='w-full block bg-[#ADFF14] text-black p-2 rounded-xl my-1 font-semibold hover:bg-[#9fef00] cursor-pointer'>Get started</button>
              <button className='w-full bg-white border border-gray-400 text-black p-2 rounded-xl my-1 font-semibold hover:bg-gray-100 cursor-pointer'>Chat to support</button>
              <div className='border-gray-300 my-6'></div>
              <h4 className='h4 text-[#e7e7e7]'>Features</h4>
              <ul>
                <li className='co price'>Everything in <span>Basic Plan</span> plus</li>
                <li className='co price'>List up to 20 artworks</li>
                <li className='co price'>Advanced sales and engagement analytics</li>
                <li className='co price'>40GB storage for high-resolution images</li>
                <li className='co price'>Featured placement in search results</li>
                <li className='co price'>Priority email and chat support</li>
              </ul>
            </div>

            {/* Price 3 */}
            <div className='lg:max-w-[33%] max-lg:w-[330px] h-auto border-2 border-gray-300 rounded-xl p-6 z-10 bg-white shrink-0'>
              <h3 className='h3'>Gallery plan</h3>
              <p className='text-4xl font-bold font-sans py-3'>$40 <span className='text-xs font-semibold'>per artist per month</span></p>
              <p className='pb-5 text-xs text-[#83878E] font-semibold'>For established artists and galleries needing unlimited access.</p>
              <button className='w-full block bg-[#111727] text-white p-2 rounded-xl my-1 font-semibold hover:bg-[#262f44] cursor-pointer'>Get started</button>
              <button className='w-full bg-white border border-gray-400 text-black p-2 rounded-xl my-1 font-semibold hover:bg-gray-100 cursor-pointer'>Chat to support</button>
              <div className='border-gray-300 my-6'></div>
              <h4 className='h4'>Features</h4>
              <ul>
                <li className='price'>Everything in <span>Professional Plan</span> plus</li>
                <li className='price'>Unlimited artwork listing</li>
                <li className='price'>Custom storefront with branding options</li>
                <li className='price'>Unlimited storage for artwork images</li>
                <li className='price'>Detailed sales report and order tracking</li>
                <li className='price'>Personalized and priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Pricing