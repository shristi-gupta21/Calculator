import { useState } from "react";
function App() {
  const [value, setValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [onClickEqual, setOnClickEqual] = useState(false);
  const [ans, setAns] = useState("");

  const onClickBtns = (e) => {
    if (e.target.value === "=") {
      let str = displayValue + value;
      str.replace("=", "");
      let ans = eval(str);
      console.log(str);
      console.log(ans);
      setAns(ans);
      setOnClickEqual(true);
    } else {
      setValue(e.target.value);
      setOnClickEqual(false);
      onShowValues();
    }
    if (e.target.value === "AC") {
      setValue("");
      setDisplayValue("");
    }
    if (onClickEqual) {
      setDisplayValue("");
    }
  };

  const onShowValues = () => {
    setDisplayValue(displayValue + value);
  };

  return (
    <div className="cntnr">
      <div className="calculator">
        <div className="show-value" id="display">
          <div className="input-state">
            {displayValue === "" ? displayValue : displayValue + value}{" "}
          </div>
          <div className="show-output">
            {" "}
            {value === "" ? 0 : onClickEqual ? ans : value}
          </div>
        </div>
        <div className="keys">
          <button
            className="AC"
            onClick={(e) => onClickBtns(e)}
            value={"AC"}
            id="clear"
          >
            {/* <span>AC</span> */}
            AC
          </button>
          <button id="divide" onClick={(e) => onClickBtns(e)} value={"/"}>
            /
          </button>
          <button id="multiply" onClick={(e) => onClickBtns(e)} value={"x"}>
            x
          </button>
          <button id="seven" onClick={(e) => onClickBtns(e)} value={"7"}>
            7
          </button>
          <button id="eight" onClick={(e) => onClickBtns(e)} value={"8"}>
            8
          </button>
          <button id="nine" onClick={(e) => onClickBtns(e)} value={"9"}>
            9
          </button>
          <button id="subtract" onClick={(e) => onClickBtns(e)} value={"-"}>
            -
          </button>
          <button id="four" onClick={(e) => onClickBtns(e)} value={"4"}>
            4
          </button>
          <button id="five" onClick={(e) => onClickBtns(e)} value={"5"}>
            5
          </button>
          <button id="six" onClick={(e) => onClickBtns(e)} value={"6"}>
            6
          </button>
          <button id="add" onClick={(e) => onClickBtns(e)} value={"+"}>
            +
          </button>
          <button id="one" onClick={(e) => onClickBtns(e)} value={"1"}>
            1
          </button>
          <button id="two" onClick={(e) => onClickBtns(e)} value={"2"}>
            2
          </button>
          <button id="three" onClick={(e) => onClickBtns(e)} value={"3"}>
            3
          </button>
          <button
            className="equals"
            id="equals"
            onClick={(e) => onClickBtns(e)}
            value={"="}
          >
            =
          </button>
          <button
            id="zero"
            className="zero"
            onClick={(e) => onClickBtns(e)}
            value={"0"}
          >
            0
          </button>

          <button id="decimal" onClick={(e) => onClickBtns(e)} value={"."}>
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
