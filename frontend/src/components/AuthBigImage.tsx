import Image from "next/image";
import React from "react";

export const AuthBigImage = () => {
  return (
    <div className="w-[60%] h-full flex items-center">
      <Image
        width={856}
        height={904}
        border-radius={16}
        src="/image.jpg"
        alt=""
      />
    </div>
  );
};
