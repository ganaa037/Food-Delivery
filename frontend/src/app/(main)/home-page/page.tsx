import { Categories } from "@/components/Categories";
import { FoodCard } from "@/components/FoodCard";
import { Fullscreen } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-gray-400 ">
      <div className="flex flex-col gap-8">
        <Image src="/bgimg.png" alt="" width={1440} height={668} />
        <Categories />
      </div>
      <div className="flex gap-9 flex-wrap justify-center mt-10">
        <FoodCard />
      </div>
    </div>
  );
}
