import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Authcontext";
import Button from "./Button";
import Form from "./Form";
import Inputbox from "./Inputbox";

export default function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const history = useNavigate();
  const { login } = useAuth();

  async function handlesubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Something Wrong");
    }
  }

  return (
    <Form style={{ height: "330px" }} onSubmit={handlesubmit}>
      <Inputbox
        type="text"
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

      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div class="info">
        Don't have an account? <Link to="/login">login</Link> instead.
      </div>
    </Form>
  );
}
