import React from 'react'
import { Badge } from './ui/badge'

export const Categories = () => {
    const mockData = [
        "Appetizers",
        "Pizza",
        "Burger",
        "Sushi",
        "Salad",
        "Dessert",
        "Dessert",
        "Dessert",
        "Dessert",
        "Dessert",
        "Dessert"
    ]
    return (
        <div className='flex flex-col gap-9 px-12 bg-[#71717A]'>
            <p className='text-[30px] font-semibold leading-9 text-[#FFF]'>Categories</p>
            <div className="flex gap-5">
                {mockData.map((value: any, index: number) => {
                    return (
                        <Badge key={index} variant="outline" className="bg-[#F4F4F5] text-[black] text-[18px] font-normal leading-7 py-1 px-5 rounded-[9999px]">{value}</Badge>
                    )
                })
                }
            </div>
        </div>
    )
}
