import React from "react";
import { useDispatch } from "react-redux";
import { add_digit } from "../../../redux/calculateSlice";

export default function DigitButton(props) {
  let { digit } = props;
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(add_digit({ digit }))}>{digit}</button>
  );
}
