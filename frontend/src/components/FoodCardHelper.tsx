import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
      <DialogTrigger className="w-[397px] h-[342px] border p-4 rounded-[20px] gap-5 flex flex-col bg-white">
        <img className="w-[365px] h-[210px]" src={imgSrc} alt="foodimage" />
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

      <DialogContent className="w-[826px] h-[412px] p-6">
        <DialogHeader>
          <DialogTitle>
            <img src={imgSrc}></img>
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
