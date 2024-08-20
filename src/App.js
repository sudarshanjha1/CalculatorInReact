import logo from "./logo.svg";
import styles from "./App.module.css";
import Display from "./component/Display";
import ButtonContainer from "./component/ButtonContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === "ab1") {
      const result = 1 / parseFloat(calVal);
      setCalVal(result);
    } else if (buttonText === "num1") {
      const result = Math.pow(parseFloat(calVal), 2);
      setCalVal(result);
    } else if (buttonText === "CE") {
      setCalVal("");
    } else if (buttonText === "num2") {
      const result = 2 * Math.sqrt(parseFloat(calVal));
      setCalVal(result);
    } else if (buttonText === "num3") {
      const result = parseFloat(calVal) * -1;
      setCalVal(result);
    } else if (buttonText === "ab") {
      const result = calVal.slice(0, -1);
      setCalVal(result);
    }else if (buttonText === "%") {
      const percentage = parseFloat(calVal) / 100;
        setCalVal(percentage);
    }
     else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>  
      <div className={styles.calculator}>
        <div><h3 className="abc">Calculator</h3></div>
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
