import Image from "next/image";
import { Toggle } from "@/components/ui/toggle";
import Link from "next/link";

export const Sidebarr = () => {
  return (
    <div className="flex w-[205px] items-center gap-10 flex-col border-[1px] h-[100vh]">
      <Link href={"http://localhost:3000/home"}>
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
            <h1>NomNom</h1>
            <p>Swift delivery</p>
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-[8px]">
        <Link href={"/dishes"}>
          <Toggle className="h-[40px] w-[165px] hover:bg-black hover:text-white">
            <Image src="/Dashboard Icon.svg" alt="" width={0} height={0} />
            Food menu
          </Toggle>
        </Link>
        <Toggle className="h-[40px] hover:bg-black hover:text-white">
          <Image width={0} height={0} src="/Vector.svg" alt="" />
          Orders
        </Toggle>
        <Toggle className="h-[40px] hover:text-white hover:bg-black">
          <Image width={0} height={0} src="/Settings Icon.svg" alt="" />
          Settings
        </Toggle>
      </div>
    </div>
  );
};
