"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Category } from "@/app/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import CloudnaryUpload from "@/app/_components/Cloudnary";

const formSchema = z.object({
  categoryName: z
    .string()
    .min(2, "Category name must be at least 2 characters"),
});

export default function ProfileFormDishes() {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryName: "",
    },
  });

  const getCategories = async () => {
    const data = await fetch("http://localhost:7000/food-category");
    const jsonData = await data.json();
    setCategories(jsonData.newGetCategory);
    console.log(jsonData);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const createCategory = async (category: string) => {
    const data = await fetch("http://localhost:7000/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: category }),
    });
    getCategories();
  };

  const updateCategory = async (id: string) => {
    const data = await fetch(`http://localhost:7000/food-category/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: isEdit }),
    });
    getCategories();
  };
  const handleclick = (e: any) => {
    const { value } = e.target;
    setIsEdit(value);
  };

  const deleteCategory = async (id: string) => {
    const data = await fetch(`http://localhost:7000/food-category/${id}`, {
      method: "DELETE",
    });

    getCategories();
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    createCategory(values.categoryName);
    setIsOpen(false);
  }

  return (
    <div className="w-[1300px] justify-center flex ">
      <div className="flex flex-col w-full">
        <div>
          <h1 className="text-[20px]">Dishes category</h1>
        </div>
        <div className="flex gap-2 w-full h-[176px] text-nowrap items-center">
          <Dialog>
            {categories?.map((category: Category, index: number) => {
              return (
                <ContextMenu key={index}>
                  <ContextMenuTrigger>
                    <button className="rounded-3xl border-[1px] py-2 px-4 hover:border-blue-600">
                      {category.categoryName}
                    </button>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <DialogTrigger asChild>
                      <ContextMenuItem
                        onClick={() => setCategoryId(category._id)}
                      >
                        Edit Category
                      </ContextMenuItem>
                    </DialogTrigger>

                    <ContextMenuItem
                      onClick={() => deleteCategory(category._id)}
                    >
                      Delete
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              );
            })}
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle hidden></DialogTitle>
                <DialogDescription>Edit food category</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Edit here
                  </Label>
                  <Input
                    onChange={handleclick}
                    id="name"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={() => {
                    updateCategory(categoryId);
                  }}
                >
                  Save edit changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button className="w-[36px] h-[36px] bg-[#EF4444] rounded-full text-white gap-8 px-[16px] items-center justify-center flex py-[8px] hover:bg-red-700 hover:text-white">
                +
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle></DialogTitle>
              <DialogDescription></DialogDescription>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="categoryName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Add new category</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type category name...."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Add category</Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex w-full gap-[16px]">
          <div>
            {categories.map((category, index) => {
              return (
                <div
                  key={index}
                  className="w-[239px] h-[225px] border-[1px] rounded-2xl items-center justify-center flex flex-col"
                >
                  {category.categoryName}
                  <div
                    className=""
                    // value="@peduarte"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="text-white bg-[#EF4444] w-[40px] h-[40px] rounded-full items-center flex hover:bg-red-700 hover:text-white"
                        >
                          +
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <CloudnaryUpload />
                        {/* <DialogHeader>
                          <DialogTitle>Add new Dish to Appetizers</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Food name
                            </Label>
                            <Input
                              id="name"
                              // value="Pedro Duarte"
                              className="col-span-3"
                              placeholder="Type food name"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                              Food price
                            </Label>
                            <Input
                              id="submit"
                              // value="@peduarte"
                              className="col-span-3"
                              placeholder="Enter price..."
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                              Ingredients
                            </Label>
                            <Input
                              id="submit"
                              // value="@peduarte"
                              className="col-span-3"
                              placeholder="List ingredients...."
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Add Dish</Button>
                        </DialogFooter> */}
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-[14px]">Add new Dish to</p>
                    <p className="text-[14px]">Appetizers</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex object-contain flex-col w-[241px] items-center border-[1px] rounded-2xl">
            <div className="flex justify-center p-1">
              <Image width={238} height={129} src="/Product Image.png" alt="" />
            </div>
            <div className="flex gap-[10px] w-[238.75px] h-[32px] items-center">
              <h2 className="text-[#EF4444] text-[17px] font-medium">
                Brie Crostini Appetizer
              </h2>
              <p className="text-sm">12.99$</p>
            </div>
            <div>
              <p className="text-[12px] font-medium">
                Fluffy pancakes stacked with fruits, cream, syrup, and powdered
                sugar.
              </p>
            </div>
          </div>
          {/* <CloudnaryUpload /> */}
        </div>
      </div>
    </div>
  );
}
