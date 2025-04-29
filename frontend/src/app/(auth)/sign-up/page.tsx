import { useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";

export default function page() {
  const [count,setCount]=useState(0)

  const Steps = [Step1, Step2][count];
  return (
    <div>
      <Steps />
    </div>
  );
}
