import { Categories } from "@/components/Categories";
import { FoodCard } from "@/components/FoodCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-9 w-[1440px] bg-[#71717A]">
      <Categories />
      <FoodCard />
    </div>
  );
}
