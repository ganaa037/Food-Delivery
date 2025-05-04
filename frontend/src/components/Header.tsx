"use client"
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

import { Icon } from "./Icon";
import {  OrderDetailSheet } from "./OrderDetailSheet";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router=useRouter()
  const handleClick=()=>{
    router.push("sign-up")
  }
  const loginClick =()=>{
    router.push("login")
  }
  return (
    <div className="h-[68px]  py-3 px-44 bg-black flex justify-between items-center ">
      <div>
        <Icon />
      </div>

      <div className="flex gap-[12.81px]">
        <Button onClick={handleClick} className="bg-white text-black">sign up</Button>
        <Button onClick={loginClick} className="bg-[#EF4444]">login</Button>
      </div>

      <OrderDetailSheet/>
    </div>
  );
};
