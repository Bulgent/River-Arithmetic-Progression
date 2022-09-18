import './App.css';
import { useState } from 'react';

function App() {
  const [depthList, setDepthList] = useState([]);
  const [speedList, setSpeedList] = useState([]);
  const [isCalculate, setIsCalculate] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>River Arithmetic Progression</h1>

        <div className="flatArrangement contentMargin">
          <input type="number" className="riverLength" id="start"></input>cm
          <div className = "letter">~</div>
          <input type="number" className="riverLength" id="end"></input>cm
        </div>

        <div className="flatArrangement contentMargin">
          <div className = "letter">Division Number:</div>
          <input type="number" className="riverDivision" id="division"></input>
        </div>

        <button id="buttonCalculate" onClick={calculate} >Calculate !!</button>

        {/*動的に生成*/}
        <div className='flatArrangement'>
          <div class = "calculatedArrangement">
            <div className='contentName'>
              {
                (()=>{
                  if(isCalculate){
                    return("Depth Points");
                  }else{
                    return("");
                  }
                })()
              }
            </div>
            <div id="depthBody" className='contentMargin'>
              {depthList.map((value) =>(
                <div className="calculatedContent depthColor">{value}</div>
              ))}
            </div>
          </div>
          <div>
            <div className='contentName'>
              {
                (()=>{
                  if(isCalculate){
                    return("Speed Points");
                  }else{
                    return("");
                  }
                })()
              }
            </div>
            <div id="speedBody" className='contentMargin'>
              {speedList.map((value) =>(
                <div className="calculatedContent speedColor">{value}</div>
              ))}
            </div>
          </div>
        </div>

      </header>
    </div>
  );

  function calculate() {
    const start = parseFloat(document.getElementById("start").value);
    const end = parseFloat(document.getElementById("end").value);
    const division = parseFloat(document.getElementById("division").value);
    let lst_depth=[];
    let lst_speed=[];
    const tolerance = (end-start)/division;
    
    let value;
    for(let i=0; i<=division; i++){
        value = start + tolerance * i;
        lst_depth.push(Math.round(value*10)/10);
    }
    for(let i=0; i<division; i++){
      value = start + tolerance*i + tolerance/2;
      lst_speed.push(Math.round(value*10)/10);
    }
    setDepthList(lst_depth)
    setSpeedList(lst_speed)
    if(lst_depth.length){
      setIsCalculate(true)
    }else{
      setIsCalculate(false)
    }
    }
}


export default App;
