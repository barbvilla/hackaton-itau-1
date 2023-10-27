import { FullPageChat } from 'flowise-embed-react'

const RobotIn = () => {
  return (
    <div className='chat'>
      <FullPageChat
        chatflowid="cbc95607-d89e-43f0-85d2-abcdfb9ce586"
        apiHost="https://itau-1-tf.onrender.com"
        theme={{          
          chatWindow: {
            welcomeMessage: "Hola!, ¿en que te puedo ayudar?",
            backgroundColor: "#ffffff",
            height: 550,
            width: 500,
            fontSize: 16,
            poweredByTextColor: "#303235",
            botMessage: {
              backgroundColor: "#f7f8ff",
              textColor: "#303235",
              showAvatar: true,
              avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
            },
            userMessage: {
              backgroundColor: "#3B81F6",
              textColor: "#ffffff",
              showAvatar: true,
              avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
            },
            textInput: {
              placeholder: "Escribe tu pregunta",
              backgroundColor: "#ffffff",
              textColor: "#303235",
              sendButtonColor: "#F25C05",
            }
          }
        }}
      />
    </div>
  )
}

export default RobotIn;