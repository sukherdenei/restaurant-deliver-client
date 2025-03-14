// "use client";

// import { useState } from "react";
// import React from "react";

// export const CloudnaryUpload = () => {
//   const [file, setFile] = useState(null);
//   const [image, setImage] = useState("");

//   const PRESET_NAME = "food-delivery-app";
//   const CLOUDINAY_NAME = "deossi8am";

//   const handleFile = (e: any) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFile(file);
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleUpload = async () => {
//     console.log("image uploading");
//     if (!file) {
//       alert("Pls select a file");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", PRESET_NAME);
//     formData.append("api_key", CLOUDINAY_NAME);

//     try {
//       const res = await fetch(
//         `http://api.cloudinary.com/v1_1/${CLOUDINAY_NAME}/upload`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       const data = await res.json();
//       setImage(data.secure_url);
//       console.log("image uploaded", data);
//     } catch (err) {
//       console.log(err);
//       alert("Failed to upload file");
//       setFile(null);
//     }
//     console.log(file);
//   };

//   return (
//     <div className="">
//       <div className="flex justify-center items-center w-full">
//         <input type="file" onChange={handleFile} />
//         <button onClick={handleUpload} className="bg-green-500 rounded-lg p-1">
//           Upload
//         </button>
//       </div>

//       {image && (
//         <img alt="uploaded" src={image} className="w-[300px] h-[300px]" />
//       )}
//     </div>
//   );
// };

"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const uploadImage = async (file: File | null) => {
  if (!file) {
    return null;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();

    return result.secure_url;
  } catch (error: unknown) {
    return { error: "failed to upload image" };
  }
};

const formSchema = z.object({
  foodName: z.string().min(2, "Hamgiin bagadaa 2 usegtei baina shuu"),
  image: z.string().nonempty("Zuragaa oruulna uu"),
});

export default function CloudnaryUploadd() {
  const [foodImageFile, setFoodImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "",
      image: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setFoodImageFile(file);

    const tempImageUrl = URL.createObjectURL(file);
    setPreviewUrl(tempImageUrl);
    form.setValue("image", "uploaded");
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    createFood(values);
  }

  const createFood = async (values: z.infer<typeof formSchema>) => {
    const imageUrl = await uploadImage(foodImageFile);

    const data = await fetch("http://localhost:8000/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foodName: values.foodName,
        price: 100,
        image: imageUrl,
        ingredients: "guril mah",
        category: "676e370164d1f8cafda026ac",
      }),
    });
    const jsonData = await data.json();

    console.log("data", jsonData);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="foodName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Food name</FormLabel>
                <FormControl>
                  <Input placeholder="Soup" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field: { onChange, value, ...rest } }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    placeholder="image"
                    type="file"
                    onChange={handleChange}
                    {...rest}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {previewUrl && (
        <div className="border">
          <img className="size-48 object-cover" src={previewUrl} alt="" />
        </div>
      )}
    </div>
  );
}
