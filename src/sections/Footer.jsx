import React from 'react'

const Footer = () => {
  return (
    <section className='w-full bottom-0 relative flex flex-wrap flex-col md:flex-row'>
        <div className='md:w-[40%] md:p-6 p-2 bg-gray-200'>
            <h1 className='text-3xl font-bold mx-4'>
                Our platform, your art.
            </h1>
            <p className='text-xs font-semibold py-4 max-w-[400px] tracking-wide mx-4 max-md:w-[350px]'>
                In the realm of Artnesia, creativity knows no bounds. This eternal marketplace celebrates the timeless nature of art.
            </p>
            <div className='flex flex-row justify-evenly w-[300px] py-5'>
                <a href="">
                    <img src={import.meta.env.BASE_URL + "/images/Footer/facebook.png"} alt="" width={'50px'}/>
                </a>
                <a href="">
                    <img src={import.meta.env.BASE_URL + "/images/Footer/instagram.png"} alt="" width={'50px'}/>
                </a>
                <a href="">
                    <img src={import.meta.env.BASE_URL + "/images/Footer/twitter.png"} alt="" width={'50px'}/>
                </a>
                <a href="">
                    <img src={import.meta.env.BASE_URL + "/images/Footer/pinterest.png"} alt="" width={'50px'}/>
                </a>
            </div>
        </div>
        
        <div className='flex flex-col pt-11  md:w-[20%] bg-gray-200 pl-6 max-lg:pl-6 lg:pl-12'>
            <a href="" className='p-0.5 text-sm font-semibold'>Get started</a>
            <a href="" className='p-0.5 text-sm font-semibold'>Create stratergy</a>
            <a href="" className='p-0.5 text-sm font-semibold'>Pricing</a>
            <a href="" className='p-0.5 text-sm font-semibold'>Contact</a>
            <a href="" className='p-0.5 text-sm font-semibold'>Solution</a>
            <a href="" className='p-0.5 text-sm font-semibold'>E-commerce</a>
        </div>

        <div className='flex flex-col pt-11  md:w-[20%] bg-gray-200 pl-6 max-lg:pl-6 lg:pl-12'>
            <a href="" className='p-0.5 text-sm font-semibold'>Your Story</a>
            <a href="" className='p-0.5 text-sm font-semibold'>Create Story</a>
            <a href="" className='p-0.5 text-sm font-semibold'>Sell fast</a>
        </div>

        <div className='flex relative flex-col pt-11  md:w-[20%] bg-gray-200 pb-10 md:pb-0 pl-6 max-lg:pl-6 lg:pl-12 max-md:h-55'>
            <a href="" className='p-0.5 text-sm font-semibold'>Privacy & Policy</a>
            <a href="" className='p-0.5 text-sm font-semibold'>Contact us</a>
            <a href="" className='p-0.5 text-sm font-semibold'>API</a>
            <p className="absolute bottom-10 max-lg:left-2 text-black lg:text-sm max-lg:text-[12px] max-md:text-sm max-md:ml-4 font-medium w-full ">&copy; 2025. All rights reserved.</p>
        </div>
        

    </section>
  )
}

export default Footer