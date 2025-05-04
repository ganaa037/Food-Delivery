import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
export const step3 = () => {
  return (
  <div className='flex gap-6 flex-col'>
        <CardTitle className="text-[#09090B] text-6 font-semibold leading-8">
        Create new password
    </CardTitle>
    <CardDescription>
    Set a new password with a combination of letters and numbers for better security.
    </CardDescription>

  <CardContent className="px-0 flex gap-4 flex-col">
    <Input></Input>
    <Input></Input>

    
  </CardContent>
       
        <Button   className="w-full">
        Create password
        </Button>
     
 
      </div>
   
 
  )
}
