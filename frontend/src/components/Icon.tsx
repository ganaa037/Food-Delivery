import Image from "next/image";
import React from "react";

export const Icon = () => {
  return (
    <div className="flex gap-3 ">
      <Image src="logo.svg" alt="" width={46} height={37.29}></Image>
      <div>
        <p className="text-white">
          Nom<span className="text-[#EF4444]">Nom</span>
        </p>
        <p className="text-white">Swift delivery</p>
      </div>
    </div>
  );
};
