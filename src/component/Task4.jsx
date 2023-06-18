import React, { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <div>{isOn ? 'Switch is ON' : 'Switch is OFF'}</div>
    </div>
  );
}

export default ToggleSwitch;
