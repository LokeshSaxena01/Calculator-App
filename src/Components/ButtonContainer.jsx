import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const buttonContainer = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "=",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonContainer.map((button) => (
        <button className={styles.button} onClick={() => onButtonClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
