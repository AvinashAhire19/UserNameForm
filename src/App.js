import { useState } from 'react';
import './App.css';
import AddUser from './components/User/AddUser';
import AddUserList from './components/User/AddUserList';

function App() {
  const [userList,setUserList] =useState([])
  
const addUserHandler = (uName,uage) =>{
  setUserList((preUserList) => {
    return [...preUserList, {name :uName,age : uage,id: Math.random().toString()}];
  })
}
  return (
    <div>
    <AddUser onAddUser={addUserHandler} />
    <AddUserList users={userList}/>
    </div>
  );
}

export default App;
