import React, { createContext, useContext, useState } from 'react';

// Create a context for user data
const UserContext = createContext();

// Provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Bob Smith",
    email: "bob@example.com"
  });

  return (
    <UserContext.Provider value={{ user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context
const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

// Deep child component that needs user data - NO PROP DRILLING!
const UserProfileWithContext = () => {
  const { user, setUser } = useUser(); // Direct access to user data!

  return (
    <div style={{ border: '2px solid blue', padding: '10px', margin: '10px' }}>
      <h3>User Profile with Context (Level 3)</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => setUser({ ...user, name: user.name + ' Updated' })}>
        Update Name
      </button>
    </div>
  );
};

// Middle components don't need to know about user data anymore!
const UserSectionWithContext = () => {
  return (
    <div style={{ border: '2px solid green', padding: '10px', margin: '10px' }}>
      <h2>User Section with Context (Level 2)</h2>
      <p>This component is clean - no props to pass! 😊</p>
      
      <UserProfileWithContext />
    </div>
  );
};

const DashboardWithContext = () => {
  return (
    <div style={{ border: '2px solid orange', padding: '10px', margin: '10px' }}>
      <h2>Dashboard with Context (Level 1)</h2>
      <p>This component is also clean! 😊</p>
      
      <UserSectionWithContext />
    </div>
  );
};

const Info = () => {
	const {user} = useUser()
	return (
		<>
			<p>{user.name}</p>
			<p>{user.email}</p>
		</>
	)
}

// Main component
const ContextExample = () => {

  return (
    <UserProvider>
      <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
        <h1>Context API Solution (Level 0)</h1>
        <p>No more prop drilling! 🎉</p>
		<Info />
        <DashboardWithContext />
      </div>
    </UserProvider>
  );
};

export default ContextExample;