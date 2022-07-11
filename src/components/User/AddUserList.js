import React from 'react'
import Card from '../UI/Card';
import classes from './AddUserList.module.css'

const AddUserList = (props) => {
  return (
    <div>
        <Card className={classes.users}>
            <ul>
                {props.users.map((user)=>(
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
      </Card>
    </div>
  )
}

export default AddUserList
