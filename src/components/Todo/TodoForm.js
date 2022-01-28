import React, { useState,useEffect,useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })

    const changeHandler = (e)=>{
        setInput(e.target.value)
    }

    const submitHandler = e =>{
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('')
    }

    return (
        <form onSubmit={submitHandler} className='todo-form'>
            {
                props.edit ? 
                (
                    <div className='todo-input-block'>
                    <input type='text' placeholder='Update Your Todo' className='todo-input edit' 
                    value={input} onChange={changeHandler} ref={inputRef} />
                    <button className='todo-button edit' >Update</button>
                    </div>
                ) :
                (
                    <div className='todo-input-block'>
                    <input type='text' placeholder='Add a Todo' className='todo-input' 
                    value={input} onChange={changeHandler} ref={inputRef} />
                    <button className='todo-button' >Add Todo</button>
                    </div>
                )
            }

        </form>
    );
}

export default TodoForm;
