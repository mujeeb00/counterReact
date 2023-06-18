import React, { useState } from 'react';

function GreetingComponent() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <div className="input-field">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>{name && `Hello, ${name}!`}</div>
    </div>
  );
}

export default GreetingComponent;
