import './chatbotSection.css'


const ChatbotSectionTres = () => {
  return (
    <>
      <div class='section-info' id='vistapaso-3'>
        <div class='info'>
          <div class='empty'></div>
          <div class='paso-1'>
            <h1>Paso 3</h1>
            <p>Pega la información entregada por los bots aquí</p>
            <textarea id="textArea" name="miTexto" placeholder="Escribe aquí..."></textarea>
            <button class='text-btn'>Generar ticket</button>
          </div>
          <div class='siguiente'>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatbotSectionTres;