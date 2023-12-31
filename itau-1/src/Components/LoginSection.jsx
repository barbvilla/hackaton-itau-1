import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'
import './LoginSection.css'

export const LoginSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(false);
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        /* sendEmailVerification(auth.currentUser); */
        navigate("/welcome")
      })
      .catch((error) => {
        setShowModal(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  return (
    <section className="login">
      { showModal && (<Modal toggleModal={toggleModal} />) }
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
            placeholder='Ejemplo@itau.cl'
            onChange={(e) => setEmail(e.target.value)} />
          <p>Contraseña</p>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder='Ingresa contraseña'
            onChange={(e) => setPassword(e.target.value)} />
          <input id="sign-in-button" type="button" className='button-login' button-login value='Ingresar' onClick={onLogin} />
          <hr/>
          <input type="button" id='button-problem'  value='Tengo problemas para acceder'/>
        </form>
      </div>
      <div class='img-container'>
        <img alt='personas-felices' src='loginimg.jpg' className='img-login'></img>
      </div>
    </section>
  )
}

export default LoginSection