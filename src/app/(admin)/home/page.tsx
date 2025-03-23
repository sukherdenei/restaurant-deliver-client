import Image from "next/image";
import Footer from "../footer/page";

export default function Home() {
  return (
    <div className="bg-[#404040]">
      <div className="flex justify-between bg-black px-20 h-[68px]">
        <div className="flex gap-3 p-2">
          <div>
            <Image
              width={46}
              height={37}
              src="/Traced.png"
              alt=""
              className="w-[46px] h-[37px]"
            />
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
        <div className="flex gap-[8px] items-center">
          <input
            type="search"
            placeholder="Delivery address"
            className="w-[251px] h-[36px] rounded-2xl flex p-2 outline-none"
          />
          <Image
            width={2}
            height={1}
            src="/shoppingButton.svg"
            alt=""
            className="w-[36px] h-[36px]"
          />
          <Image
            width={0}
            height={0}
            src="/user.png"
            alt=""
            className="w-[36px] h-[36px] fill-red-500"
          />
        </div>
      </div>

      <div className="w-[1440px] bg-red-500 flex">
        <Image
          width={1440}
          height={570}
          src="/BG.png"
          alt=""
          className="w-full h-[570px]"
        />
      </div>

      <div className="w-[1440px] h-[176px] m-auto text-[18px] text-white flex flex-col pt-[8px] pr-[48px] pb-[8px] pl-[48px] gap-8">
        <div className="">
          <h1 className="text-[30px]">Categories</h1>
        </div>
        <div className="flex gap-[10px] h-[176px] items-center">
          <Image
            width={0}
            height={0}
            src="/leftButton.svg"
            alt=""
            className="w-[40px] h-[40px]"
          />
          <button className="text-black bg-white rounded-full hover:bg-[#EF4444] w-[132px] h-[36px] text-[18px] hover:text-white">
            Appetizers
          </button>
          <button className="text-black bg-white rounded-full hover:bg-[#EF4444] w-[102px] h-[36px] text-[18px] hover:text-white">
            Salads
          </button>
          <button className="text-black bg-white rounded-full hover:bg-[#EF4444] w-[102px] h-[36px] text-[18px] hover:text-white">
            Pizzas
          </button>
          <button className="text-black bg-white rounded-full hover:bg-[#EF4444] w-[171px] h-[36px] text-[18px] hover:text-white">
            Lunch favorites
          </button>
          <button className="text-black bg-white rounded-full hover:bg-[#EF4444] w-[132px] h-[36px] text-[18px] hover:text-white">
            Main dishes
          </button>
          <button className="text-black bg-white rounded-full hover:bg-[#EF4444] w-[182px] h-[36px] text-[18px] hover:text-white">
            Fish & Sea foods
          </button>
          <button className="text-black bg-white rounded-full hover:bg-[#EF4444] w-[132px] h-[36px] text-[18px] hover:text-white">
            Side dish
          </button>
          <button className="text-black bg-white rounded-full hover:bg-[#EF4444] w-[101px] h-[36px] text-[18px] hover:text-white">
            Brunch
          </button>
          <button className="text-black bg-white rounded-full hover:bg-[#EF4444] w-[102px] h-[36px] text-[18px] hover:text-white">
            Desserts
          </button>
          <Image
            width={0}
            height={0}
            src="/IconrightButton.svg"
            alt=""
            className="w-[40px] h-[40px]"
          />
        </div>
      </div>
      <div className="w-[1264px] m-auto flex flex-col">
        <div className="mb-10">
          <h2 className="text-[30px] text-white">Appetizers</h2>
        </div>
        <div className="w-[397.33px] h-[342px] items-center justify-center flex flex-col bg-white rounded-xl relative">
          <p className="absolute top-[180px] right-8 bg-white rounded-full w-[44px] h-[44px] items-center justify-center flex">
            +
          </p>
          <div>
            <Image
              width={365}
              height={210}
              src="/pizzaboy.png"
              alt=""
              className="w-[365.33px] h-[210px] rounded-xl"
            />
          </div>
          <div className="w-[365.33px] h-[80px] flex flex-col gap-3">
            <div className="flex gap-2 justify-between h-[32px]">
              <h2 className="text-red-500 text-[24px]">Finger food</h2>
              <p className="text-[18px]">12.99$</p>
            </div>
            <p className="text-[14px] h-[40px]">
              Fluffy pancakes stacked with fruits, cream, syrup and powdered
              sugar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
