"use client";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dispatch, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Login({ setmail }: { setmail: Dispatch<string> }) {
  const formSchema = z.object({
    email: z.string().email({ message: "enter your email address" }),
    password: z.string().min(6, "minimum 6 characters password"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const signup = async (email: string, password: string) => {
    try {
      const data = await fetch("http://localhost:7000/auth/signUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const jsonData = await data.json();
      console.log(jsonData, "link");
      toast.success("Амжилттай нэвтэрлээ!");
      console.log("Login successful:", jsonData);
    } catch (error) {
      toast.error("Нэвтрэхэд алдаа гарлаа!");
      console.error("Error signing in:", error);
    }
    router.push("/home");
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    signup(values.email, values.password);
  }
  return (
    <div className="w-[1300px] flex gap-10 m-auto items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[24px]">
                  Create your account
                </FormLabel>
                <p className="text-[16px]">
                  Sign up to explore your favorite dishes
                </p>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="nomail@gmail.com"
                    className="w-[416px] h-[36px]"
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
                <FormControl>
                  <Input
                    type="password"
                    placeholder="enter you password"
                    className="w-[416px] h-[36px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-4">
            <div className="flex gap-2"></div>
            <Button type="submit" className="w-[416px] h-[36px]">
              Let's Go
            </Button>
          </div>
        </form>
      </Form>
      <div className="mt-5">
        <Image
          width={800}
          height={900}
          src="/pizzaboy.png"
          alt=""
          className="w-[856px] h-[904px]"
        />
      </div>
    </div>
  );
}
