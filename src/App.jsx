import { useState, useEffect, useReducer, useRef, use } from 'react'
import './App.css'
import PropsDemo from './PropsDemo'
import RefDemo from './RefDemo'


const Email = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });
  const [logs, setLogs] = useState([])
  
  const handleInputChange = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,  // Keep existing properties
      [field]: value // Update only the specified field
    }));
  };

  const modifyLog = (i, toChange, value) => {
		setLogs(logs.map(log => {
			if (log.index === i) {
				return {...log, [toChange]: value, modify: true};
			}
			return log
		}).filter(log => log.modify))
  }

  const activeModifyOption = (index) => {
		setLogs(logs.map(log => {
			if (log.index === index) {
				return ({...log, modify: true})
			}
			return log
		}))

  }
  
  return (
    <div>
      <input 
        value={user.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
        placeholder="Name"
      />
      <input 
        value={user.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        placeholder="Email"
      />
      <input 
        type="number"
        value={user.age}
        onChange={(e) => handleInputChange('age', Number(e.target.value))}
        placeholder="Age"
      />
	  <button onClick={() => {setLogs(logs => [...logs, {index: Date.now(), ...user}]); setUser({
    name: '',
    email: '',
    age: 0
  })}} >add Log</button>
		<div>
		{
			logs.map((log) => (
				<div key={log.index} style={{ 
							display: 'flex', 
							justifyContent: 'space-between', 
							alignItems: 'center',
							marginBottom: '5px',
							padding: '5px',
							border: '1px solid #ccc'
						}}>
					<p>Name: {log.name}</p>
					<p>Email: {log.email}</p>
        			<p>Age: {log.age}</p>
					{log.modify && (<p>this was modify</p>
				)}
					<button onClick={() => activeModifyOption(log.index)}>modify Log</button>
				</div>
			))
		}
		</div>
    </div>
  );
}

/*
function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { text: action.text, done: false }];
    case 'toggle':
      return state.map((todo, idx) =>
        idx === action.index ? { ...todo, done: !todo.done } : todo
      );
    case 'remove':
      return state.filter((_, idx) => idx !== action.index);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState('');

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={() => {
        dispatch({ type: 'add', text: input });
        setInput('');
      }}>Add</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => dispatch({ type: 'toggle', index: idx })}>Toggle</button>
            <button onClick={() => dispatch({ type: 'remove', index: idx })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
*/

/*
function formReducer(state, action) {
  switch (action.type) {
    case 'change':
      return { ...state, [action.field]: action.value };
    case 'reset':
      return { name: '', email: '' };
    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(formReducer, { name: '', email: '' });

  return (
    <form>
      <input
        value={state.name}
        onChange={e => dispatch({ type: 'change', field: 'name', value: e.target.value })}
        placeholder="Name"
      />
      <input
        value={state.email}
        onChange={e => dispatch({ type: 'change', field: 'email', value: e.target.value })}
        placeholder="Email"
      />
      <button type="button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <p>Name: {state.name}, Email: {state.email}</p>
    </form>
  );
}
*/

/*
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}*/

/*








function withWindowWidth(WrappedComponent) {
  return function EnhancedComponent(props) {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <WrappedComponent {...props} windowWidth={width} />;
  };
}

// Usage:
function ShowWidth({ windowWidth }) {
  return <p>Window width: {windowWidth}</p>;
}

const ShowWidthWithWindow = withWindowWidth(ShowWidth);

function App() {
  return <ShowWidthWithWindow />;
}

*/



const WindowChecker = ({props, setProps}) => {
	useEffect(() => {

		function handleMicky(e) {
			setProps({x: e.clientX, y: e.clientY})
		}		
		window.addEventListener('mousemove', handleMicky)
		return () => {window.removeEventListener('mousemove', handleMicky)}
	}, [])

	return (
		<>
			<p>x: {props.x} y: {props.y}</p>
		</>
	)
}

const Manny = ({propsManny, setPropsManny}) => {

	const refBox = useRef(null);

	useEffect(() => {
		function mannyMoves(e) {
			setPropsManny({x: e.offsetX, y: e.offsetY})
		}

		refBox.current.addEventListener('mousemove', mannyMoves)
	}, [])

	return (
		<>
			<div ref={refBox}  style={{height: 200, width: 200, background: 'red'}}></div>
			<p> Manny Pos: x: {propsManny.x} y: {propsManny.y}</p>
		</>
	)
}

function App() {
  const [count, setCount] = useState(0)
  const [activeDemo, setActiveDemo] = useState('email');
  const [show, setShow] = useState(true);
  const [props, setProps] = useState({x: 0, y: 0});
  const [propsManny, setPropsManny] = useState({x: 0, y: 0})

  return (
	<>
	<p>x: {props.x} y: {props.y}</p>
	<p>Ousite the box x: {propsManny.x} y: {propsManny.y}</p>
	<button onClick={() => setShow(!show)}>{show ? "HIDE" : "SHOW"}</button>
	<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
	{
		show && 
		<>
			<WindowChecker props={props} setProps={setProps}/>
			<Manny propsManny={propsManny} setPropsManny={setPropsManny}/>

		</>
		}
	</>
  )
}

export default App