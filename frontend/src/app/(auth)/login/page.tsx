"use client";
import React from "react";
import { SquareChevronLeft } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ImageUpload } from "@/components/ImageUpload";

export default function page() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("sign-up");
  };
  const handleClick =()=>{
    router.push("reset-pass")
  }
  return (
    
      
      <Card className="w-[416px] h-[288px] flex gap-6 border-none">
        <CardHeader>
          <SquareChevronLeft />
          <CardTitle className="text-[#09090B] text-6 font-semibold leading-8">
          Log in 
          </CardTitle>
          <CardDescription>
          Log in to enjoy your favorite dishes
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0 flex gap-4 flex-col">
          <Input></Input>
          <Input></Input>
          <div className="flex gap-2">
            <button onClick={handleClick}>Forgot password</button>
          </div>
        </CardContent>
        <CardContent className="px-0 flex rounded-[6px]">
          <Button disabled className="w-full">
            Let's Go
          </Button>
        </CardContent>
        <CardFooter>
          <p>Don’t have an account?</p>

          <button onClick={handleOnClick}>Sign-up</button>
        </CardFooter>
      </Card> 
    
  );
}
