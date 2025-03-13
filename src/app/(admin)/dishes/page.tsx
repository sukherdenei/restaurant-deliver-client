// "use client";
// import Image from "next/image";
// import { NomNom } from "../toggle-menu/page";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useEffect, useState } from "react";

// // import { CloudnaryUpload } from "@/app/_components/Cloudnary";

// export default function Dishes() {
//   const [categories, setCategories] = useState([]);
//   const [categoryName, setCategoryName] = useState("");

//   useEffect(() => {
//     const getCategories = async () => {
//       const data = await fetch("http://localhost:7000/food-category");
//       const jsondData = await data.json();
//       // setCategories(jsondData.data);
//       console.log("back-end data", jsondData);
//       setCategories(jsondData.newGetCategory);
//     };
//     getCategories();
//   }, []);

//   const createCategory = async () => {
//     const data = await fetch("http://localhost:7000/food-category", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ categoryName }),
//     });
//   };

//   const handleChange = (e: any) => {
//     const { value } = e.target;
//     setCategoryName(value);
//   };

//   return (
//     <div className="flex w-[1376px]">
//       <div className="w-[205px]">
//         <NomNom />
//       </div>
//       <div className="w-[1171px] h-[582px] ">
//         <div className="flex gap-5 justify-center">
//           {categories?.map((category: any, index: any) => {
//             return <div key={index}>{category.categoryName}</div>;
//           })}
//         </div>
//         <div className="w-[28px] h-[28px]">
//           <h2 className="text-[20px]"></h2>
//         </div>
//         <div className="w-[1131px] h-[241px] items-center edrounded-lg flex gap-3">
//           <div className="relative border-[1px]">
//             <Image
//               src="/"
//               alt=""
//               width={271}
//               height={241}
//               className="w-[241px] h-[200px]"
//             />
//             <div className="flex flex-col items-center">
//               <p>Add new Dish to </p>
//               <p>Salads</p>
//             </div>
//             <Dialog>
//               <DialogTrigger asChild>
//                 <Button
//                   variant="outline"
//                   className="absolute bottom-[50%] left-[40%] rounded-full bg-[#EF4444] w-[40px] h-[40px]"
//                 >
//                   +
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="sm:max-w-[425px]">
//                 <DialogHeader>
//                   <DialogTitle>Add new Dish to Appetizers</DialogTitle>
//                 </DialogHeader>
//                 <div className="grid gap-4 py-4">
//                   <div className="grid grid-cols-4 items-center gap-4">
//                     <Label htmlFor="name" className="text-right">
//                       Food name
//                     </Label>
//                     <Input
//                       id="name"
//                       onChange={handleChange}
//                       value={categoryName}
//                       className="col-span-3"
//                     />
//                   </div>
//                   {/* <div className="grid grid-cols-4 items-center gap-4">
//                     <Label htmlFor="username" className="text-right">
//                       Food price
//                     </Label>
//                     <Input
//                       id="username"
//                       // value="placeholder"
//                       className="col-span-3"
//                     />
//                   </div> */}
//                   {/* <div>
//                     <CloudnaryUpload />
//                   </div> */}
//                 </div>
//                 <DialogFooter>
//                   <Button onClick={createCategory}>Add dishes</Button>
//                 </DialogFooter>
//               </DialogContent>
//             </Dialog>
//           </div>
//           <div className="flex object-contain flex-col w-[241px] items-center">
//             <div className="flex justify-center p-1">
//               <Image width={270} height={241} src="/Product Image.png" alt="" />
//             </div>
//             <div className="flex gap-2 w-[238.75px] h-[20px]">
//               <h2 className="text-[#EF4444]">Brie Crostini Appetizer</h2>
//               <p>12.99$</p>
//             </div>
//             <p>
//               Fluffy pancakes stacked with fruits, cream, syrup, and powdered
//               sugar.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Category } from "@/app/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CloudnaryUpload } from "@/app/_components/Cloudnary";

const formSchema = z.object({
  categoryName: z.string().min(2, "CategoryName must be at least 2 characters"),
});

export default function ProfileFormDishes() {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [saveId, setSaveId] = useState<string>("");

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
    });
    getCategories;
  };

  const deleteCategory = async (id: string) => {
    const data = await fetch(`http://localhost:7000/food-category/${id}`, {
      method: "DELETE",
    });

    getCategories();
  };

  const editHandleClick = (id: string) => {
    setIsEdit(true);
    // setSaveId(true);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    createCategory(values.categoryName);
    setIsOpen(false);
    // updateCategory(values.categoryName);
  }

  return (
    <div className="w-full justify-center flex ">
      <div>
        <div>
          <h1 className="text-[20px]">Dishes category</h1>
        </div>
        <div className="flex gap-2 w-full h-[176px] text-nowrap items-center">
          {categories?.map((category: Category, index: number) => {
            return (
              <ContextMenu key={index}>
                <ContextMenuTrigger>
                  <button className="rounded-3xl border-[1px] py-2 px-4 hover:border-blue-600">
                    {category.categoryName}
                  </button>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem onClick={() => updateCategory(category._id)}>
                    Edit
                  </ContextMenuItem>
                  <ContextMenuItem onClick={() => deleteCategory(category._id)}>
                    Delete
                  </ContextMenuItem>
                  {/* <ContextMenuItem>Team</ContextMenuItem>
                      <ContextMenuItem>Subscription</ContextMenuItem> */}
                </ContextMenuContent>
              </ContextMenu>
            );
          })}

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button className="w-[36px] h-[36px] bg-[#EF4444] rounded-full text-white gap-8 px-[16px] items-center justify-center flex py-[8px]">
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
        <div className="w-[1131px] flex gap-[16px]">
          <div className="w-[239px] h-[225px] border-[1px] rounded-2xl items-center justify-center flex flex-col gap-2">
            <Button
              onClick={() => {
                CloudnaryUpload;
              }}
              className="text-white bg-[#EF4444] w-[40px] h-[40px] rounded-full items-center flex"
            >
              +
            </Button>
            <div className="flex flex-col justify-center items-center">
              <p className="text-[14px]">Add new Dish to</p>
              <p className="text-[14px]">Appetizers</p>
            </div>
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
        </div>
      </div>
    </div>
  );
}
