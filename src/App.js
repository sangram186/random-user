import React, { useState } from 'react';
import './App.css';
import fakeUser from './fakeUser';
import User from './User/User';
import Header from './Header/Header';

function App() {
  const [users, setUsers] = useState(fakeUser);
  const [count, setCount] = useState([]);

  const handleCount = (info) =>{
    const newCount = [...count, info];
    setCount(newCount);
  }
  return (
    <div className="App">
      <Header count={count}></Header>
      {
        users.map(user => <User handleCount={handleCount} user = {user}></User>)
      }
    </div>
  );
}

export default App;
