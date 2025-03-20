"use client";
import { useState } from "react";
import Firstpage from "@/app/(user)/login/signup/Firstpage";
import Secondpage from "@/app/(user)/login/signup/Secondpage";
import ThirdPage from "@/app/(user)/login/signup/Thirdpage";

export default function Page() {
  const [current, setCurrent] = useState<number>(0);
  const Formstep = [Firstpage, Secondpage, ThirdPage][current];
  const [mail, setmail] = useState("");
  const next = () => {
    setCurrent(current + 1);
  };
  return (
    <div>
      <Formstep next={next} mail={mail} setmail={setmail} />
    </div>
  );
}
