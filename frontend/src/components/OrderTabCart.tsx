import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus, X } from "lucide-react";

export const OrderTabCart = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-[10px] ">
        <img className="w-[124px] h-[120px] rounded-[12px]" src="order.png" />
        <div className="flex flex-col gap-5">
          <div className="flex">
            <div className="flex flex-col">
              <p className="text-[#EF4444] text-4 font-bold text-nowrap">
                Sunshine Stackers
              </p>

              <p>
                Fluffy pancakes stacked with fruits, cream, syrup, and powdered
                sugar.
              </p>
            </div>
            <Button className="w-9 h-9 rounded-[9999px] px-4 py-2 bg-white border border-red-600">
              <X className="text-red-600" />
            </Button>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-6">
              <button>
                <Minus />
              </button>
              <p>1</p>
              <button>
                <Plus />
              </button>
            </div>
            <p>12000</p>
          </div>
        </div>
      </div>
      <p className="w-[439px] h-[1px] border border-gray-400"></p>
    </div>
  );
};
