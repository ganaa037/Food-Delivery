import { uploadImage } from "@/utils/image-upload";
import React, { ChangeEvent, useState } from "react";

export const ImageUpload = () => {
  const [file, setFile] = useState<File>();
  const handleFileChane = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };
  console.log(file, "file");
  const handleOnClick = async (file?: File) => {
    if (!file) {
      console.log("File oruulaagu bn");
      return;
    }
    const imageURL = await uploadImage(file);
    console.log(imageURL);
  };

  return (
    <div className="flex gap-3">
      <input
        onChange={handleFileChane}
        type="file"
        className="w-30 h-8 border border-blue-400"
      ></input>
      <button
        onClick={() => handleOnClick(file)}
        className="w-20 h-8 bg-blue-400"
      >
        upload
      </button>
    </div>
  );
};
