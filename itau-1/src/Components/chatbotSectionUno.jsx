import './chatbotSection.css'

const ChatbotSectionUno = ({handleShowChatUno}) => {
  return (
    <>

      <div class='section-info'>
        <div class='info'>
          <div class='empty'></div>
          <div class='paso-1'>
            <h1>Paso 1</h1>
            <p>¿No sabes cuál es tu robot?</p>
            <button class='revisa-btn' onClick={handleShowChatUno}><img  src='botcito.png' alt='boton'></img>Revisa cuál es tu robot aquí</button>
          </div>
          <div class='siguiente'>
            <div>
            <p>Cuando obtengas tu bot</p>
            <h3>Continúa al paso 2</h3>
            </div>
            <a href="#vistapaso-2"><button alt='next' class='next' ><img src='truearrow.png' alt='arrow'></img></button></a>
          </div>
        </div>
      </div>
    </>
  )
}


export default ChatbotSectionUno;