
import './App.css';
import { useState } from 'react';
import InputBox from './components/input';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operator = ['/', '*', '+', '-', '.'];
  const handleClick = val => {
    if (operator.includes(val) && calc === '' ||
      operator.includes(val) && operator.includes(calc.slice(-1))) {
      return;
    }
   setCalc(calc + val);
    //event.preventDefault();
   if(!operator.includes(val)){
    setResult(eval(calc + val))
   }

  };

  const handleAC = () => {
    setCalc('');
    setResult('');
  }
  const backspace = (val) => {
  
    if(calc ==''){
      return;
    }
    //const val =  event.target.innerText;
    setCalc(calc.slice(0, -1))

  }
  const calculate = () => {
    try {
      setCalc(eval(calc))
    }
    catch {
      setCalc("Error")
    }
  }

  return (
    <div className="App">
      <div className='outer-box'>
        <InputBox numm={calc} res={result} />

        <div className='keypad'>
          <table>
            <tbody>
              <tr className='box'>
                <th onClick={handleAC}>AC</th>
                <th onClick={backspace}>⌫</th>
                <th onClick={() => handleClick('%')}>%</th>
                <td onClick={() => handleClick('/')}>/</td>
              </tr>
              <tr className='box'>
                <th onClick={() => handleClick('7')} >7</th>
                <th onClick={() => handleClick('8')}>8</th>
                <th onClick={() => handleClick('9')}>9</th>
                <td onClick={() => handleClick('*')}>*</td>
              </tr>

              <tr className='box'>
                <th onClick={() => handleClick('4')}>4</th>
                <th onClick={() => handleClick('5')}>5</th>
                <th onClick={() => handleClick('6')}>6</th>
                <td onClick={() => handleClick('+')}>+</td>
              </tr>
              <tr className='box'>
                <th onClick={() => handleClick('1')}>1</th>
                <th onClick={() => handleClick('2')}>2</th>
                <th onClick={() => handleClick('3')}>3</th>
                <td onClick={() => handleClick('-')}>-</td>
              </tr>
              <tr className='box'>
                <th colSpan="2" onClick={() => handleClick('0')}>0</th>
                <th onClick={() => handleClick('.')}>.</th>
                <td onClick={calculate}>=</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default App;
