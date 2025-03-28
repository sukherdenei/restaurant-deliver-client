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
import Link from "next/link";

export default function Firstpage({
  next,
  setmail,
}: {
  next: () => void;
  setmail: Dispatch<string>;
}) {
  const [registry, setRegistry] = useState();
  const formSchema = z.object({
    email: z.string().email({ message: "email pls" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const signup = async () => {
    const data = await fetch("http://localhost:7000/auth/signUp");
    const jsonData = await data.json();
    setRegistry(jsonData.newGetCategory);
    console.log(jsonData, "link");
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setmail(values.email);
    next();
    signup();
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
              onClick={signup}
              type="submit"
              onChange={next}
              className="w-[416px] h-[36px]"
            >
              Let's Go
            </Button>
          </div>
        </form>
        <div className="flex gap-5">
          <Link href="/login">
            <Button>Sign In</Button>
          </Link>
          <p>Already have an account?</p>
        </div>
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
