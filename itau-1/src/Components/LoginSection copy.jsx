import { useState } from 'react';
import {  signInWithEmailAndPassword, setPersistence, browserSessionPersistence, RecaptchaVerifier, getMultiFactorResolver,
  PhoneAuthProvider, PhoneMultiFactorGenerator } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'
import './LoginSection.css'

export const LoginSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    const recaptchaVerifier = new RecaptchaVerifier("sign-in-button", {
      "size": "invisible",
      "callback": function(response) {
          // reCAPTCHA solved, you can proceed with
          // phoneAuthProvider.verifyPhoneNumber(...).          
      }
    }, auth);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setPersistence(auth, browserSessionPersistence)
        /* sendEmailVerification(auth.currentUser); */
        /* navigate("/welcome") */
      })
      .catch((error) => {
        if (error.code === 'auth/multi-factor-auth-required') {
          // The user is a multi-factor user. Second factor challenge is required.
          const resolver = getMultiFactorResolver(auth, error);
          localStorage.setItem('errorFire', JSON.stringify(error));
          if (resolver.hints[0].factorId ===
            PhoneMultiFactorGenerator.FACTOR_ID) {
            const phoneInfoOptions = {
                multiFactorHint: resolver.hints[0],
                session: resolver.session
            };
            const phoneAuthProvider = new PhoneAuthProvider(auth);
            // Send SMS verification code
            return phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier)
                .then(function (verificationId) {
                  navigate('/verification')
                  return
                    // Ask user for the SMS verification code. Then:
                   /*  const cred = PhoneAuthProvider.credential(
                        verificationId, verificationCode);
                    const multiFactorAssertion =
                        PhoneMultiFactorGenerator.assertion(cred);
                    // Complete sign-in.
                    return resolver.resolveSignIn(multiFactorAssertion) */
                })
                .then(function (userCredential) {
                    // User successfully signed in with the second factor phone number.
                });
              }
      }
       /*  const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage) */
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
          <input id="sign-in-button" type="button" className='button-login' value='Ingresar' onClick={onLogin} />
        </form>
      </div>
      <div>
        <img alt='personas-felices' src='loginimg.jpg' className='img-login'></img>
      </div>
    </section>
  )
}

export default LoginSection