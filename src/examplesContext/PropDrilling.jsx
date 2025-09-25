import React, { useState } from 'react';

// Deep child component that actually needs the user data
const UserProfile = ({ user, onUpdateUser }) => {
  return (
    <div style={{ border: '2px solid blue', padding: '10px', margin: '10px' }}>
      <h3>User Profile (Level 3)</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => onUpdateUser({ ...user, name: user.name + ' Updated' })}>
        Update Name
      </button>
    </div>
  );
};

// Middle component that doesn't use the props but has to pass them down
const UserSection = ({ user, onUpdateUser }) => {
  return (
    <div style={{ border: '2px solid green', padding: '10px', margin: '10px' }}>
      <h2>User Section (Level 2)</h2>
      <p>This component doesn't use user data, but has to pass it down 😞</p>
      
      {/* Has to pass props it doesn't use */}
      <UserProfile user={user} onUpdateUser={onUpdateUser} />
    </div>
  );
};

// Another middle component
const Dashboard = ({ user, onUpdateUser }) => {
  return (
    <div style={{ border: '2px solid orange', padding: '10px', margin: '10px' }}>
      <h2>Dashboard (Level 1)</h2>
      <p>This component also doesn't need user data directly 😞</p>
      
      {/* Also has to pass props it doesn't use */}
      <UserSection user={user} onUpdateUser={onUpdateUser} />
    </div>
  );
};

// Top-level component that has the data
const PropDrillingExample = () => {
  const [user, setUser] = useState({
    name: "Alice Johnson",
    email: "alice@example.com"
  });

  return (
    <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
      <h1>Prop Drilling Example (Level 0)</h1>
      <p>User data lives here, but is needed 3 levels deep!</p>
	  <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
	  <button onClick={() => setUser(user => ({...user, name: "2323"}))}>change username</button>
      
      {/* Starting the prop drilling chain */}
      <Dashboard user={user} onUpdateUser={setUser} />
    </div>
  );
};

export default PropDrillingExample;