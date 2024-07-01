import React, {useState} from 'react'

const Backgroundchange = () => {

        const[color, setcolor] = useState("white")
    
        const handleButton = (bgcolor) =>{
            setcolor(bgcolor)
        }

  return (
    <div>
        <div className='backgroundchangeheading'>
            <h2>Background color change<br/><h5>(click here to change background color)</h5></h2>
        </div>
      <div className='bgbutton' style={{ backgroundColor: color, height: "100vh" }}>
        <button type="button" class="btn btn-danger" onClick={() => handleButton("red")}>red</button>
        <button type="button" class="btn btn-warning" onClick={() => handleButton("yellow")}>yellow</button>
        <button type="button" class="btn btn-success" onClick={() => handleButton("green")}>green</button>
        <button type="button" class="btn btn-primary" onClick={() => handleButton("blue")}>blue</button>
        <button type="button" class="btn btn-dark" onClick={() => handleButton("black")}>black</button>
      </div>
    </div>
   
  );
};

export default Backgroundchange;
