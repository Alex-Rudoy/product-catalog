import Axios from "axios";
import React, { useContext } from "react";
import { useImmer } from "use-immer";
import DispatchContext from "../../../reducer/DispatchContext";
import Input from "../../_reusable/Input/Input";
import AuthModal from "../AuthModal";

export default function Login() {
  const appDispatch = useContext(DispatchContext);

  const [state, setState] = useImmer({
    username: "",
    password: "",
    error: false,
    errorMessage: "",
  });

  function changeHandler(name, value) {
    setState((draft) => {
      draft[name] = value;
    });
  }

  function submitHandler() {
    Axios.post("/login/", { username: state.username, password: state.password })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          appDispatch({ type: "login", username: state.username, token: response.data.token });
        } else {
          setState((draft) => {
            draft.error = true;
            draft.errorMessage = response.data.message;
          });
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <AuthModal tab="login">
      <Input name="username" label="Username" type="input" value={state.login} onChange={changeHandler} />
      <Input name="password" label="Password" type="password" value={state.password} onChange={changeHandler} />
      <div className="submit-button" onClick={submitHandler}>
        Login
      </div>
      {state.error ? <p className="error-message">{state.errorMessage}</p> : ""}
    </AuthModal>
  );
}
