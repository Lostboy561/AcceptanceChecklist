import React from 'react';
import './mx.styles.css';


export class Mx extends React.Component {

    render(){
        return(
            <div className="mainMx">

            <h1 className="mxheader">Maintenance Write Ups:           
            </h1>

            <form className="writeups">
            <label>Open Mx Write Ups:
              <select className="button">
                 <option value="no">No</option>
                <option value="yes">Yes</option>
                </select>
                </label>
            </form>   
            
            <form className="number">
            <label>Number of Mx Write Up:
                <select className="button">
                    <option value="one">One</option>
                    <option value="two">Two</option> 
                    <option value="three">Three</option> 
                    <option value="more">More than Three</option>    
                </select>
            </label>
            </form>
            
            <form className="limiting">
                <label>Most Limiting MEL DATE:
                <input className="button" type="text" placeholder="10/24/2021"></input>
                </label>
            </form>
            

            </div>

        )
    };
}