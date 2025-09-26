import { useState, useRef } from "react";

function RefExercise() {
	const [letter, setLetter] = useState('')
	
	const ref = useRef('');
	const [upp, setUpp] = useState('2')

	const getValue = (e) => {
		const value = e.target.value;
		setLetter(value)
	}
	ref.current = letter.toUpperCase();

	return (
		<>
			<input value={letter} placeholder="Enter value" onChange={(e) => getValue(e)}></input>
			<button onClick={() => {setUpp(ref.current); setLetter('')}}>To uppercase</button>
			<p>Value: {upp}</p>
		</>
	)

}

export default RefExercise

