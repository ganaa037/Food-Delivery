"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import axios from "axios";
import { Categories } from "./Categories";
export const FoodCard = () => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/food`
    );

    setData(response.data.food);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {data?.map((value: any, index: any) => (
        <Dialog key={index}>
          <DialogTrigger className="w-[397px] h-[342px] border p-4 rounded-[20px] gap-5 flex flex-col bg-white">
            <img
              className="w-[365px] h-[210px]"
              src={value.image}
              alt="foodimage"
            />
            <div className="flex flex-col gap-2">
              <div className=" flex justify-between gap-2 w-full items-center">
                <p className="text-[#EF4444] text-6 font-semibold leading-8 h-8">
                  {value.foodName}
                </p>
                <p>{value.price}</p>
              </div>
              <p className="text-[#09090B] text-[14px] font-normal leading-5">
                {value.ingredients}
              </p>
            </div>
          </DialogTrigger>

          <DialogContent className="w-[826px] h-[412px] p-6">
            <DialogHeader>
              <DialogTitle>
                <img src={value.image}></img>
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
};
