import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (button) => {
    if (button === "C") {
      setCalVal("");
    } else if (button === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newvalueDisplayed = calVal + button;
      setCalVal(newvalueDisplayed);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
