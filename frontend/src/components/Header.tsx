import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export const Header = () => {
    return (
        <div className='h-[68px]  py-3 px-44 bg-black flex justify-between items-center'>
            <div className='flex gap-3'>
                <Image src="logo.svg" alt="" width={46}
                    height={37.29}
                ></Image>
                <div>
                    <p className='text-white'>Nom<span className='text-[#EF4444]'>Nom</span></p>
                    <p className='text-white'>Swift delivery</p>
                </div>
            </div>
            <div className='flex gap-[12.81px] '>
                <Button className='bg-white text-black'>sign up</Button>
                <Button className='bg-[#EF4444]'>login</Button>
            </div>
        </div>
    )
}
