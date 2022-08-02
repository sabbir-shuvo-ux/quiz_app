import loginImg from "../../assets/img/login.svg";
import Illustration from "../Illustration";
import Loginform from "../Logingform";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div class="column">
        <Illustration img={loginImg} />

        <Loginform />
      </div>
    </>
  );
}
