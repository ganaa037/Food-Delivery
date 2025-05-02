"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  ChevronRight,
  Map,
  MapPin,
  ShoppingCart,
  Soup,
  Timer,
  User,
  X,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "./ui/input";
import { OrderTabCart } from "./OrderTabCart";
import { OrderHistory } from "./OrderHistory";

export const OrderDetailSheet = () => {
  const [data, setData] = useState([]);

  if (typeof window !== "undefined") {
    const orderedfoods = localStorage.getItem("foods");
    useEffect(() => {
      setData(JSON.parse(orderedfoods as string));
    }, []);
  }
  console.log(data, "data");

  return (
    <div className="flex gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="w-[251px] h-[36px] rounded-[9999px] flex gap-1 text-red-500"
            variant="outline"
          >
            <MapPin className=" size-5 " /> Delivery address:
            <label className="text-[#404040]">Add location</label>
            <ChevronRight className="size-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <Input></Input>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Sheet>
        <SheetTrigger className="w-9 h-9 bg-gray-500 rounded-[50%] flex items-center justify-center">
          <ShoppingCart className="size-4" />
        </SheetTrigger>
        <SheetContent className="bg-[#404040] w-[536px] flex items-center p-[32px] ">
          <SheetTitle className="text-white">Order Detail</SheetTitle>

          <Tabs defaultValue="account" className=" flex gap-6 rounded-[5px]">
            <TabsList className="w-[471px] ">
              <TabsTrigger value="account">Cart</TabsTrigger>
              <TabsTrigger value="password">Order</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="">
              <div className="w-[471px] h-[840px] bg-white  flex rounded-2xl p-4  gap-5  flex-col">
                <p className="text-[#09090B] text-5 font-semibold leading-7">
                  My cart
                </p>

                {data?.map((value: any) => {
                  return (
                    <OrderTabCart
                      image={value.image}
                      key={value._id}
                      name={value.foodName}
                      ingredients={value.ingredients}
                      price={value.price}
                      quantity={value.quantity}
                    />
                  );
                })}

                <Button className="bg-white border border-red-500 text-red-500">
                  Add food
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="password" className="">
              <div className="w-[471px] h-[840px] bg-white  flex rounded-2xl p-4  gap-5  flex-col">
                <p>Order history</p>
                <OrderHistory />
                <OrderHistory />
              </div>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>

      <div className="w-9 h-9 rounded-[50%] flex items-center justify-center bg-red-500">
        <User className="size-4 " />
      </div>
    </div>
  );
};
