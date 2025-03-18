import Image from "next/image";

export default function Register() {
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
            type="email"
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
    </div>
  );
}
