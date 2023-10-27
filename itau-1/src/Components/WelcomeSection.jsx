
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
      <div class='pantalla-bienvenida'>
        <h1 class='bienvenida'>¡Te damos la bienvenida a iBot!</h1>
        <div class='btn-section'>
          <img alt='botón chatbot' src='asistencia-btn.png' class='btn-chatbot' onClick={handleClick}></img>
        </div>
        <section class='squares'>
        <div class='square-1'>
          <div class='titulo'>
            <h3 class='head'>Novedades iBot</h3>
          </div>
          <div class='info-welcome'>
            <ul>
              <li>Actualizaciones recientes. 20.10.2023</li>
              <hr/>
              <li>Actualizaciones recientes. 20.10.2023</li>
              <hr/>
              <li>Chatbot y sus beneficios</li>
              <hr/>
            </ul>
          </div>
      </div>
      <div class='square-2'>
          <div class='titulo'>
            <h3 class='head'>Preguntas frecuentes</h3>
          </div>
          <div class='info-welcome'>
            <ul>
              <li>¿Cómo inicio una conversación?</li>
              <hr/>
              <li>Solicitar un requerimiento</li>
              <hr/>
              <li>Reportar un incidente</li>
              <hr/>
            </ul>
          </div>
      </div>
    </section>
    </div>
      </>
      )

}

export default WelcomeSection;