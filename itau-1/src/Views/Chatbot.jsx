
import Navbar from '../Components/Navbar';
import ChatbotSection from '../Components/chatbotSection';
import RobotIn from '../Components/Chat-inventory';
import RobotReInc from '../Components/Chat-req-inc';
import './chat.css'


export default function ChatBot() {
  return (
    <div className='chat'>
      <Navbar />
      <div className='chat-section'>
        <div>
          <ChatbotSection />
        </div>
        <div className='chatbox'>
          <div className='chat-1'><RobotIn /></div>
          <div className='chat-2'><RobotReInc /></div>
          <div className='chat-3'><RobotIn /></div>
        </div>
      </div>
    </div>
  );
};