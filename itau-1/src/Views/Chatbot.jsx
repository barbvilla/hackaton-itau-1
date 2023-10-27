
import Navbar from '../Components/UserNavbar';
import ChatbotSectionUno from '../Components/chatbotSectionUno';
import ChatbotSectionDos from '../Components/chatbotSectionDos';
import ChatbotSectionTres from '../Components/chatbotSectionTres'
import RobotIn from '../Components/Chat-inventory';
import RobotReInc from '../Components/Chat-req-inc';
import './chat.css'


export default function ChatBot() {
  return (
    <>
      <Navbar />
      <div className='chat'>
        <div className='chat-section'>
          <ChatbotSectionUno />
          <div className='chatbox'>
            <div className='chat-1'><RobotIn /></div>
          </div>
          <div className='abajo'>
          <a href="#vistapaso-2"><img src='next.png' alt='next' class='next' ></img></a>
          </div>
        </div>
        <div className='chat-section'>
          <ChatbotSectionDos />
        <div className='chatbox'>
        <div className='chat-2'><RobotReInc /></div>
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