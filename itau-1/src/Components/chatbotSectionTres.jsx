import './chatbotSection.css'


const ChatbotSectionTres = () =>{
  return(
    <>
     <div class='section-info' id='vistapaso-3'>
        <div class='info'>
          <div class='empty'></div>
          <div class='paso-1'>
            <h1>Paso 3</h1>
            <p>Pega la información entregada por los bots aquí</p>
            <textarea id="miTextArea" name="miTexto" placeholder="Escribe aquí..."></textarea>
          </div>
          <div class='siguiente'>
            <div>
            {/* <p>Cuando obtengas tus datos</p> */}
            <h3>Generar ticket</h3>
            </div>
        
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatbotSectionTres;