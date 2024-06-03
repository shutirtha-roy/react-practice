import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const addItem = () => {
    if (inputValue.trim()) {
      if (editIndex === -1) {
        setItems([...items, inputValue.trim()]);
      } else {
        const newItems = [...items];
        newItems[editIndex] = inputValue.trim();
        setItems(newItems);
        setEditIndex(-1);
      }
      setInputValue('');
    }
  }

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  const editItem = (index) => {
    setInputValue(items[index]);
    setEditIndex(index);
  }

  return (
    <div>
      <h1>Simple CRUD APP</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter an item"
      />
      <button onClick={addItem}>{editIndex === -1 ? 'Add' : 'Update'}</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
