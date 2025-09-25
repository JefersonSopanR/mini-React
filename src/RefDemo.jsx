import FocusInput from './examples-UseRef/FocusInput'
import RenderCounter from './examples-UseRef/RenderCounter'
import RefExercise from './examples-UseRef/RefExercise'
import { useState } from 'react'

const RefDemo = () => {
	
	const [showFocusInput, setShowFocusInput] = useState(false);
	const [showRenderCounter, setShowRenderCounter] = useState(false);
	const [showRenderExercise, setShowRenderExercise] = useState(false);

	return (
		<>
			<button onClick={() => setShowFocusInput(!showFocusInput)} >{showFocusInput ? 'Hide Focus Input' : 'SHOW Focus Input'}</button>
			<br/><br/>
			{/*firts exercise*/ }
			{
				showFocusInput &&
				<FocusInput/>
			}
			<br/><br/><br/><br/>
			<button onClick={() => setShowRenderCounter(!showRenderCounter)} >{showRenderCounter ? 'Hide Render Count' : 'SHOW Render Count'}</button>
			<br/><br/>
			{/*second exercise*/ }
			{
				showRenderCounter &&
				<RenderCounter/>
			}
			<br/><br/><br/><br/>
			<button onClick={() => setShowRenderExercise(!showRenderExercise)} >{showRenderExercise ? 'Hide Render Exercise' : 'SHOW Render Exercise'}</button>
			<br/><br/>
			{/*third exercise*/ }
			{
				showRenderExercise &&
				<RefExercise/>
			}
		</>
	)
}

export default RefDemo