"use client"
import { useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquareChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function page() {
  const [count,setCount]=useState(0)
const addClick =()=>{
  setCount(count + 1)  
}
const backClick =()=>{
  setCount(count - 1)  
}
const router=useRouter()
const handleClick =()=>{
  router.push("login")
}


  const Steps = [Step1, Step2][count];
  return (
    <Card className="w-[416px] h-fit flex gap-6 border-none">
       {count >0 &&( <SquareChevronLeft onClick={backClick}/>)}
       <Steps/>
       
        <Button onClick={addClick}  className="w-full">
          Let's Go
        </Button>
      <CardFooter>
        <p>Already have an account?</p>

        <button onClick={handleClick} >Login</button>
      </CardFooter>
    </Card>
  );
}
