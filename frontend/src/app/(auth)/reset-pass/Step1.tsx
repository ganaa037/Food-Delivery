"use client"
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from 'react'

export const Step1 = () => {
    const router =useRouter()
    const handleClick =()=>{
        router.push("sign-up")
    }
  return (
    <div className="flex flex-col gap-6">
<CardTitle className="text-[#09090B] text-6 font-semibold leading-8">
Reset your password 
</CardTitle>
<CardDescription>
Enter your email to receive a password reset link.
</CardDescription>

<CardContent className="flex p-0">
<Input></Input>

</CardContent>
<Button   className="w-full">
        Send link
        </Button>
      <CardFooter>
        <p>Don’t have an account?</p>

        <button onClick={handleClick} >Sign up</button>
      </CardFooter>
</div>
 )
}
