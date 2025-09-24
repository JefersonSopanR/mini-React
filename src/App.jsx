import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


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
				<div key={log.index}>
					<p>Name: {log.name}</p>
					<p>Email: {log.email}</p>
        			<p>Age: {log.age}</p>
					{log.modify && <p>this was modify</p>}
					<button onClick={() => activeModifyOption(log.index)}>modify Log</button>
				</div>
			))
		}
		</div>
    </div>
  );
}



function App() {
  const [count, setCount] = useState(0)
  const [showDemos, setShowDemos] = useState(true);

  return (
    <>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      <div>
        <Email />
      </div>
      
      <p className="read-the-docs">
        🧪 Experiment with the demos above to see useEffect in action!
      </p>
    </>
  )
}

export default App