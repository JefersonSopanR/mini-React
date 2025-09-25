import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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



function App() {
  const [count, setCount] = useState(0)
  const [activeDemo, setActiveDemo] = useState('email');

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button 
          onClick={() => setActiveDemo('email')}
          style={{
            margin: '5px',
            padding: '10px 15px',
            backgroundColor: activeDemo === 'email' ? '#007bff' : '#f8f9fa',
            color: activeDemo === 'email' ? 'white' : 'black',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Email App
        </button>
        <button 
          onClick={() => setActiveDemo('props')}
          style={{
            margin: '5px',
            padding: '10px 15px',
            backgroundColor: activeDemo === 'props' ? '#007bff' : '#f8f9fa',
            color: activeDemo === 'props' ? 'white' : 'black',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Props & Prop Drilling Demo
        </button>
		<button 
          onClick={() => setActiveDemo('useRef')}
          style={{
            margin: '5px',
            padding: '10px 15px',
            backgroundColor: activeDemo === 'useRef' ? '#007bff' : '#f8f9fa',
            color: activeDemo === 'useRef' ? 'white' : 'black',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          useRef Demo
        </button>
      </div>

      {activeDemo === 'email' ? (
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
            🧪 Experiment with the email form above!
          </p>
        </>
      ) : (activeDemo === 'props' ? (
        <PropsDemo />) : (<RefDemo />))}
    </>
  )
}

export default App