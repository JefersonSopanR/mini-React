import React, { useRef, useState } from 'react';

function RefExercise() {
  const inputRef = useRef(null);
  const valueRef = useRef('');
  const [show, setShow] = useState('');

  const handleChange = (e) => {
    valueRef.current = e.target.value; // Store value in ref
  };

  const handleShow = () => {
    setShow(valueRef.current); // Show value from ref
  };

  return (
    <div>
      <input ref={inputRef} onChange={handleChange} />
      <button onClick={handleShow}>Show Value</button>
      <p>Value: {show}</p>
    </div>
  );
}

export default RefExercise