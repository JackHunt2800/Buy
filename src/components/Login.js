import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import log from "../Assets/logo.png"
import { auth } from '../firebase'

function Login(){

    const history=useHistory();
    const [useremail,setUserEmail]=useState('')
    const [userpassword,setUserPassword]=useState('')

    
    const loginuser=event=>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail,userpassword)
        .then((auth)=>{
            history.push('/')
        })
        .catch(e => alert(e.message))

    }

    const signupuser=event=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(useremail,userpassword)
        .then(auth=>{
            history.push('/');
        })
        .catch(e=>alert(e.message))
    }



    
    
    
    
    return(
        <div className="">
            <center>
            <Link>
                <img src={log} alt="logo"></img>
            </Link>
            </center>
        <form className="border border-dark p-2 m-5">
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" value={useremail} onChange={event=>setUserEmail(event.target.value)} class="form-control" placeholder="Enter Email address"/>
                <div  class="form-text"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" value={userpassword} onChange={event=>setUserPassword(event.target.value)} class="form-control"/>
            </div>
            <button type="submit" class="btn btn-primary" onClick={loginuser}>Sign in</button>
        </form>
        <div className='m-5'>
            <h3>Not a user?</h3>
            <button class="btn btn-primary" onClick={signupuser}>Sign up</button>
        </div>
        </div>
        

    )

}

export default Login