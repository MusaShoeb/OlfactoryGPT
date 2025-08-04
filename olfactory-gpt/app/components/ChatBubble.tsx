import { UIMessage } from "ai"

const ChatBubble = ({message} : {message: UIMessage}) => {
    const {role, parts} = message
    return (
        <div className= {`${role === 'user' ? 'bg-white text-black' : 'bg-black text-white'} rounded-lg p-[5px] m-[5px]`}>
           {parts.map((part, index) => {
            switch (part.type) {
              case 'text':
                return <div key = {index}>{part.text}</div>;
            }
          })}
        </div>
    )
}

export default ChatBubble 