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
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function resetPassReq() {
  const formSchema = z.object({
    password: z.string().min(6, "minimum 6 characters password"),
    confirm: z.string().min(6, "baga6").max(12, "max12"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("id");
  if (!token) {
    return (
      <div>
        <h1>Please verify Your Email</h1>
        <p>
          We just sent an email to Test@gmail.com. Click the link in the email
          to verify your account.
        </p>
        <Button>Resend email</Button>
      </div>
    );
  }
  const signup = async (id: string, password: string) => {
    try {
      const data = await fetch("http://localhost:7000/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, token }),
      });
      const jsonData = await data.json();
      console.log(jsonData, "link");
      if (!data.ok) {
        throw new Error();
      }
      toast.success("Амжилттай нэвтэрлээ!");
      console.log("Login successful:", jsonData);
      router.push("/login");
    } catch (error) {
      toast.error("Нэвтрэхэд алдаа гарлаа!");
      console.error("Error signing in:", error);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    signup(values.password, token!);
  }
  return (
    <div className="w-[1300px] flex gap-10 m-auto items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[24px]">Reset password</FormLabel>
                {/* <p className="text-[16px]">reset</p> */}
                <FormControl>
                  <Input
                    type="password"
                    placeholder="enter your password"
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
            name="confirm"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="confirm password"
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
