import { Step1 } from "./Step1";
import { Step2 } from "./Step2";

export default function page() {
  const Steps = [Step1, Step2][0];
  return (
    <div>
      <Steps />
    </div>
  );
}
