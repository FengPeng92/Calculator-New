import React, { useState } from "react";
import Base from "./base";
import { useDispatch, useSelector } from "react-redux";
import DigitButton from "./calculator/digitButton";
import OperationButton from "./calculator/operationButton";
import { clear, delete_digit, calculate } from "../../redux/calculateSlice";

function Calculator() {
  const lastOperand = useSelector((state) => state.calculate.lastOperand);
  const operation = useSelector((state) => state.calculate.operation);
  const currentOperand = useSelector((state) => state.calculate.currentOperand);
  const dispatch = useDispatch();

  const [formatter, setFormatter] = useState(Intl.NumberFormat("en-us"));
  const format = (number) => {
    const [integer, decimal] = number.split(".");
    if (decimal === undefined) return formatter.format(integer);
    return `${formatter.format(integer)}.${decimal}`;
  };

  return (
    <Base>
      <div className="calculator">
        <div className="output">
          <div className="last-output">
            {format(lastOperand)} {operation}
          </div>
          <div className="current-output">{format(currentOperand)}</div>
        </div>
        <button className="button-ac" onClick={() => dispatch(clear())}>
          AC
        </button>
        <button onClick={() => dispatch(delete_digit())}>Del</button>
        <OperationButton operation={"÷"} />
        <DigitButton digit={"7"} />
        <DigitButton digit={"8"} />
        <DigitButton digit={"9"} />
        <OperationButton operation={"*"} />
        <DigitButton digit={"4"} />
        <DigitButton digit={"5"} />
        <DigitButton digit={"6"} />
        <OperationButton operation={"-"} />
        <DigitButton digit={"1"} />
        <DigitButton digit={"2"} />
        <DigitButton digit={"3"} />
        <OperationButton operation={"+"} />
        <DigitButton digit={"0"} />
        <DigitButton digit={"."} />
        <button className="button-equal" onClick={() => dispatch(calculate())}>
          =
        </button>
      </div>
    </Base>
  );
}

export default Calculator;
