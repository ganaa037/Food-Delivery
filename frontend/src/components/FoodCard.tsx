"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import axios from "axios";
import { Categories } from "./Categories";
import { useSearchParams } from "next/navigation";
import { FoodCardHelper } from "./FoodCardHelper";

type food = {
  name: string;
  image: string;
  foodName: string;
  price: number;
  ingredients: string;
};
interface foodType {
  _id: string;
  name: string;
  result: food[];
}

export const FoodCard = () => {
  const [data, setData] = useState<foodType[]>([]);
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const fetchdata = async () => {
    const response = await axios.get(
      categoryId
        ? `${process.env.NEXT_PUBLIC_BACKEND_URI}/food?categoryId=${categoryId}`
        : `${process.env.NEXT_PUBLIC_BACKEND_URI}/food`
    );

    setData(response.data.food);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  console.log(data, "HAHHAHA");

  // [
  //   {
  //     Categories: "mongol hool",
  //     foods: []
  //   },
  // ];
  console.log(data[0], "test");
  return (
    <div className="flex flex-col">
      <div className="flex pt-[54px] flex-col w-full">
        {data.map((element) => (
          <div key={element._id}>
            <h1 className="font-[600] text-[30px] text-white">
              {element.name}
            </h1>
            <div className="flex gap-5 pt-[54px] flex-wrap">
              {element.result.map((food, index) => {
                return (
                  <FoodCardHelper
                    key={index}
                    imgSrc={food.image}
                    foodName={food.foodName}
                    price={food.price}
                    ingredients={food.ingredients}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
