import './chatbotSection.css'

const ChatbotSectionDos = ({handleShowChatDos}) =>{
  return(
    <>
     <div class='section-info' id='vistapaso-2'>
        <div class='info'>
          <div class='empty'></div>
          <div class='paso-1'>
            <h1>Paso 2</h1>
            <p>¿Necesitas generar un ticket?</p>
            <button class='revisa-btn' onClick={handleShowChatDos}><img  src='botcito.png' alt='boton'></img>Obten los datos para tu bot aquí</button>
          </div>
          <div class='siguiente'>
            <div>
            <p>Cuando obtengas tus datos</p>
            <h3>Continúa al paso 3</h3>
            </div>
            <a href="#vistapaso-3"><button alt='next' class='next' ><img src='truearrow.png' alt='arrow'></img></button></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatbotSectionDos;