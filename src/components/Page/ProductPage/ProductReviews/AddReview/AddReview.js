import Axios from "axios";
import React, { useContext } from "react";
import { useImmer } from "use-immer";
import StateContext from "../../../../../reducer/StateContext";
import Input from "../../../../_reusable/Input/Input";
import AddReviewStars from "./AddReviewStars/AddReviewStars";

export default function AddReview({ productId }) {
  const appState = useContext(StateContext);

  const [state, setState] = useImmer({
    rate: 0,
    text: "",
  });

  function changeHandler(name, value) {
    setState((draft) => {
      draft[name] = value;
    });
  }

  function submitHandler() {
    Axios.post(`/reviews/${productId}`, {
      text: state.text,
      rate: state.rate,
      created_by: { username: appState.user.token },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="add-review">
      <AddReviewStars />
      <Input name="text" label="Review" type="textarea" value={state.text} onChange={changeHandler} />
      <div className="submit-button" onClick={submitHandler}>
        Save review
      </div>
    </div>
  );
}
