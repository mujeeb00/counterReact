import React, { useState } from 'react';

function TodoList() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={handleInputChange}
          placeholder="Enter a new item"
        />
        <button className='btn-sm btn-primary' onClick={handleAddItem}>Add</button>
      </div>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button className='btn-sm btn-primary' onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
          
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
