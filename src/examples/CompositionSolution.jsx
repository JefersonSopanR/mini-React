import React, { useState } from 'react';

// Instead of passing props down, we compose components differently
const UserProfile = ({ user, onUpdateUser }) => {
  return (
    <div style={{ border: '2px solid blue', padding: '10px', margin: '10px' }}>
      <h3>User Profile (Composed)</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => onUpdateUser({ ...user, name: user.name + ' Updated' })}>
        Update Name
      </button>
    </div>
  );
};

// These components receive children instead of specific props
const UserSection = ({ children }) => {
  return (
    <div style={{ border: '2px solid green', padding: '10px', margin: '10px' }}>
      <h2>User Section (Composition)</h2>
      <p>This component just renders its children 😊</p>
      {children}
    </div>
  );
};

const Dashboard = ({ children }) => {
  return (
    <div style={{ border: '2px solid orange', padding: '10px', margin: '10px' }}>
      <h2>Dashboard (Composition)</h2>
      <p>This component also just renders its children 😊</p>
      {children}
    </div>
  );
};

// Top-level component composes the structure
const CompositionExample = () => {
  const [rerere, setUser] = useState({
    name: "Charlie Brown",
    email: "charlie@example.com"
  });

  return (
    <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
      <h1>Component Composition Solution</h1>
      <p>We compose the structure at the top level!</p>
      
      <Dashboard>
        <UserSection>
          {/* UserProfile gets props directly from the top level */}
          <UserProfile user={rerere} onUpdateUser={setUser} />
        </UserSection>
      </Dashboard>
    </div>
  );
};

export default CompositionExample;