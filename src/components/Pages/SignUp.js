import React,{useState} from 'react'
// import '../static/form.css'
import {Input,Button,Div} from './SignInElement'

function SignIn() {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(email,password);
    }
    return (
        <form onSubmit={submitHandler}>
            <Div>
                <h4>Please Sign Up!</h4>
                <Input type='text' value={email} placeholder="Username" onChange={(e)=>setEmail(e.target.value)} />
                <Input type='password' value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
                <div>
                    <Button type='submit'>Sign Up</Button>
                </div>
            </Div>
        </form> 
    )
}

export default SignIn
