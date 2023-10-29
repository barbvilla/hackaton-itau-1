
import { useState } from 'react';
import Navbar from '../Components/UserNavbar';
import ChatbotSectionUno from '../Components/chatbotSectionUno';
import ChatbotSectionDos from '../Components/chatbotSectionDos';
import ChatbotSectionTres from '../Components/chatbotSectionTres'
import RobotIn from '../Components/Chat-inventory';
import RobotReInc from '../Components/Chat-req-inc';
import './chat.css'


export default function ChatBot() {
  const [showChatUno, setShowChatUno] = useState(false);
  const [showChatDos, setShowChatDos] = useState(false);

  const handleShowChatUno = () => {
    setShowChatUno(true);
  };

  const handleShowChatDos = () => {
    setShowChatDos(true);
  };


  return (
    <>
      <Navbar />
      <div className='chat'>
        <div className='chat-section'>
          <ChatbotSectionUno handleShowChatUno={handleShowChatUno} />
          <div className='chatbox'>
            <div className='chat-1'>
              {showChatUno && (<RobotIn />)}
            </div>
          </div>
          <div className='abajo'>
            <a href="#vistapaso-2"><button alt='next' class='next' ><img src='truearrow.png' alt='arrow'></img></button></a>
          </div>
        </div>
        <div className='chat-section'>
          <ChatbotSectionDos handleShowChatDos={handleShowChatDos} />
          <div className='chatbox'>
            <div className='chat-2'>
              {showChatDos && (<RobotReInc />)}
            </div>
          </div>
          <div className='abajo'>
            <a href="#vistapaso-3"><button alt='next' class='next' ><img src='truearrow.png' alt='arrow'></img></button></a>
          </div>
        </div>
        <div className='chat-section'>
          <ChatbotSectionTres />
          <div className='chatbox'>
          </div>
        </div>
      </div>
    </>
  );
};