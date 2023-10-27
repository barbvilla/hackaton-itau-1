import './chatbotSection.css'

const ChatbotSection = () => {
  return (
    <>

      <div class='todo'>
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
      <div class='todo' id='vistapaso-2'>
        <div class='info'>
          <div class='empty'></div>
          <div class='paso-1'>
            <h1>Paso 2</h1>
            <p>¿Necesitas generar un ticket?</p>
            <img class='revisa-btn' src='mi-robot.png' alt='boton'></img>
          </div>
          <div class='siguiente'>
            <div>
            <p>Cuando obtengas tus datos</p>
            <h3>Continúa al paso 3</h3>
            </div>
            <img src='next.png' alt='next' class='next'></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatbotSection;