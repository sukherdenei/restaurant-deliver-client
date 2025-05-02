import Image from "next/image";
import { Toggle } from "@/components/ui/toggle";

export const NomNom = () => {
  return (
    <div className="flex w-[205px] items-center gap-10 flex-col border-[1px] h-[100vh]">
      <div className="flex gap-2 w-[165px] h-[44px] mt-[36px]">
        <div className="">
          <Image
            width={40}
            height={40}
            src="/Logo.svg"
            className="w-[40px] h-[40px]"
            alt=""
          />
        </div>
        <div className="">
          <h1>NomNOm</h1>
          <p>Swift delivery</p>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <Toggle className="h-[40px] w-[165px]">
          <Image width={0} height={0} src="/Dashboard Icon.svg" alt="" />
          Food menu
        </Toggle>
        <Toggle className="h-[40px]">
          <Image width={0} height={0} src="/Vector.svg" alt="" />
          Orders
        </Toggle>
        <Toggle className="h-[40px]">
          <Image width={0} height={0} src="/Settings Icon.svg" alt="" />
          Settings
        </Toggle>
      </div>
    </div>
  );
};
