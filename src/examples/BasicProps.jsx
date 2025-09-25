import React from 'react';

// Child component that receives props
const UserCard = (props) => {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>
    </div>
  );
};

// Alternative: Destructuring props (more common)
const UserCardDestructured = ({ name, email, age, role }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
};

// Parent component that passes props
const BasicPropsExample = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    age: 28,
    role: "Developer"
  };

  return (
    <div>
      <h1>Basic Props Example</h1>
      
      {/* Passing props individually */}
      <UserCard 
        name={user.name}
        email={user.email}
        age={user.age}
        role={user.role}
      />
      
      {/* Using spread operator to pass all props at once */}
      <UserCardDestructured {...user} />
    </div>
  );
};

export default BasicPropsExample;