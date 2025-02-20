export default function Home() {
  return (
    <div className="bg-[#404040]">
      <div className="flex justify-between bg-black px-20 h-[68px]">
        <div className="flex gap-3 p-2">
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
        <div className="flex gap-[8px] items-center">
          <input
            type="search"
            placeholder="Delivery address"
            className="w-[251px] h-[36px] rounded-2xl flex p-2"
          />
          <img src="/shoppingButton.svg" alt="" className="w-[36px] h-[36px]" />
          <img
            src="/user.png"
            alt=""
            className="w-[36px] h-[36px] fill-red-500"
          />
        </div>
      </div>
      <div className="w-[1440px] h-[176px] m-auto text-[18px] text-white">
        <div>
          <h1 className="text-[30px]">Categories</h1>
        </div>
        <div className="flex gap-[10px] justify-between">
          <img src="/leftButton.svg" alt="" />
          <button className="text-black p-1 bg-white rounded-full">
            Appetizers
          </button>
          <button className="text-black p-1 bg-white rounded-full">
            Salads
          </button>
          <button className="text-black p-1 bg-white rounded-full">
            Pizzas
          </button>
          <button className="text-black p-1 bg-white rounded-full">
            Lunch favorites
          </button>
          <button className="text-black p-1 bg-white rounded-full">
            Main dishes
          </button>
          <button className="text-black p-1 bg-white rounded-full">
            Fish & Sea foods
          </button>
          <button className="text-black p-1 bg-white rounded-full">
            Side dish
          </button>
          <button className="text-black p-1 bg-white rounded-full">
            Brunch
          </button>
          <button className="text-black p-1 bg-white rounded-full">
            Desserts
          </button>
          <img src="/rightButton.png" alt="" />
        </div>
      </div>
      <div>
        <h2>Appetizers</h2>
        <div className="w-[397.33px] h-[342px] items-center justify-center flex bg-white rounded-xl flex-col relative">
          <p className="absolute top-[180px] right-8 bg-white rounded-full w-[44px] h-[44px] items-center justify-center flex">
            +
          </p>
          <img
            src="/pizzaboy.png"
            alt=""
            className="w-[365.33px] h-[210px] rounded-xl"
          />
          <div className="w-[365.33px] h-[80px]">
            <div className="flex gap-2 justify-between">
              <h2 className="text-red-500 text-[24px]">Finger food</h2>
              <p className="text-[18px]">12.99$</p>
            </div>
            <p className="text-[14px]">
              Fluffy pancakes stacked with fruits, cream, syrup and powdered
              sugar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
