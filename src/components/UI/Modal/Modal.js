import React, {Fragment} from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import SwitchBtn from "../SwitchBtn/SwitchBtn";

const Modal = props => {
    return (
        <Fragment>
            <div className='Modal' style={{
                transform: props.show ? 'translate(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                <h3>{props.title}</h3>
                {props.children}
                <SwitchBtn switch={props.close}>✘</SwitchBtn>
            </div>
            <Backdrop show={props.show} onClick={props.close}/>
        </Fragment>
    );
};

export default Modal;