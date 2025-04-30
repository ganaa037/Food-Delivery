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
  MapPin,
  Minus,
  Plus,
  ShoppingCart,
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

export const CardInfo = () => {
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
                <div className="w-[471px] h-[840px] bg-white  flex rounded-2xl p-4 ">
                  <TabsContent value="account" className="flex gap-5  flex-col">
                    <p className="text-[#09090B] text-5 font-semibold leading-7">
                      My cart
                    </p>
                    <div className="flex gap-[10px] ">
                      <img
                        className="w-[124px] h-[120px] rounded-[12px]"
                        src="order.png"
                      />
                      <div className="flex flex-col gap-5">
                        <div className="flex">
                          <div className="flex flex-col">
                            <p className="text-[#EF4444] text-4 font-bold text-nowrap">
                              Sunshine Stackers
                            </p>

                            <p>
                              Fluffy pancakes stacked with fruits, cream, syrup,
                              and powdered sugar.
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
                    <p className=""></p>
                  </TabsContent>
                </div>

                <div>
                  <TabsContent value="password" className="">
                    hfdh
                  </TabsContent>
                </div>
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
