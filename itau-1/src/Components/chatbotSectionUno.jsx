import './chatbotSection.css'

const ChatbotSectionUno = () => {
  return (
    <>

      <div class='section-info'>
        <div class='info'>
          <div class='empty'></div>
          <div class='paso-1'>
            <h1>Paso 1</h1>
            <p>¿No sabes cuál es tu bot?</p>
            <img class='revisa-btn' src='mi-robot.png' alt='boton'></img>
          </div>
          <div class='siguiente'>
            <div>
            <p>Cuando obtengas tu bot</p>
            <h3>Continúa al paso 2</h3>
            </div>
            <a href="#vistapaso-2"><img src='next.png' alt='next' class='next' ></img></a>
          </div>
        </div>
      </div>
    </>
  )
}


export default ChatbotSectionUno;