import { useState } from 'react';
import './chatbotSection.css'


const ChatbotSectionTres = () => {
  const [ticket, setTicket] = useState('');
  const [showTicket, setShowTicket] = useState(false);

  const handleShowTicket = () => {
    setShowTicket(true);
  }

  let ticketNumber = Math.ceil(Math.random()*1000)+1;

  return (
    <>
      <div class='section-ticket' id='vistapaso-3'>
        <div class='info-ticket'>
          <div class='empty'></div>
          <div class='paso-1'>
            <h1>Paso 3</h1>
            <p>Pega la información entregada por los bots aquí</p>
            <textarea id="textArea" name="miTexto" placeholder="Escribe aquí..." onChange={(e) =>setTicket(e.target.value)}></textarea>
            <button class='text-btn' onClick={handleShowTicket}>Generar ticket</button>
          </div>
          { showTicket && (<div class='ticket-box'>
            <p>Ticket n° {ticketNumber}</p>
            {ticket}
          </div>) }
        </div>
      </div>
    </>
  )
}

export default ChatbotSectionTres;