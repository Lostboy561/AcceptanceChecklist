import React from 'react';
import './tires.styles.css';



export class Tires extends React.Component {

    render(){
        return (
            <div className='mainTire'>
                <h1 className="h1">Tire Condition:
                    <p className="pgraph">Additional Comments</p>
                    <p className="pgraph">At End of Form</p>
                </h1>

                <h3 id="LT" className="left">LEFT TIRE(S):
                 <form>
                    <label>
                    Flat Spot: 
                    <select className="button">
                        <option value="no"> No </option>
                        <option value="yes">Yes</option>
                    </select>
                    </label>
                 </form>
                <br></br>
                 <form>
                    <label>
                      Pick Tire Condition:
                      <select className="button">
                        <option value="less">Less than 1/8 Tread</option>
                        <option value="medium">Medium Tread</option>
                        <option value="full">Full Tread</option>
                      </select>
                    </label>
                 </form>
                </h3>

                <h3 id="RT" className="right">RIGHT TIRE(S):
                    <form>
                    <label>
                        Flat Spot: 
                        <select className="button">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                        </select>
                    </label>
                 </form>
                <br></br>
                  <form>
                    <label>
                      Pick Tire Condition:
                      <select className="button">
                        <option value="less">Less than 1/8 Tread</option>
                        <option value="medium">Medium Tread</option>
                        <option value="full">Full Tread</option>
                      </select>
                    </label>
                 </form>
                </h3>

                <h3 id="NT" className="nose">NOSE TIRE(S):
                    <form>
                     <label>
                         Flat Spot: 
                         <select className="button">
                          <option value="no">No</option>
                         <option value="yes">Yes</option>
                         </select>
                         </label>
                     </form>
                <br></br>
                 <form>
                    <label>
                      Pick Tire Condition:
                      <select className="button">
                        <option value="less">Less than 1/8 Tread</option>
                        <option value="medium">Medium Tread</option>
                        <option value="full">Full Tread</option>
                      </select>
                    </label>
                 </form>
                </h3>

            </div>
        )
    };
}