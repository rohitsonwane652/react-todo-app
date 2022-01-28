import React,{useState} from 'react'
import '../static/form.css'

function SignUp() {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(email,password);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='form-body'>
                <h4>Please Sign Up!</h4>
                <input type='text' value={email} placeholder="Username" onChange={(e)=>setEmail(e.target.value)} />
                <input type='password' value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
                <button type='submit'>Sign Up</button>
            </div>
        </form> 
    )
}

export default SignUp
