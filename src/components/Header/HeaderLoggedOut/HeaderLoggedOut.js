import React, { useContext } from "react";
import DispatchContext from "../../../reducer/DispatchContext";
import Button from "../../_reusable/Button/Button";

export default function HeaderLoggedOut() {
  const appDispatch = useContext(DispatchContext);

  function showLoginModal() {
    appDispatch({ type: "showLoginModal" });
  }

  function showRegisterModal() {
    appDispatch({ type: "showRegisterModal" });
  }

  return (
    <div>
      <Button type="primary" size="small" text="Login" onClick={showLoginModal} />
      <Button type="secondary" size="small" text="Register" onClick={showRegisterModal} />
    </div>
  );
}
