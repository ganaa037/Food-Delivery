"use client"
import React, { useState } from 'react'
import { Step1 } from './Step1'
import { Card } from '@/components/ui/card'
import {  SquareChevronLeft, SquareChevronRight} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { step3 } from './step3'
import { Step2 } from './Step2'

export default function page ()  {
  const[count, setCount]=useState(0)
  const handleClick =()=>{
    setCount(count + 1)
  }
   const handleBackClick =()=>{
    setCount(count - 1)
  }
  const Steps= [Step1,Step2,step3][count]
  return (
    
     <Card className="w-[416px] h-fit flex border-none">
     <div className='flex justify-between'>
     {count >0 && (
      <SquareChevronLeft onClick={handleBackClick}/>)}
      <SquareChevronRight onClick={handleClick}/>
      </div>
      <Steps/>
     </Card>
     
   
  )
}
