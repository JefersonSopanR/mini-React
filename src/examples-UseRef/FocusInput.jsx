import React, { useRef, useState, useEffect } from 'react';

function Box({ref}) {
	return (

		<>
			<div ref={ref} style={{height: '100px', background: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>BOX</div>
		</>
	)
}

function MeasureBox() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('')



  const convertInput = (e, side) => {
		const value = e.target.value;
		
		if (/^[\d]*$/.test(value)) {
			if (side === 'height') {
				setHeight(value);
			}
			else if (side === 'width') {
				setWidth(value)
			}
		}
  }


  return (
    <div>
		<input placeholder='enter height' value={height} onChange={(e) => convertInput(e, 'height')}></input>
		<input placeholder='enter height' value={width} onChange={(e) => convertInput(e, 'width')}></input>
      <div ref={boxRef} style={{ width: `${width}px`, height: `${height}px`, background: 'lightblue' }}>
        Measure Me!
      </div>
      <p>Width: {height}px, Height: {width}px</p>
    </div>
  );
}


function FocusInput() {
  const inputRef = useRef(null);
  const ref = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input element directly
  };

  return (
	<div>
		<MeasureBox />

	</div>
	);
}


export default FocusInput