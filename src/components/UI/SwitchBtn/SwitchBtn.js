import React from 'react';
import './SwitchBtn.css';

const SwitchBtn = props => {
    return (
        <button onClick={props.switch} className='btn' style={{marginTop: '20px'}}>{props.children}</button>
    )
};

export default SwitchBtn;