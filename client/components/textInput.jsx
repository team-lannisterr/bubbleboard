import React, { Component } from 'react';

const textInput = (props) => {
    return (
    <div>
        <form onSubmit={(event)=>{
            event.preventDefault();
            props.onSubmitHandler(event);
        }}>
            <textarea name="" id="" cols="30" rows="10"  onChange={props.onChangeHandler}></textarea>
            <input type='submit' value='IMPORT'/>
        </form>
    </div>
    )  
}

export default textInput;