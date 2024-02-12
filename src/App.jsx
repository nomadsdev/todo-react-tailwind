import { useState } from 'react'
import './App.css'

import { MdDeleteOutline } from "react-icons/md";

function App() {

  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddName = () => {
    if (inputValue.trim() !== '') {
      setNames([...names, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDeleteName = (index) => {
    const updatedNames = [...names];
    updatedNames.splice(index, 1);
    setNames(updatedNames);
  };

  return (
    <div className="bg-gray-50 w-full h-screen flex justify-center">
      <div className="w-full max-w-7xl px-5">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">ToDo List</h2>
          <div className="flex mb-4">
            <input
              type="text"
              className="flex-grow border border-gray-300 rounded-l-xl px-4 py-2 focus:outline-none focus:border-blue-500"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter a name"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-r-xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={handleAddName}
            >
              Add Name
            </button>
          </div>
          <ul>
            {names.map((name, index) => (
              <li key={index} className="flex items-center justify-between bg-white rounded-xl mb-2 p-2 px-4 shadow">
                <span>{name}</span>
                <button
                  className="text-red-500 bg-red-200 rounded-md text-2xl p-2 hover:text-red-600 focus:outline-none focus:text-red-600"
                  onClick={() => handleDeleteName(index)}
                >
                  <MdDeleteOutline />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
