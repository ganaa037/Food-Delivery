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
import { ChevronRight, MapPin, ShoppingCart, User } from "lucide-react";

export const Location = ({ user }: { user: string }) => {
  return (
    <div className="flex gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="w-[251px] h-[36px] rounded-[9999px] flex gap-1 text-red-500"
            variant="outline"
          >
            <MapPin className=" size-5" /> Delivery address:
            <label className="text-gray-400">Add location</label>
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

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="w-9 h-9 bg-gray-500 rounded-[50%] flex items-center justify-center">
        <ShoppingCart className="size-4" />
      </div>
      <div className="w-9 h-9 rounded-[50%] flex items-center justify-center bg-red-500">
        <User className="size-4 " />
      </div>
    </div>
  );
};
