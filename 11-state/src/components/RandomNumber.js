import {useState} from "react";
import generateRandomNumber from "../utils/generateRandomNumber";

function RandomNumber({maxNum}) {
  const [randomNum, setRandomNumber] = useState(generateRandomNumber(maxNum))
  const changeRandomNum = () => {
    setRandomNumber(generateRandomNumber(maxNum))
  }

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate random number</button>
    </div>
  )
}

export default RandomNumber
