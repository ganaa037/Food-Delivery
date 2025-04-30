import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";
import { Button } from "./ui/button";
type CardType = {
  imgSrc: string;
  foodName: string;
  price: number;
  ingredients: string;
};
export const FoodCardHelper = ({
  imgSrc,
  foodName,
  price,
  ingredients,
}: CardType) => {
  return (
    <Dialog>
      <Button className="absolute left-75 bottom-10 bg-white rounded-[50%] w-11 h-11">
        <CirclePlus className="text-red-400  " />
      </Button>
      <DialogTrigger className="w-[397px] h-[342px] border p-4 rounded-[20px] gap-5 flex flex-col bg-white">
        <div className="relative">
          <img className="w-[365px] h-[210px]" src={imgSrc} alt="foodimage" />
        </div>

        <div className="flex flex-col gap-2">
          <div className=" flex justify-between gap-2 w-full items-center">
            <p className="text-[#EF4444] text-6 font-semibold leading-8 h-8">
              {foodName}
            </p>
            <p>{price}</p>
          </div>
          <p className="text-[#09090B] text-[14px] font-normal leading-5">
            {ingredients}
          </p>
        </div>
      </DialogTrigger>

      <DialogContent className="w-[826px] h-[412px] p-6 flex items-center ">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription className="flex w-[377px] h-[364px] gap-6">
            <img className="rounded-[20px]" src={imgSrc}></img>
            <div className="flex flex-col justify-between w-[377px] h-[364px]">
              <div className="flex ">
                <p>{foodName}</p>
                <p>
                  Fluffy pancakes stacked with fruits, cream, syrup, and
                  powdered sugar.
                </p>
              </div>

              <div>
                <p>Total price </p>
                <p>$12.99 </p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
