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
import { useRouter } from "next/navigation";

export default function Register() {
  const [type, setType] = useState("password");
  // Маягтын шаардлага хамгийн багадаа 6 хамгий ихдээ 8
  const formSchema = z
    .object({
      username: z
        .string()
        .min(6, "Minimum 6 characters")
        .max(11, "maximum 11 characters"),
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
    alert("Registration is successful");
    // const router = useRouter();
    // const clickHandler = () => {
    //   router.push("/login");
    // };
  }

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  // const router = useRouter();
  // const clickHandler = () => {
  //   router.push("/home");
  // };

  return (
    <div className="w-[1300px] flex gap-10 m-auto items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[24px]">
                  Create your account
                </FormLabel>
                <FormDescription className="text-[16px] text-[#71717A]">
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
                <FormLabel>Enter your email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="email"
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
                <FormLabel>Enter your Password</FormLabel>
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
            <Button
              type="submit"
              // onClick={clickHandler}
              className="w-[416px] h-[36px]"
            >
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
