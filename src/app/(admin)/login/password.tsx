import Image from "next/image";

export default function Password() {
  return (
    <div className="w-[1200px] flex gap-10 m-auto items-center">
      <div className="flex flex-col gap-6 w-[416px] h-[288px] p-10">
        <img src="/chevron-left.png" alt="" className="w-[16px] h-[16px]" />
        <div className="h-[60px]">
          <h1 className="h-[32px] text-[24px]">Create a strong password</h1>
          <p className="text-[16px]">
            Create a strong password with letters, numbers
          </p>
        </div>

        <input
          type="text"
          placeholder="enter your password please"
          className="h-[36px] border-black outline-blue-700 w-[100%]
"
        />
        <input
          type="text"
          placeholder="enter your confirm password pls"
          className="h-[36px] border-black outline-blue-700 w-[100%]
"
        />
        <button className="bg-[silver] rounded-sm text-[14px] py-[4.5px]">
          Let's Go
        </button>
        <div className="flex gap-2 items-center justify-center h-[24px]">
          <p className="text-[16px] h-[24px]">Already have an account?</p>
          <button className="text-[#2563EB]">Log in</button>
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
