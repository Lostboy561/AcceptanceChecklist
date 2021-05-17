import React from 'react';
import './header.styles.componets.css';


export class Header extends React.Component{
    constructor(){
        super();

        this.state = {
            nameInput: '',
            nNumber: '',
            dayStart: ''
        }

    };
    
    handleEventInput = (e) => {
        this.setState({nameInput: e.target.value})
    };

    handleEventNumber= (e) => {
        this.setState({nNumber: e.target.value})
    };

    handleEventStart = (e) => {
        this.setState({dayStart: e.target.value})
    };
    
    render (){
        return ( 
          <div className="mainHeaderDiv">
           
            <h1 className="header">AIRCRAFT ACCEPTANCE:
               <p className="para">First Day to Plane</p>
            </h1>

            <h2 className="name">Name: <input className="box" 
                type="text"
                 onChange={this.handleEventInput}>
                {this.nameInput}
                </input>
            </h2>

            <h2 className="nNumber">N Number:
                 <input className="box" 
                type="text"
                onChange={this.handleEventNumber}>
                {this.nNumber}
                </input>
            </h2>

            <h2 className="dayStart">Date: <input className="box" 
                type="text"
                onChange={this.handleEventStart}>
                {this.dayStart}
                </input>
            </h2>
         </div>
        );
    }
}