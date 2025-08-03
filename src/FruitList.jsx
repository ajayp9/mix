import { useState } from 'react';

function FruitList() {
  const [fruits, setFruits] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Mango' },
    { id: 5, name: 'Pineapple' }
  ]);
  const [newFruit, setNewFruit] = useState('');

  const addFruit = () => {
    if (newFruit.trim()) {
      setFruits([...fruits, { 
        id: Date.now(), 
        name: newFruit 
      }]);
      setNewFruit('');
    }
  };

  const removeFruit = (id) => {
    setFruits(fruits.filter(fruit => fruit.id !== id));
  };

  return (
    <div className="fruit-list">
      <h1>Fruit List App</h1>
      <div className="add-fruit">
        <input
          type="text"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          placeholder="Add a new fruit..."
        />
        <button onClick={addFruit}>Add</button>
      </div>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit.id}>
            {fruit.name}
            <button onClick={() => removeFruit(fruit.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;