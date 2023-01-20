import React from "react";
import classes from './MyInput.module.css';

let MyInput = (props) => {
    return (
        <input {...props} className={classes.MyInput}/>
    )
}

export default MyInput;