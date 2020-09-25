import React, { useContext } from "react";
import DispatchContext from "../../../../../reducer/DispatchContext";
import Button from "../../../../_reusable/Button/Button";

export default function ReviewsAuth() {
  const appDispatch = useContext(DispatchContext);

  function showLoginModal() {
    appDispatch({ type: "showLoginModal" });
  }

  function showRegisterModal() {
    appDispatch({ type: "showRegisterModal" });
  }

  return (
    <div className="reviews-auth">
      <h2>You must be logged in to leave a review</h2>
      <div>
        <Button type="primary" size="small" text="Login" onClick={showLoginModal} />
        <Button type="secondary" size="small" text="Register" onClick={showRegisterModal} />
      </div>
    </div>
  );
}
