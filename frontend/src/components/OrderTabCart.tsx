import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus, X } from "lucide-react";

export const OrderTabCart = ({
  name,
  ingredients,
  price,
  image,
  quantity,
}: {
  name: string;
  ingredients: string;
  price: number;
  image: string;
  quantity: number;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-[10px] ">
        <img
          className="w-[124px] h-[120px] rounded-[12px]"
          src={image}
          alt="food"
        />
        <div className="flex flex-col gap-5">
          <div className="flex">
            <div className="flex flex-col">
              <p className="text-[#EF4444] text-4 font-bold text-nowrap">
                {name}
              </p>

              <p>{ingredients}</p>
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
              <p>{quantity}</p>
              <button>
                <Plus />
              </button>
            </div>
            <p>{price}</p>
          </div>
        </div>
      </div>
      <p className="w-[439px] h-[1px] border border-gray-400"></p>
    </div>
  );
};
