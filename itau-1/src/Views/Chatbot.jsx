import Navbar from '../Components/Navbar';
import ChatbotSection from '../Components/chatbotSection';
import RobotIn from '../Components/Chat-inventory';
import RobotReInc from '../Components/Chat-req-inc';
import './chat.css'
import { useState } from 'react';


export default function ChatBot() {
  const [showChatOne, setShowChatOne] = useState(false);
  const [showChatTwo, setShowChatTwo] = useState(false);
   
  const handleShowChatOne = () => {
    setShowChatOne(true);
   }

   const handleShowChatTwo = () => {
    setShowChatTwo(true);
   }

  return (
    <div className='chat'>
      <Navbar />
      <div className='chat-section'>
        <div>
          <ChatbotSection
            handleShowChatOne={handleShowChatOne}
            handleShowChatTwo={handleShowChatTwo} />
        </div>
        <div className='chatbox'>
          { showChatOne && (<div className='chat-1'><RobotIn /></div>)}
          { showChatTwo && (<div className='chat-2'><RobotReInc /></div>)}
        </div>
      </div>
    </div>
  );
};
