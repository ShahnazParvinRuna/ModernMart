import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='relative'>
            <Image
                src='https://img.freepik.com/free-photo/waistup-portrait-carefree-modern-young-girl-making-online-purchase-shopping-internet-using-mobile-ap_1258-126355.jpg?semt=ais_incoming&w=740&q=80'
                width={1000}
                height={1000}
                alt='Hero'
                className='w-full'
                unoptimized
            />
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
                <div className="container">
                    <div className="text-center space-y-3">
                        <h1 className="text-white text-4xl lg:text-5xl font-bold">
                            Discover the Best Deals Online
                        </h1>
                        <p className="text-white/80  md:text-lg">
                            Shop top-quality products at unbeatable prices.
                        </p>
                        <Link className='btn-primary border' href='/shop'>Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero