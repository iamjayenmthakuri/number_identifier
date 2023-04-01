import { useReducer, useRef } from "react";

const reducer = (
  state: { inputRef: number; showText: any },
  action: { type: any }
) => {
  switch (action.type) {
    case "toggleShowText":
      return { inputRef: state.inputRef, showText: state.showText };
    default:
      return state;
  }
};

function App() {
  const inputRef = useRef(0);
  inputRef.current.focus();

  const [state, dispatch] = useReducer(reducer, {
    inputRef: 0,
    showText: "null",
  });

  return (
    <>
      <h1>Please enter number here !! </h1>
      <input type="number" placeholder="Ex....1.2.3 " ref={inputRef}></input>
      <button
        onClick={() => {
          dispatch({ type: "toggleShowText" });
        }}
      >
        Identify{" "}
      </button>
      {state.showText && state.inputRef % 2 === 0 ? (
        <p>
          <span>{inputRef.current.value}</span> is a even number
        </p>
      ) : (
        <p>
          <span>{inputRef.current.value}</span> is an odd number
        </p>
      )}
    </>
  );
}
export default App;
