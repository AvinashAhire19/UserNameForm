import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enterUserInput, setEnterUserInput] = useState('');
  const [enterUserAge, setEnterUserAge] = useState('');
  const [error, setError] = useState('');

  const UserChangeHandler = (event) => {
        event.preventDefault();

        if (enterUserInput.trim().length === 0 ||enterUserAge.trim().length ===0) {
          setError({
            title:'Invalid',
            message:'Please enter valid input and age'
          });
          return
        }
        if  (+enterUserAge < 1) {
          setError ({
            title:'Invalid age',
            message:'Enter valid age. (age > 1)'
          });
          return
        }

        // console.log(enterUserAge,enterUserInput);
        props.onAddUser(enterUserInput,enterUserAge);
        setEnterUserInput('');
        setEnterUserAge('');
    };

  const userInputChangeHandler = (event) =>{
    setEnterUserInput(event.target.value)
    console.log(setEnterUserInput);
  }
  const userAgeChangeHandler = (event) =>{
    setEnterUserAge(event.target.value)
    console.log(setEnterUserAge);
  }

  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal 
      title={error.title} 
      message={error.message} 
      onConfirm={errorHandler}/>}
      <Card className={classes.input}>
            <form onSubmit={UserChangeHandler}>
                <label>User</label>
                <input id ='user'
                type='text' 
                onChange={userInputChangeHandler}
                value={enterUserInput}
                />
                <label>Age</label>
                <input id='age' 
                type='number'
                onChange={userAgeChangeHandler}
                value={enterUserAge}
                />
                <Button type='submit'>Submit</Button>
            </form>
      </Card>
    </div>
  )
}

export default AddUser;
