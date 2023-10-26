import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <>
      <h1 class='bienvenida'>¡Te damos la bienvenida a iBot!</h1>
      <div class='btn-section'>
        <img alt='botón chatbot' src='asistencia-btn.png' class='btn-chatbot'></img>
      </div>
      <section class='squares'>
        <div class='square-1'>
          <div class='titulo'>
            <h3 class='head'>Novedades iBot</h3>
          </div>
          <div class='info'>
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
          <div class='info'>
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
    </>
  )
}

export default WelcomeSection;