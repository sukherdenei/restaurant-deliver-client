"use client";
import { useState } from "react";
import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";

export default function Page() {
  const [current, setCurrent] = useState<number>(0);
  const Formstep = [Firstpage, Secondpage][current];
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
