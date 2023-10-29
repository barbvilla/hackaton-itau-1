import { FullPageChat } from 'flowise-embed-react'

const RobotReInc = () => {
  return (
    <div className='chat'>
      <FullPageChat
        chatflowid="dc58a2b2-2fd6-48bc-80ff-79e91b36810b"
        apiHost="https://itau-1-tf.onrender.com"
        theme={{          
          chatWindow: {
            welcomeMessage: "¡Hola! Escribe tu solicitud acá y con gusto te ayudaré.",
            backgroundColor: "#ffffff",
            height: 500,
            width: 400,
            fontSize: 16,
            poweredByTextColor: "#FFFF",
            botMessage: {
              backgroundColor: "#f7f8ff",
              textColor: "#303235",
              showAvatar: true,
              avatarSrc: "bot-icon.png",
            },
            userMessage: {
              backgroundColor: "#3B81F6",
              textColor: "#ffffff",
              showAvatar: true,
              avatarSrc: "smile.png",
            },
            textInput: {
              placeholder: "Escribe tu solicitud",
              backgroundColor: "#ffffff",
              textColor: "#303235",
              sendButtonColor: "#003399",
            }
          }
        }}
      />
    </div>
  )
}

export default RobotReInc;