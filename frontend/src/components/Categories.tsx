"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { FoodCard } from "./FoodCard";
import { useRouter, useSearchParams } from "next/navigation";
type categoryType = { name: string; _id: string };

export const Categories = () => {
  const [categories, setCategories] = useState<categoryType[]>([]);
  const searchParams = useSearchParams();
  const id = searchParams.get("categoryId");
  const fetchCategory = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/category`
    );
    setCategories(res.data.category);
    console.log(res.data, "gh");
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  const router = useRouter();
  const handleClick = (_id: string) => {
    {
      id == _id ? router.push("/home-page") : router.push(`?categoryId=${_id}`);
    }
  };
  return (
    <div className="flex flex-col gap-9 px-12 ">
      <p className="text-[30px] font-semibold leading-9 text-[#FFF]">
        Categories
      </p>
      <Carousel className="px-12">
        <CarouselContent className=" flex gap-5 w-full ">
          {categories?.map((value, index) => {
            return (
              <CarouselItem key={index} className="basis-auto">
                <button
                  onClick={() => handleClick(value._id)}
                  className={`bg-[#F4F4F5] text-[black] text-[18px] font-normal leading-7 py-1 px-5 rounded-[9999px] ${
                    id === value._id
                      ? "bg-red-500 text-white"
                      : "bg-[#F4F4F5] text-black"
                  }`}
                >
                  {value.name}
                </button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="" />
        <CarouselNext className="" />
      </Carousel>
    </div>
  );
};
