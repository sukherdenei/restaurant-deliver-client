"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";

export const CloudnaryUpload = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState("");

  const PRESET_NAME = "food-delivery-app";
  const CLOUDINAY_NAME = "deossi8am";

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    console.log("image uploading");
    if (!file) {
      alert("Pls select a file");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", PRESET_NAME);
    formData.append("api_key", CLOUDINAY_NAME);

    try {
      const res = await fetch(
        `http://api.cloudinary.com/v1_1/${CLOUDINAY_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setImage(data.secure_url);
      console.log("image uploaded", data);
    } catch (err) {
      console.log(err);
      alert("Failed to upload file");
      setFile(null);
    }
    console.log(file);
  };

  return (
    <div className="">
      <div className="flex justify-center items-center w-full">
        <input type="file" onChange={handleFile} />
        <button onClick={handleUpload} className="bg-green-500 rounded-lg p-1">
          Upload
        </button>
      </div>

      {image && (
        <img alt="uploaded" src={image} className="w-[300px] h-[300px]" />
      )}
    </div>
  );
};
