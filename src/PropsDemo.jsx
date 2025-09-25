import React, { useState } from 'react';
import BasicPropsExample from './examplesContext/BasicProps';
import PropDrillingExample from './examplesContext/PropDrilling';
import ContextExample from './examplesContext/ContextSolution';
import CompositionExample from './examplesContext/CompositionSolution';

const PropsDemo = () => {
  const [activeExample, setActiveExample] = useState('basic');

  const examples = {
    basic: { component: <BasicPropsExample />, title: "Basic Props" },
    drilling: { component: <PropDrillingExample />, title: "Prop Drilling Problem" },
    context: { component: <ContextExample />, title: "Context API Solution" },
    composition: { component: <CompositionExample />, title: "Composition Solution" }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Props and Prop Drilling Examples</h1>
      
      <div style={{ marginBottom: '20px' }}>
        {Object.entries(examples).map(([key, { title }]) => (
          <button
            key={key}
            onClick={() => setActiveExample(key)}
            style={{
              margin: '5px',
              padding: '10px 15px',
              backgroundColor: activeExample === key ? '#007bff' : '#f8f9fa',
              color: activeExample === key ? 'white' : 'black',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {title}
          </button>
        ))}
      </div>

      <div style={{ border: '2px solid #333', borderRadius: '8px', padding: '20px' }}>
        {examples[activeExample].component}
      </div>

    </div>
  );
};

export default PropsDemo;