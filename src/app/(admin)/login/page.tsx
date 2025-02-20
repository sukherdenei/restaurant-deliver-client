"use client";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Register() {
  const [type, setType] = useState("password");
  // Маягтын шаардлага хамгийн багадаа 6 хамгий ихдээ 8
  const formSchema = z
    .object({
      username: z
        .string()
        .min(6, "Minimum 6 characters")
        .max(8, "maximum 8 characters"),
      password: z
        .string()
        .min(6, "min 6 charecters!")
        .max(8, "maximum 8 charecters"),
      email: z.string().email(),
      confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
      message: "Passwords don't match",
      path: ["confirm"], // path of error
    });

  // Төрөл заах zodResolver ашиглах
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      confirm: "",
    },
  });

  // onClick function. True
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Succesfull!");
  }
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <div className="w-[1200px] flex gap-10 m-auto items-center">
      <div className="flex flex-col gap-6 w-[416px] h-[288px] p-10">
        <img src="/chevron-left.png" alt="" className="w-[16px] h-[16px]" />
        <div className="h-[60px]">
          <h1 className="h-[32px] text-[24px]">Create your account</h1>
          <p className="text-[16px]">Sign up to explore your favorite dishes</p>
        </div>

        <div className="h-[36px] rounded-lg border-[1px] border-s-stone-400">
          <input
            type="text"
            placeholder="Enter your email address"
            className="h-[36px] border-black outline-blue-700 w-[100%] p-2
"
          />
        </div>
        <button className="bg-[silver] rounded-sm text-[14px] py-[4.5px]">
          Let's Go
        </button>
        <div className="flex gap-2 items-center justify-center h-[24px]">
          <p className="text-[16px] h-[24px]">Already have an account?</p>
          <button
            className="text-[#2563EB] text-[16px]
"
          >
            Log in
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Image
          width={800}
          height={900}
          src="/pizzaboy.png"
          alt=""
          className="w-[856px] h-[904px]"
        />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Create your account</FormLabel>
                <FormDescription>
                  Sign up to explore your favorite dishes
                </FormDescription>
                <FormControl>
                  <Input
                    type="username"
                    placeholder="Enter your username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormDescription>
                  Sign up to explore your favorite dishes
                </FormDescription>
                <FormControl>
                  <Input
                    type={type}
                    placeholder="enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormDescription>
                  Sign up to explore your favorite dishes
                </FormDescription>
                <FormControl>
                  <Input
                    type={type}
                    placeholder="confirm password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <input type="checkbox" onClick={handleToggle} />
              <p>Show password</p>
            </div>
            <Button type="submit">Let's Go</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
