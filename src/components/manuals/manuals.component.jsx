import React from 'react';
import './manuals.styles.css';
import ButtonGroup from './buttonGroup.component';


export class Manuals extends React.Component {
  
    constructor(){
        super();

        this.state ={
            manuals: true, flight: true, lights: true, NOrmal: true, abNOrmal: true, company: true,
            airworth: true, registration: true, customs: true, carrier: true, radio: true,
            operation: true, insurance: true, database: true, vor: true, wb: true, briefing: true,
            vests: true, sick: true, pitot: true, wicks: true, engine: true, logs: true, fire: true,
            scale: true, keys: true, stock: true, aid: true, hf: true,
            smoke: 1,
            oxygen: 1,
            water: 4,
            pin: true
        }      
    }


    handleInputChange = (e, name, status) => {
        e.preventDefault();
        this.setState({[name]: status});

        console.log({name: status})
    }


    
    render(){             

        return (

            <div className="mainManualDiv">

            <h1 className="manHeader">Manuals:</h1>
 
            <ButtonGroup
                group='manuals'
                condition={this.state.manuals}  
                handleInputChange={this.handleInputChange} 
                title="Avionic Manual(s):"
            />
            
            <ButtonGroup
                group="flight"
                condition={this.state.flight}  
                handleInputChange={this.handleInputChange} 
                title="Airplane Flight Manual:"
             />

             <ButtonGroup
                group="operation"
                condition={this.state.operation}  
                handleInputChange={this.handleInputChange} 
                title="Operation Manual:"
            />

            <form className="radios group">
                <div className="centerLabel">
                    <label>Smoke Goggles Servicable:</label>
                </div>
                <div>
                    <button className={this.state.smoke === 1 ? "button2" : "button1"}
                         onClick={e => this.handleInputChange(e, 'smoke', 1)}>
                         Yes
                    </button>
                    <button className={this.state.smoke === 2 ? "yellowButton" : "button1"}
                         onClick={e => this.handleInputChange(e, 'smoke', 2)}>
                         NO
                    </button>
                    <button className={this.state.smoke === 3 ? "redButton" : "button1"}
                         onClick={e => this.handleInputChange(e,'smoke', 3)}>
                         Cracked
                    </button>
                </div>
            </form>

            <ButtonGroup
                group="lights"
                condition={this.state.lights}  
                handleInputChange={this.handleInputChange} 
                title="Flash Lights and Extra Batteries:"
            />

            <ButtonGroup
                group="NOrmal"
                condition={this.state.NOrmal}  
                handleInputChange={this.handleInputChange} 
                title="Manufactures Normal Checklist:"
            />

            <ButtonGroup
                group="abNOrmal"
                condition={this.state.abNOrmal}  
                handleInputChange={this.handleInputChange} 
                title="Manufactures Abnormal Checklist:"
            />

            <ButtonGroup
                group="company"
                condition={this.state.company}  
                handleInputChange={this.handleInputChange} 
                title="Company Checklist, Normal and Expanded:"
            />

            <ButtonGroup
                group="airworth"
                condition={this.state.airworth}  
                handleInputChange={this.handleInputChange} 
                title="Airworthiness Certificate:"
            />

            <ButtonGroup
                group="registration"
                condition={this.state.registration}  
                handleInputChange={this.handleInputChange} 
                title="Registration On Board and Vaild:"
            />
            
            <ButtonGroup
                group="customs"
                condition={this.state.customs}  
                handleInputChange={this.handleInputChange} 
                title="Customs Decal Present:"
            />

            <ButtonGroup
                group="carrier"
                condition={this.state.carrier}  
                handleInputChange={this.handleInputChange} 
                title="Air Carrier Certificate:"
            />

            <ButtonGroup
                group="radio"
                condition={this.state.radio}  
                handleInputChange={this.handleInputChange} 
                title="Radio Station Licences:"
            />

            <ButtonGroup
                group="insurance"
                condition={this.state.insurance}  
                handleInputChange={this.handleInputChange} 
                title="Insurance Certificates:"
            />

            <ButtonGroup
                group="database"
                condition={this.state.database}  
                handleInputChange={this.handleInputChange} 
                title="Nav DataBase Not Expired:"
            />

            <ButtonGroup
                group="vor"
                condition={this.state.vor}  
                handleInputChange={this.handleInputChange} 
                title="VOR Checked within 30 days:"
            />

            <ButtonGroup
                group="wb"
                condition={this.state.wb}  
                handleInputChange={this.handleInputChange} 
                title="W&B Matches AFM, IPreflight,and FMS:"
            />

            <ButtonGroup
                group="briefing"
                condition={this.state.briefing}  
                handleInputChange={this.handleInputChange} 
                title="Briefing cards(1 per seat):"
             />

             <ButtonGroup
                group="vests"
                condition={this.state.vests}  
                handleInputChange={this.handleInputChange} 
                title="Life Vest(1 per seat):"
             />

             <ButtonGroup
                group="sick"
                condition={this.state.sick}  
                handleInputChange={this.handleInputChange} 
                title="Sick Sacks(@ least 1 per seat):"
            />

            <ButtonGroup
                group="pin"
                condition={this.state.pin}  
                handleInputChange={this.handleInputChange} 
                title="Emergency Exit Pin:"
             />
           
             <ButtonGroup
                group="pitot"
                condition={this.state.pitot}  
                handleInputChange={this.handleInputChange} 
                title="Pitot Covers:"
             />
             
             <ButtonGroup
                group="wicks"
                condition={this.state.wicks}  
                handleInputChange={this.handleInputChange} 
                title="Static Wick Covers(@ least 2):"
             />

             <ButtonGroup
                group="engine"
                condition={this.state.engine}  
                handleInputChange={this.handleInputChange} 
                title="Engine Covers:"
             />

             <ButtonGroup
                group="logs"
                condition={this.state.logs}  
                handleInputChange={this.handleInputChange} 
                title="Mx Logs Book(@ least 2 extra):"
             />

             <ButtonGroup
                group="fire"
                condition={this.state.fire}  
                handleInputChange={this.handleInputChange} 
                title="Fire Extinguisher's Signed within 30 days:"
             />

             <ButtonGroup
                group="scale"
                condition={this.state.scale}  
                handleInputChange={this.handleInputChange} 
                title="Baggage Scale:"
             />

             <ButtonGroup
                group="keys"
                condition={this.state.keys}  
                handleInputChange={this.handleInputChange} 
                title="Keys on Board:"
             />


            <form className="radios group">
                <div className="centerLabel">
                    <label>Back Stock:</label>
                </div>
                <div>          
                    <button className={this.state.stock ? "button2": "button1"}
                        onClick={e => this.handleInputChange(e,'stock', true)}>
                        Good
                    </button>
                    <button className={this.state.stock ? "button1": "redButton"}
                        onClick={e => this.handleInputChange(e,'stock', false)}>
                        Needs More
                    </button>
                </div>
            </form>

            <form className="radios group">
                <div className="centerLabel">
                    <label>Water Packages(backstock):</label>
                </div> 
                <div>             
                    <button className={this.state.water === 1 ? "redButton" : "button1"}
                        onClick={e => this.handleInputChange(e,'water',1)}>
                        1
                    </button>

                    <button className={this.state.water === 2 ? "yellowButton" : "button1"}
                         onClick={e => this.handleInputChange(e,'water', 2)}>
                         2
                    </button>

                    <button className={this.state.water === 3 ? "button2" : "button1"}
                         onClick={e => this.handleInputChange(e,'water',3)}>
                         3
                    </button>

                    <button className={this.state.water === 4 ? "button2" : "button1"}
                         onClick={e => this.handleInputChange(e,'water', 4)}>
                         4+
                    </button>
                </div> 
            </form>

            <ButtonGroup
                group="aid"
                condition={this.state.aid}  
                handleInputChange={this.handleInputChange} 
                title="First Aid Kit Servicable:"
            />

            <form className="radios group">
                <div className="centerLabel">
                     <label>HF Radio(if required):</label>
                </div>
                <div>
                    <button className={this.state.hf ? "button2": "button1"} 
                        onClick={e => this.handleInputChange(e, 'hf', true)}>
                        Pass
                    </button>

                    <button className={this.state.hf ? "button1": "redButton"}
                        onClick={e => this.handleInputChange(e,'hf', false)}>
                        Fail
                    </button>
                </div>
            </form>

            <form className="radios group">
                <div className="centerLabel">
                    <label>Oxygen Quanity:</label>
                </div>
                <div>
                    <button className={this.state.oxygen === 1 ? "button2" : "button1"}
                         onClick={e => this.handleInputChange(e,'oxygen',1)}>
                         Green Arc
                    </button>

                    <button className={this.state.oxygen === 2 ? "button2" : "button1"}
                         onClick={e => this.handleInputChange(e,'oxygen',2)}>
                         3/4
                    </button>

                    <button className={this.state.oxygen === 3 ? "yellowButton" : "button1"}
                        onClick={e => this.handleInputChange(e,'oxygen',3)}>
                        1/2
                    </button>

                    <button className={this.state.oxygen === 4 ? "redButton" : "button1"}
                        onClick={e => this.handleInputChange(e,'oxygen',4)}>
                        Yellow Arc
                    </button>
                </div>
            </form>

            <h3 className="products">!!! Check for Expired Products !!!</h3>

            <form className="notes">
                <div className="centerLabel">
                    <label>Additional Notes:</label> 
                </div>                      
                <textarea className="inputText"
                 type="text"
                 placeholder="This is your Spot to add in additional Comments, Ex. Tire Condition(which tire)"
                 maxlength="500"
                 ></textarea>
            </form>
                             
        </div>

        )
    }

};