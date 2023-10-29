import { FullPageChat } from 'flowise-embed-react'

const RobotIn = () => {
  return (
    <div className='chat'>
      <FullPageChat
        chatflowid="cbc95607-d89e-43f0-85d2-abcdfb9ce586"
        apiHost="https://itau-1-tf.onrender.com"
        theme={{          
          chatWindow: {
            welcomeMessage: "¡Hola! Aquí puedes solicitar información sobre el bot que necesitas, por favor, descríbenos qué tarea necesitas realizar.",
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
              placeholder: "Describe tu robot",
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

export default RobotIn;