export const Register = () => {
  return (
    <div className="w-[416px] h-[288px]">
      <img src="/chevron-left.png" alt="" />
      <h1 className="h-[32px] text-[24px]">Create your account</h1>
      <p className="text-[16px]">Sign up to explore your favorite dishes</p>
      <input type="text" placeholder="Enter your email address" />
      <p className="bg-[#FAFAFA] text-[14px]">Let`s Go</p>
      <div className="flex gap-3">
        <p className="text-[16px]">Already have an account?</p>
        <button>Log in</button>
      </div>
    </div>
  );
};
