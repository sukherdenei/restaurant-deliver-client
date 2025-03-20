"use client";
import Image from "next/image";
import { string, z } from "zod";
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

import { useRouter } from "next/navigation";

export default function Secondpage({ mail }: { mail: string }) {
  const router = useRouter();
  const next = () => router.push("/login");

  const formSchema = z.object({
    password: z
      .string()
      .min(6, "minimum 6 characters password")
      .max(8, "maximum 8 characters password"),

    confirm: z.string(),
  });

  // .refine((data) => data.password === data.confirm, {
  //   message: "Passwords don't match",
  //   path: ["confirm"],
  // });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  const addUser = async (email: string, password: string) => {
    try {
      const user = await fetch("http://localhost:7000/auth/signUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!user.ok) {
        throw new Error("error");
      }
      const data = await user.json();
      next();
    } catch (error) {
      console.log(error);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    addUser(mail, values.password);
    next();
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
                <FormLabel>Enter your password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="password"
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
                <FormLabel>Enter your password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm password"
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
