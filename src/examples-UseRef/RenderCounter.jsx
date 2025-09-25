import React, { useRef, useState } from 'react';

function RenderCounter() {
  const renderCount = useRef(1);
  const [value, setValue] = useState('');

  // This runs on every render
  renderCount.current += 1;

  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <p>Component rendered: {renderCount.current} times</p>
    </div>
  );
}

export default RenderCounter
