import Axios from "axios";
import React, { useContext } from "react";
import { useImmer } from "use-immer";
import StateContext from "../../../../../reducer/StateContext";
import Button from "../../../../_reusable/Button/Button";
import Input from "../../../../_reusable/Input/Input";
import AddReviewStars from "./AddReviewStars/AddReviewStars";

export default function AddReview({ productId, addNewReview }) {
  const appState = useContext(StateContext);

  const [state, setState] = useImmer({
    rate: "0",
    text: "",
  });

  function changeHandler(name, value) {
    setState((draft) => {
      draft[name] = value;
    });
  }

  function radioHandler(e) {
    e.persist();
    setState((draft) => {
      draft.rate = e.target.value;
    });
  }

  function submitHandler() {
    Axios.post(
      `/reviews/${productId}`,
      {
        text: state.text,
        rate: state.rate,
      },
      { headers: { Authorization: `Token ${appState.user.token}` } }
    )
      .then((response) => {
        if (response.data.success) {
          addNewReview({
            created_at: Date.now(),
            created_by: { username: appState.user.username },
            rate: state.rate,
            text: state.text,
          });
          setState((draft) => {
            draft.rate = "0";
            draft.text = "";
          });
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="add-review">
      <AddReviewStars rate={state.rate} onChange={radioHandler} />
      <Input name="text" label="Review" type="textarea" value={state.text} onChange={changeHandler} />
      <Button type="primary-blue" size="small" text="Add review" onClick={submitHandler} />
    </div>
  );
}
