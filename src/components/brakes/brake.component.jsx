import React from 'react';
import './brakes.style.css';

export class Brakes extends React.Component {
    render(){
        return (

            <div className="mainBrakeDiv">    
            <h1 className="header1">Brake Wear Indicators:</h1>                 
                <form className="brakes">                 
                <label style={{fontSize: 27}}>Pick Brake Condition: 
                <br></br>               
                  <select className="inputTag">
                    <option value="good">Good</option>
                    <option value="medium">Medium</option>
                    <option value="soon">Soon or Close to Replacement</option>
                  </select>
                </label>
             </form>
            </div>
        )
    }

};