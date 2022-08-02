import signupImg from "../../assets/img/signup.svg";
import Illustration from "../Illustration";
import Signupform from "../Signupform";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration img={signupImg} />
        <Signupform />
      </div>
    </>
  );
}
