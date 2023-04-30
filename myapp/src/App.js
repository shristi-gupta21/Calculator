import React from "react";
// import { useState } from "react";
// const ReactDOM = require('react-dom');
// import { default as React } from "https://cdn.skypack.dev/react@15.4.2";
// import { default as ReactDOM } from "https://cdn.skypack.dev/react-dom@15.4.2";
function App() {
  const [value, setValue] = React.useState("");
  const [displayValue, setDisplayValue] = React.useState("");
  const [onClickEqual, setOnClickEqual] = React.useState(false);
  const [ans, setAns] = React.useState("");
  const [onClickDecimal, setOnClickDecimal] = React.useState(false);
  const [onClickZero, setOnClickZero] = React.useState(false);
  const [temp, setTemp] = React.useState("");
  const [isOperatorsConse, setIsOperatorsConse] = React.useState(false);

  const onClickBtns = (e) => {
    let str = "";
    str = displayValue + value;
    if (/^0*$/.test(str)) {
      setOnClickZero(true);
    }

    if (value !== "0" && e.target.value !== 0) {
      setOnClickZero(false);
    }
    if (
      e.target.value !== "+" &&
      e.target.value !== "-" &&
      e.target.value !== "*" &&
      e.target.value !== "/"
    ) {
      console.log("numbers");
      setTemp(temp + e.target.value);
      setValue(e.target.value);
    } else {
      setValue(e.target.value);
      setTemp("");
    }
    if (e.target.value === "=") {
      if (isOperatorsConse) {
        var filtered = str.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join("");
        var sum = eval(filtered);
        console.log("filtered", filtered, "sum", sum);
        setAns(sum);
        setOnClickEqual(true);
        setValue(str[str.length - 1] + "=" + sum);
        setTemp("");
      } else {
        str.replace("=", "");
        let ans = eval(str);
        setAns(ans);
        setOnClickEqual(true);
        setValue(str[str.length - 1] + "=" + ans);
        setTemp("");
      }
    } else {
      onShowValues();
      setOnClickEqual(false);
      setValue(e.target.value);
    }

    if (onClickEqual) {
      setDisplayValue("");
      setOnClickDecimal(false);
    }

    if (e.target.value === ".") {
      setOnClickDecimal(true);
    } else if (
      e.target.value === "+" ||
      e.target.value === "-" ||
      e.target.value === "*" ||
      e.target.value === "/"
    ) {
      if (
        (str[str.length - 1] === "+" ||
          str[str.length - 1] === "*" ||
          str[str.length - 1] === "/" ||
          str[str.length - 1] === "-") &&
        (e.target.value === "+" ||
          e.target.value === "*" ||
          e.target.value === "/" ||
          e.target.value === "-")
      ) {
        setIsOperatorsConse(true);
      }
      setOnClickDecimal(false);
    }
    if (
      onClickEqual &&
      (e.target.value === "+" ||
        e.target.value === "*" ||
        e.target.value === "/" ||
        e.target.value === "-")
    ) {
      setTemp(ans + e.target.value);
      setValue(ans + e.target.value);
    }
    if (onClickZero) {
      console.log("tem================");
    }
  };

  console.log("value =", value, "temp => " + temp, "ans ", ans);
  const clear = () => {
    setValue("");
    setTemp("");
    setDisplayValue("");
    setOnClickDecimal(false);
  };

  const onShowValues = () => {
    setDisplayValue(displayValue + value);
  };

  return (
    <div className="cntnr">
      <div className="calculator">
        <div className="show-value">
          <div className="input-state">
            {onClickZero
              ? 0
              : displayValue === ""
              ? displayValue
              : displayValue + value}
          </div>
          <div className="show-output" id="display">
            {" "}
            {value === "" ? 0 : onClickEqual ? ans : onClickZero ? value : temp}
          </div>
        </div>
        <div className="keys">
          <button className="AC" onClick={clear} value={"AC"} id="clear">
            {/* <span>AC</span> */}
            AC
          </button>
          <button id="divide" onClick={(e) => onClickBtns(e)} value={"/"}>
            /
          </button>
          <button id="multiply" onClick={(e) => onClickBtns(e)} value={"*"}>
            *
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
            disabled={onClickZero}
          >
            0
          </button>

          <button
            id="decimal"
            onClick={(e) => onClickBtns(e)}
            value={"."}
            disabled={onClickDecimal}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

// ReactDOM.render(<App/>, document.getElementById('root'));

export default App;
