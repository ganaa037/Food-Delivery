import React from "react";
import { SquareChevronLeft } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export  default function page (){
  return (
    <Card className="w-[416px] h-[288px] flex gap-6 border-none">
      <CardHeader>
        <SquareChevronLeft />
        <CardTitle className="text-[#09090B] text-6 font-semibold leading-8">
          Create your account
        </CardTitle>
        <CardDescription>
          Sign up to explore your favorite dishes.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0 flex gap-4 flex-col">
        <Input></Input>
        
        <div className="flex gap-2">
          <input type="checkbox"></input>
          <p>Show password</p>
        </div>
      </CardContent>
      <CardContent className="px-0 flex rounded-[6px]">
        <Button disabled className="w-full">
          Let's Go
        </Button>
      </CardContent>
      <CardFooter>
        <p>Already have an account?</p>

        <Link href="">Login</Link>
      </CardFooter>
    </Card>
  );
};
