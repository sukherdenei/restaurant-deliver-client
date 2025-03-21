import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { z } from "zod";

export default function ThirdPage({
  mail,
  password,
}: {
  mail: string;
  password: string;
}) {
  const formSchema = z.object({
    password: z
      .string()
      .min(6, "minimum 6 characters password")
      .max(8, "maximum 8 characters password"),

    confirm: z.string(),
  });

  const addUser = async (email: string, password: string) => {
    try {
      const user = await fetch("http://localhost:7000/auth/signIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!user.ok) {
        throw new Error("error");
      }
      const data = await user.json();
      // next();
    } catch (error) {
      console.log(error);
    }
  };

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   console.log(values);
  //   addUser(mail, values.password);
  //   next();
  // }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    addUser(values.password, values.confirm);
  }
  return (
    <div className="w-[1200px] flex gap-10 m-auto items-center">
      <div className="flex flex-col gap-6 w-[416px] h-[288px] p-10">
        <img src="/chevron-left.png" alt="" className="w-[16px] h-[16px]" />
        <div className="h-[60px]">
          <h1 className="h-[32px] text-[24px]">Sign in</h1>
          <p className="text-[16px]">Sign up to explore your favorite dishes</p>
        </div>
        <div className="h-[36px] rounded-lg border-[1px] border-s-stone-400">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="h-[36px] border-black outline-blue-700 w-[100%] p-2
"
          />
        </div>
        <Button className="bg-[silver] rounded-sm text-[14px] py-[4.5px]">
          Let's Go
        </Button>
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
    </div>
  );
}
