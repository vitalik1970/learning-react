import  { useState, useRef } from 'react';
import './index.css'



export default function Compon() {
    const [ytcenko, setYtcenko] = useState(0);
    const [active, setActive] = useState(false);
    const [activ, setActiv] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleBtn = () => {
        setActive(!active);
      };

    const  namber = () => {
        setYtcenko(ytcenko + 1);
    };

    const blockIconClick = () => {
        setActiv(!activ);
      };
      const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
      };
    
  return (
    <div>
      <h1>{ytcenko}</h1>
      <button onClick={namber}>namber</button>
    <button onClick={toggleBtn}> Проявление блока</button>
    <div className={`block ${active ? 'active' : ''}`}>Привед медвед</div>
    <label htmlFor="">
    <input type="text" value={inputValue}  onChange={handleInputChange} placeholder="Введи что нибудь" />Ввод
    <h2>{inputValue}</h2>
           </label>
    <div onClick={blockIconClick} className={`block-icon ${activ ? 'rotated' : ''}`}></div>
    </div>
  )
}
