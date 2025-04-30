import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { CardInfo } from "./CardInfo";
import { Icon } from "./Icon";

export const Header = () => {
  return (
    <div className="h-[68px]  py-3 px-44 bg-black flex justify-between items-center ">
      <div>
        <Icon />
      </div>

      <div className="flex gap-[12.81px]">
        <Button className="bg-white text-black">sign up</Button>
        <Button className="bg-[#EF4444]">login</Button>
      </div>

      <CardInfo />
    </div>
  );
};
