import React, { useRef, useState } from 'react'
import './Login.css'
import emailjs from '@emailjs/browser';
import { AlignCenter } from 'lucide-react';
const Login = () => {
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oai0rqn', 'template_kvgw7qr', form.current, {
        publicKey: 'Rasv4PZABl0ZvgA-A',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    const [action, setAction] = useState("Sign Up")
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            {/* <div className='inputs'>
                {action === "Login" ? <div></div> : <div className='input'>
                    <img src='' alt='' />
                    <input type="text" placeholder='Name' />
                </div>}
                <div className='input'>
                    <img src='' alt='' />
                    <input type="email" placeholder='Email-Id' />
                </div>
                <div className='input'>
                    <img src='' alt='' />
                    <input type="password" placeholder='Password' />
                </div>
            </div> */}
            <form className='inputs' ref={form} onSubmit={sendEmail}>
                <label className='input'>
                <input type="name" placeholder=' Name' name='user_name'/>
                </label>
                <label className='input'>
                <input type="email" placeholder=' Email-Id' name='user_email' />
                </label>
                <label className='input'>
                <input type="password" placeholder=' Password' />
                </label>
                <label>
                    <button className='submit1' type = 'submit'>Click to submit</button>
                </label>
            </form>
            {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click here!</span></div>}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    )
}

export default Login