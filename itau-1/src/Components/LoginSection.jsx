import { useState } from 'react';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'
import './LoginSection.css'

export const LoginSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        /* sendEmailVerification(auth.currentUser); */
        navigate("/welcome")
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  return (
    <section className="login">
      <div className="loginform">
        <h2>Iniciar sesión</h2>
        <form action='submit'>
          <label>Correo</label>
          <input 
            id="email"
            name="email"
            type="email" 
            required
            placeholder="Email address"
            onChange={(e)=>setEmail(e.target.value)} />                           
          <label>Contraseña</label>
          <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)} />
          <input type="button" className='button-login' value='Ingresar' onClick={onLogin} />
        </form>
      </div>
      <div>
        <img alt='personas-felices' src='loginimg.jpg' className='img-login'></img>
      </div>
    </section>
  )
}

export default LoginSection