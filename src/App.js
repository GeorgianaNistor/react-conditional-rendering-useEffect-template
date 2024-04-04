import React, { useState } from 'react';
import './style.css';
import UserItem from './components/UserItem';

export default function App() {
  const [color, setColor] = useState('#ffffff');
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);

  function handleColorChange(event) {
    const newColor = event.target.value;
    setColor(newColor);
  }
  function handleToggleDropdown() {
    setIsDropdownDisplayed(!isDropdownDisplayed);
  }

  let dropdownClasses = 'dropdown-list';
  if (isDropdownDisplayed) {
    dropdownClasses += ' is-displayed';
  }

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <input type="color" onChange={handleColorChange} />
      <div>
        <button onClick={handleToggleDropdown}>Arata optiuni</button>
        <ul className={dropdownClasses}>
          <li>Optiune 1</li>
          <li>Optiune 2</li>
        </ul>
      </div>
      <UserItem name="Octavian Darius" email="ocatvian.darius@gmail.com" />
      <UserItem name="Eduard Lavinia" email="eduard.lavinia@gmail.com" />
      <UserItem name="Sanda Cosmin" email="sanda.cosmin@gmail.com" />
    </div>
  );
}
