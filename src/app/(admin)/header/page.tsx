export default function Home() {
  return (
    <div className="flex w-[full] h-[68px] bg-black justify-between items-center p-3 px-24">
      <div className="flex gap-3 items-center">
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
      <div className="flex gap-3">
        <button className="rounded-2xl text-black bg-white w-[75px] h-[36px]">
          Sign up
        </button>
        <button className="bg-red-600 rounded-2xl w-[75px] h-[36px]">
          Log in
        </button>
      </div>
    </div>
  );
}
