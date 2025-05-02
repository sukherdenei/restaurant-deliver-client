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
import { Dispatch } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

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
  // const signin = async (email: string, password: string) => {
  //   try {
  //     const data = await fetch("http://localhost:7000/auth/signIn", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });
  //     const jsonData = await data.json();
  //     console.log(jsonData, "link");
  //     if (!data.ok) {
  //       throw new Error();
  //     }
  //     toast.success("Амжилттай нэвтэрлээ!");
  //     console.log("Login successful:", jsonData);
  //     router.push("/home");
  //   } catch (error) {
  //     toast.error("Нэвтрэхэд алдаа гарлаа!");
  //     console.error("Error signing in:", error);
  //   }
  // };
  const signin = async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:7000/auth/signIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Check if the response is ok
      if (!response.ok) {
        // Handle non-OK responses, e.g., 400, 500, etc.
        const errorData = await response.json();
        throw new Error(
          errorData.message || "An error occurred while signing in"
        );
      }

      const jsonData = await response.json();
      console.log(jsonData, "link");

      toast.success("Амжилттай нэвтэрлээ!");
      console.log("Login successful:", jsonData);

      // Assuming you have a router and it's using a hook to redirect
      router.push("/home");
    } catch (error) {
      // Catch both the response errors and any network errors
      toast.error(`Нэвтрэхэд алдаа гарлаа!`);
      console.error("Error signing in:", error);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    signin(values.email, values.password);
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
      <div className="flex gap-5">
        <Link href="/reset-password-request">
          <Button>Reset password</Button>
        </Link>
        <Link href={"http://localhost:3000/"}>
          <Button>Sign Up</Button>
        </Link>
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
    </div>
  );
}
