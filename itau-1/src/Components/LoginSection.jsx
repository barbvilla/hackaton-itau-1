import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  RecaptchaVerifier,
  getMultiFactorResolver,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'
import './LoginSection.css'

export const LoginSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const toggleModal = () => {
    setShowModal(false);
  };

  const onLogin = (e) => {
    e.preventDefault();
    const recaptchaVerifier = new RecaptchaVerifier("sign-in-button", {
      "size": "invisible",
      "callback": function (response) {
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
            return phoneAuthProvider
              .verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier)
              .then(function (verificationId) {
                // Ask user for the SMS verification code. Then:
                const verificationCode = prompt(
                  'Ingresa el codigo enviado por sms'
                );
                const cred = PhoneAuthProvider.credential(
                  verificationId,
                  verificationCode
                );
                const multiFactorAssertion =
                  PhoneMultiFactorGenerator.assertion(cred);
                // Complete sign-in.
                return resolver.resolveSignIn(multiFactorAssertion);
              });
          }
        }
        setShowModal(true)
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  const handleVerifificationButton = () => {
    setShowVerificationModal(false)
  }

  return (
    <section className="login">
      {showModal && (<Modal toggleModal={toggleModal} />)}
      <div className="loginform">
        <h1>
          Bienvenido al <br /> asistente virtual.
        </h1>
        <h2>Iniciar sesión</h2>
        <form action='submit'>
          <p>Correo</p>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)} />
          <p>Contraseña</p>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} />
          <input id="sign-in-button" type="button" className='button-login' value='Ingresar' onClick={onLogin} />
        </form>
        {showVerificationModal && (
          <section className="Security">
            <div className="Securityform">
              <h2>Verificación de seguridad</h2>
              <form action="submit">
                <label>Código de verificación por email</label>
                <input
                  type="text"
                  className='codigo'
                  placeholder="Reenviar Código"
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
                <input
                  type="button"
                  className='button-security'
                  value='Enviar'
                  onClick={handleVerifificationButton} />
                <input
                  type="button"
                  className='button-validation'
                  value='Tengo problemas para acceder' />
              </form>
            </div>
          </section>
        )}
      </div>
      <div>
        <img alt='personas-felices' src='loginimg.jpg' className='img-login'></img>
      </div>
    </section>
  )
}

export default LoginSection