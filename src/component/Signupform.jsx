import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Authcontext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import Inputbox from "./Inputbox";

export default function Signupform() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const history = useNavigate();
  const { signup } = useAuth();

  async function handlesubmit(e) {
    e.preventDefault();

    // do validation pass
    if (password !== confirmPass) {
      return setError("password did not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Faild to make create account");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handlesubmit}>
      <Inputbox
        type="text"
        placeholder="Enter name"
        icon="person"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Inputbox
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Inputbox
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Inputbox
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        required
        value={confirmPass}
        onChange={(e) => setConfirmPass(e.target.value)}
      />
      <Checkbox
        text="I agree to the Terms &amp; Conditions"
        value={agree}
        required
        onChange={(e) => setAgree(e.target.value)}
      />
      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div class="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
