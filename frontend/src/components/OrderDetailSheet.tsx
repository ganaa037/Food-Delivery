import React from "react";
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

export const OrderDetailSheet = () => {
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
          <SheetHeader>
            <SheetTitle className="text-white">Order Detail</SheetTitle>
            <SheetDescription className="">
              <Tabs
                defaultValue="account"
                className=" flex gap-6 rounded-[5px]"
              >
                <TabsList className="w-[471px] ">
                  <TabsTrigger value="account">Cart</TabsTrigger>
                  <TabsTrigger value="password">Order</TabsTrigger>
                </TabsList>

                <TabsContent value="account" className="">
                  <OrderTabCart />
                </TabsContent>

                <TabsContent value="password" className="">
                  <div className="w-[471px] h-[840px] bg-white  flex rounded-2xl p-4  gap-5  flex-col">
                    <p>Order history</p>
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
                </TabsContent>
              </Tabs>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="w-9 h-9 rounded-[50%] flex items-center justify-center bg-red-500">
        <User className="size-4 " />
      </div>
    </div>
  );
};
