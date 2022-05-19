import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim() === 0 || enteredAge.trim() === 0) {
            setError(
                {
                    title: 'invalid Username',
                    message: 'please enter a valid username (not empty)'
                }
            )
            return;
        }
        if (+enteredAge < 1) {
            setError(
                {
                    title: 'invalid Age',
                    message: 'please enter a valid age'
                }
            )
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangedHandler = event => {
        setEnteredUsername(event.target.value);
    }

    const ageChangedHandler = event => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }
    return (

        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input} >
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input id="username" value={enteredUsername} type='text' onChange={usernameChangedHandler} />
                    <label htmlFor="age" >Age (Years)</label>
                    <input id="age" type='text' value={enteredAge} onChange={ageChangedHandler} />
                    <Button type='submit' onclick={addUserHandler} >Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;