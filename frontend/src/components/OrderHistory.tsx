import { Map, Soup, Timer } from "lucide-react";
import React from "react";

export const OrderHistory = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <p>$26.97</p>
            <p>(#20156)</p>
          </div>
          <p className="w-17 h-7 border border-red-500 rounded-2xl px-[10px] py-1 text-3">
            Pending
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex  gap-2 ">
            <Soup />
            <p>Sunshine Stackers</p>
          </div>
          <p>1</p>
        </div>
        <div className="flex justify-between">
          <div className="flex  gap-2 ">
            <Soup />
            <p>Sunshine Stackers</p>
          </div>
          <p>1</p>
        </div>
        <div className="flex justify-between">
          <div className="flex  gap-2 ">
            <Timer />
            <p>Sunshine Stackers</p>
          </div>
          <p>1</p>
        </div>
        <div className="flex justify-between">
          <div className="flex  gap-2 ">
            <Map />
            <p>Sunshine Stackers</p>
          </div>
          <p>1</p>
        </div>
      </div>
      <p className="w-[439px] h-[1px] border border-gray-400"></p>
    </div>
  );
};
