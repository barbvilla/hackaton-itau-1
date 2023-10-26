import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './WelcomeSection.css';

const WelcomeSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chatbot')
  }

  const logOut = () => {
    signOut(auth).then(() => {
      navigate('/login');
    })
  }
  return (

      <>
        <h1 class='bienvenida'>¡Te damos la bienvenida a iBot!</h1>
        <div class='btn-section'>
          <img alt='botón chatbot' src='asistencia-btn.png' class='btn-chatbot' onClick={handleClick}></img>
        </div>
        <section class='squares'>
          <div class='square-1'>
            <div class='titulo'>
              <h3>Novedades iBot</h3>
            </div>
            <div class='info'>
              <ul>
                <li>Actualizaciones recientes. 20.10.2023</li>
                <li>Actualizaciones recientes. 20.10.2023</li>
                <li>Chatbot y sus beneficios</li>
              </ul>
            </div>
          </div>
          <div class='square-2'>
            <div class='titulo'>
              <h3>Preguntas frecuentes</h3>
            </div>
            <div class='info'>
              <li>¿Cómo inicio una conversación?</li>
              <li>Solicitar un requerimiento</li>
              <li>Reportar un incidente</li>
            </div>
          </div>
        </section>
      </>
      )
}

export default WelcomeSection;