import React from 'react';
import './manuals.styles.css';

const ButtonGroup = ({group, handleInputChange, condition, title}) => {    
    
    return (
        <form className="radios group">
            <div className="centerLabel">

                <label>{title}</label>

            </div>

            <div>
                <button className={condition ? "button2": "button1"}
                    onClick={e => handleInputChange(e, group, true)}>
                    YES
                </button>

                <button className={condition ? "button1": "button2"}
                    onClick={e => handleInputChange(e, group, false)}>
                    NO
                </button>
           </div>
        </form>
    )
  
};

export default ButtonGroup;