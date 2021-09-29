import React from 'react';
import {useState} from 'react';

const ErrorExample = () => {
  let title="Random Title";
  const handleClick=()=>{
    title="changed title";
  }
  return <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>Change title</button>
  </React.Fragment>
};

export default ErrorExample;