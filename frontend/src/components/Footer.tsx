import React from "react";

import { Facebook, InstagramIcon } from "lucide-react";
import { Icon } from "./Icon";

export const Footer = () => {
  return (
    <div className="h-[755px] w-full bg-black flex gap-[76px] flex-col">
      <div className="h-[92px] bg-[#EF4444] mt-[60px] flex">
        <div className="flex gap-[34px] text-[#FAFAFA] text-[30px] font-semibold leading-[36px] items-center ">
          <p>Fresh fast delivered</p>
          <p>Fresh fast delivered</p>
          <p>Fresh fast delivered</p>
          <p>Fresh fast delivered</p>
        </div>
      </div>
      <div className="flex ">
        <div className="text-[#FAFAFA] text-4 font-normal leading-6 flex gap-[112px] ">
          <Icon />

          <div className="">
            <p className="text-[#71717A] leading-7">NOMNOM </p>
            <p>Home </p>
            <p>Contact us</p>
            <p>Delivery zone</p>
          </div>
          <div className="flex gap-[56px]">
            <div>
              <p className="text-[#71717A] leading-7">MENU</p>
              <p>Appetizers</p>
              <p>Salads</p>
              <p>Pizzas</p>
              <p>Lunch favorites</p>
              <p>Main dishes</p>
            </div>

            <div>
              <p></p>
              <p>Side dish </p>
              <p>Brunch</p>
              <p>Desserts</p>
              <p>Beverages</p>
              <p>Fish & Sea foods</p>
            </div>
          </div>
          <div>
            <p className="text-[#71717A] leading-7">FOLLOW US</p>
            <div className="flex">
              <Facebook />
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
