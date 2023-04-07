import {useState} from "react";
import './App.css';
import Counter from "./components/Counter";
import Button from "./components/Button";

const texts = [
  "text 1",
  "text 3",
  "text 6",
  "text 9",
  "hello",
  "test"
]


function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Counter countText={count}/>
      {texts.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={index}/>
      })}

      {/*      {[
        <Button text={texts[0]} onClick={incrementCount}/>,
        <Button text={texts[1]} onClick={incrementCount}/>,
        <Button text={texts[2]} onClick={incrementCount}/>,
        <Button text={texts[3]} onClick={incrementCount}/>,
        <Button text={texts[4]} onClick={incrementCount}/>,
        <Button text={texts[5]} onClick={incrementCount}/>,
      ]}*/}
    </div>
  )
}

export default App;
