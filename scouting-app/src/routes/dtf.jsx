import React from 'react'
import "../App.css"

export default function Dtf() {
  return (
    <div>
      <h1> Drive Team Feeder </h1>
        <h2> Alliance 1 </h2>
        <form>
          <label> Team 1 Number</label>
            <div>
                <input type="number" className="numberInput"/>
            </div>
          <label> Team 2 Number</label>
           <div>
                <input type="number" className="numberInput" />
            </div>
          <label> Team 3 Number</label>
           <div>
                <input type="number" className="numberInput"/>
            </div>
        <h2> Alliance 2 </h2>
         <label> Team 1 Number</label>
            <div>
              <input type="number" className="numberInput" />
            </div>
          <label> Team 2 Number</label>
           <div>
                <input type="number" className="numberInput"/>
          </div>
          <label> Team 3 Number</label>
           <div>
                <input type="number" className="numberInput"/>
          </div>
    </form> 
    <h3>
      <button>SUBMIT</button>
    </h3>
      </div>
  )
}
