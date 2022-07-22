import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOperand: "",
  lastOperand: "",
  operation: "",
  overwrite: false,
};

export const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    add_digit: (state, action) => {
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: action.payload.digit,
          overwrite: false,
        };
      }
      if (state.currentOperand === "0" && action.payload.digit === "0")
        return state;
      if (state.currentOperand === "0" && action.payload.digit !== ".")
        return {
          ...state,
          currentOperand: action.payload.digit,
        };
      if (action.payload.digit === "." && state.currentOperand.includes("."))
        return state;
      if (action.payload.digit === "." && state.currentOperand === "")
        return {
          ...state,
          currentOperand: "0.",
        };
      return {
        ...state,
        currentOperand: state.currentOperand + action.payload.digit,
      };
    },
    delete_digit: (state) => {
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: "",
          overwrite: false,
        };
      }
      if (state.currentOperand === "") return state;
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    },
    choose_operation: (state, action) => {
      if (state.lastOperand === "" && state.currentOperand === "") return state;
      if (state.lastOperand === "")
        return {
          ...state,
          lastOperand: state.currentOperand,
          operation: action.payload.operation,
          currentOperand: "",
        };
      if (state.currentOperand === "")
        return {
          ...state,
          operation: action.payload.operation,
        };
      return {
        ...state,
        lastOperand: evaluate(state),
        operation: action.payload.operation,
        currentOperand: "",
      };
    },
    clear: (state) => {
      return {
        ...state,
        currentOperand: "",
        lastOperand: "",
        operation: "",
      };
    },
    calculate: (state) => {
      if (
        state.currentOperand === "" ||
        state.lastOperand === "" ||
        state.operation === ""
      )
        return state;
      return {
        ...state,
        currentOperand: evaluate(state),
        lastOperand: "",
        operation: "",
        overwrite: true,
      };
    },
  },
});

const evaluate = (state) => {
  let { lastOperand, currentOperand, operation } = state;
  let last = parseFloat(lastOperand);
  let current = parseFloat(currentOperand);

  let res = 0;
  switch (operation) {
    case "+":
      res = last + current;
      break;
    case "-":
      res = last - current;
      break;
    case "*":
      res = last * current;
      break;
    case "÷":
      res = last / current;
      break;
  }
  return res.toString();
};

export const { add_digit, delete_digit, choose_operation, clear, calculate } =
  calculateSlice.actions;

export default calculateSlice.reducer;
