import React from "react";

import Image from "next/image";
export const FoodCard = () => {
  return (
    <div className="w-[342px] h-[397px] border p-4 rounded-[20px] gap-5 flex flex-col bg-white">
      <Image src="/foodimage.png" alt="foodimage" width={365} height={210} />

      <div className="flex flex-col gap-2">
        <div className=" flex justify-between gap-2 w-full items-center">
          <p className="text-[#EF4444] text-6 font-semibold leading-8 h-8">
            Finger food{" "}
          </p>
          <p>$12.99</p>
        </div>
        <p className="text-[#09090B] text-[14px] font-normal leading-5">
          Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
        </p>
      </div>
    </div>
  );
};
