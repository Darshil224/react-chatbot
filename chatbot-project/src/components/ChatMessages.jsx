    import { useRef, useEffect } from 'react';
    import { ChatMessage } from './ChatMessage';
    import './ChatMessages.css';
      
      function ChatMessages({ chatMessages }) {
        const chatMessagesRef = useRef(null);

        useEffect(() => {
          // console.log(chatMessagesRef.current);
          const containerElem = chatMessagesRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [chatMessages]);

        
        return (
          <div className="chat-messages-container" ref={chatMessagesRef}>
            {/*<button onClick={sendMessage}>Send Message</button>*/}
            {chatMessages.map((singleChatMessage) => {
              return (
                <ChatMessage
                  message={singleChatMessage.message}
                  sender={singleChatMessage.sender}
                  key={singleChatMessage.id}
                />
              );
            })}
          </div>
        );
      }
      export default ChatMessages; //default export: its useful, if we wanna export one thing from the file