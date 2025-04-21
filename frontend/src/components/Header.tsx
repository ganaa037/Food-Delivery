import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Location } from "./Location";

export const Header = ({
  sign,
  className,
}: {
  sign: any;
  className: string;
}) => {
  return (
    <div
      className={
        "h-[68px]  py-3 px-44 bg-black flex justify-between items-center " +
        className
      }
    >
      <div className="flex gap-3 ">
        <Image src="logo.svg" alt="" width={46} height={37.29}></Image>
        <div>
          <p className="text-white">
            Nom<span className="text-[#EF4444]">Nom</span>
          </p>
          <p className="text-white">Swift delivery</p>
        </div>
      </div>
      {sign ? (
        <div className="flex gap-[12.81px]">
          <Button className="bg-white text-black">sign up</Button>
          <Button className="bg-[#EF4444]">login</Button>
        </div>
      ) : (
        ""
      )}
      <Location />
    </div>
  );
};
