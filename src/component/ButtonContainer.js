// import React from 'react'
// import styles from './Button.module.css'; 

import React from 'react';
import styles from './Button.module.css';
import Num4 from '../calimg/num3.png';
import Num2 from '../calimg/num2.png';
import Abc3 from '../calimg/abc3.png';
import Num1 from '../calimg/num1.png';
import Abc5 from '../calimg/cross.png';
const buttonImages = {
  "%": "",
  CE: "",
  C: "",
  "ab": Abc5,
  "ab1":Abc3,
  "num1":Num1,
  "num2":Num2,
  "/": "",
  7: "",
  8: "",
  9: "",
  "*": "",
  4: "",
  5: "",
  6: "",
  "-": "",
  1: "",
  2: "",
  3: "",
  "+": "",
  "num3":Num4,
  0: "",
  ".": "",
  "=": "",
};

const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = ['%', 'CE', 'C', 'ab','ab1','num1', 'num2', '/', '7', '8', '9', '*', '4', '5','6','-','1','2','3','+','num3','0','.','='];

  return (
    <div className={styles.buttoncontainer}>
      {buttonNames.map((name) => (
        <button
          key={name}
          className={styles.button}
          onClick={() => onButtonClick(name)}
        >
          {buttonImages[name] ? (
            <img src={buttonImages[name]} alt={name} className={styles.buttonImage} />
          ) : (
            name
          )}
        </button>
      ))}
    </div>
  );
};

// export default ButtonContainer;



// const ButtonContainer = ({onButtonClick}) => {
//     // const buttonName=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

//     const buttonName=['%','CE','C','*','3','4','-','5','6','*','7','8','/','=','9','0','.']
//   return (
//     <>
//     <div className={styles.buttoncontainer}>

//         {buttonName.map((buttonName) =>( 
//             <button className={styles.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>))}
//     </div>
//     </>
//   );
// };

export default ButtonContainer;
