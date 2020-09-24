import React from "react";
import { useImmer } from "use-immer";
import Input from "../../_reusable/Input/Input";
import AuthModal from "../AuthModal";

export default function Login() {
  const [state, setState] = useImmer({
    login: "",
    password: "",
  });

  function changeHandler(name, value) {
    setState((draft) => {
      draft[name] = value;
    });
  }

  function submitHandler() {}

  return (
    <AuthModal tab="login">
      <form method="POST" onSubmit={submitHandler}>
        <Input name="login" label="Login" type="input" value={state.login} onChange={changeHandler} />
        <Input name="password" label="Password" type="password" value={state.password} onChange={changeHandler} />
        <input type="submit" className="button" value="Login" />
      </form>
    </AuthModal>
  );
}
