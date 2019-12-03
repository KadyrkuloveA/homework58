import React from 'react';
import './Alert.css';

const Alert = props => {
  return (
      <div className={['alert', props.type].join(' ')} style={{
          transform: props.show ? 'translate(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
      }}>
          {props.children}
          {props.dismiss ? <button className='closeBtn'  onClick={() => props.close(props.type)}>✘</button> : null}
      </div>
  )
};

export default Alert;