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
  foodName: z.string().min(3, "minimum of three characters"),
  image: z.string().nonempty("enter a picture"),
});

export default function CloudnaryUpload() {
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

    const data = await fetch("http://localhost:7000/foods", {
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

    console.log("Cloudnary-Data", jsonData);
  };

  return (
    <div className="flex flex-col">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* <FormField
            control={form.control}
            name="foodName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Food price</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <FormField
            control={form.control}
            name="image"
            render={({ field: { onChange, value, ...rest } }) => (
              <FormItem>
                <FormLabel>Food Image</FormLabel>
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
        </form>
      </Form>

      {previewUrl && (
        <div className="border">
          <img className="size-48 object-cover" src={previewUrl} alt="" />
        </div>
      )}
      {/* <Button type="submit">Submit</Button> */}
    </div>
  );
}
