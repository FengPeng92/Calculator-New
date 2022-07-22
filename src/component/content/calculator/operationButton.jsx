import React from "react";
import { choose_operation } from "../../../redux/calculateSlice";
import { useDispatch } from "react-redux";

export default function OperationButton(props) {
  let { operation } = props;
  let dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(choose_operation({ operation }));
      }}
    >
      {operation}
    </button>
  );
}
