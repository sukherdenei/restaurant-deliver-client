import { FacebookIcon, InstagramIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full bg-black flex flex-col py-10 gap-20">
      <div className="flex w-[full] gap-8 h-[92px] bg-red-600 text-white items-center justify-center">
        {Array.from(Array(5)).map((_: any, index: any) => {
          return (
            <div key={index} className="h-[36px] text-[30px]">
              {"Fresh fast delivered "}
            </div>
          );
        })}
      </div>
      <div className="bg-black h-[255px] flex w-[1264px] gap-[220px] m-auto ">
        <div className="flex gap-3 items-start flex-col">
          <div>
            <img src="/Traced.png" alt="" className="w-[46px] h-[37px]" />
          </div>
          <div>
            <div className="flex">
              <h2 className="text-white">Nom</h2>
              <h2 className="text-red-600">Nom</h2>
            </div>
            <div>
              <p className="text-white">Swift delivery</p>
            </div>
          </div>
        </div>
        <div className="text-white flex w-[788px] h-[228px] gap-[90px]">
          <div className="flex flex-col">
            <h2>NOMNOM</h2>
            <p>Home</p>
            <p>Contact us</p>
            <p>Delivery zone</p>
          </div>
          <div>
            <h2>MENU</h2>
            <p>Appetizers</p>
            <p>Salads</p>
            <p>Pizzas</p>
            <p>Lunch favorites</p>
            <p>Main dishes</p>
          </div>
          <div>
            <h2></h2>
            <p>Side dish</p>
            <p>Brunch</p>
            <p>Desserts</p>
            <p>Beverages</p>
            <p>Fish & Sea foods</p>
          </div>
          <div>
            <h2>FOLLOW US</h2>
            <div className="flex gap-4 p-3">
              <FacebookIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[1264px] text-slate-400 m-auto border-t-[0.5px] h-32">
        <div className="text-[#71717A] flex gap-[48px]">
          <p>Copy right 2024</p>
          <p>©Nomnom LLC</p>
          <p>Privacy policy</p>
          <p>Terms and condition</p>
          <p>Cookie policy</p>
        </div>
      </div>
    </div>
  );
}
