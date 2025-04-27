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

import { ChevronRight, MapPin, ShoppingCart, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "./ui/input";

export const Location = () => {
  return (
    <div className="flex gap-3">
      <Dialog>
        <DialogTrigger asChild >
          <Button
            className="w-[251px] h-[36px] rounded-[9999px] flex gap-1 text-red-500"
            variant="outline"
          >
            <MapPin className=" size-5 " /> Delivery address:
            <label className="text-gray-400" >Add location</label>
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
        <SheetContent className="bg-gray-500 w-[536px] flex items-center p-[32px]">
          <SheetHeader>
            <SheetTitle>Order Detail</SheetTitle>
            <SheetDescription>
              <Tabs
                defaultValue="account"
                className="w-[471px] h-[840px]  flex gap-6 "
              >
                <TabsList className="w-[471px]">
                  <TabsTrigger value="account">Cart</TabsTrigger>
                  <TabsTrigger value="password">Order</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="bg-white ">
                  Make changes to your account here.
                  <div>jj</div>
                </TabsContent>
                <TabsContent value="password">
                  Change your password here.
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
