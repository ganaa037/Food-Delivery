import React from "react";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const Categories = () => {
  const mockData = [
    "Appetizers",
    "Pizza",
    "Burger",
    "Sushi",
    "Salad",
    "Dessert",
    "Dessert",
    "Dessert",
    "Dessert",
    "Dessert",
    "Dessert",
    "Dessert",
    "Dessert",
    "Dessert",
    "Dessert",
    "Dessert",
    "Dessert",
  ];
  return (
    <div className="flex flex-col gap-9 px-12 ">
      <p className="text-[30px] font-semibold leading-9 text-[#FFF]">
        Categories
      </p>
      <Carousel className="px-12">
        <CarouselContent className=" flex gap-5 w-full ">
          {mockData.map((value: any, index: number) => {
            return (
              <CarouselItem key={index} className="basis-auto">
                <Badge
                  variant="outline"
                  className="bg-[#F4F4F5] text-[black] text-[18px] font-normal leading-7 py-1 px-5 rounded-[9999px]"
                >
                  {value}
                </Badge>
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
