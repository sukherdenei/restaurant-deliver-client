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
import { Dispatch, useState } from "react";

export default function Firstpage({
  next,
  setmail,
}: {
  next: () => void;
  setmail: Dispatch<string>;
}) {
  const formSchema = z.object({
    email: z.string().email({ message: "email pls" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setmail(values.email);
    next();
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
                    placeholder="Enter your email address"
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
            <Button
              type="submit"
              onChange={next}
              className="w-[416px] h-[36px]"
            >
              Let's Go
            </Button>
          </div>
          {/* <div className="flex gap-5">
            <p>Already have an account</p>
            <Button onClick={"http://localhost:7000/auth/signIn"}>
              Log in
            </Button>
          </div> */}
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
