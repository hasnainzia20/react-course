import { useState } from 'react';
import React from 'react';
import AddUser from './age-in-years-components/users/AddUser';
import UserList from './age-in-years-components/users/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsers) => {
      return [...prevUsers, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;