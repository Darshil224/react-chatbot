import { useState, useRef, useEffect } from 'react'
import {Chatbot} from 'supersimpledev'
import './App.css'
import RobotProfilePicture from './assets/robot.png'
import UserProfilePicture from './assets/user.png'

function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");

        function saveInputText(event) {
          setInputText(event.target.value);
        }
        function sendMessage() {
          // console.log(inputText);

          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(),
            },
          ];
          setChatMessages(newChatMessages);

          //using chatbot.js external library to get a response from chatbot:
          const response = Chatbot.getResponse(inputText);
          // console.log(response);
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID(),
            },
          ]);

          setInputText("");
        }
        return (
          <div className="chat-input-container">
            {/* This is a JSX comment */}
            {/* JSX is more stricter. So we always have to use cloasing tags as well unlike html... also <input /> is shortcut for <input></input>, if there is nothing to write inside that imput tag*/}
            <input
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={saveInputText}
              value={inputText}
              className="chat-input"
            ></input>
            <button onClick={sendMessage} className="send-button">
              Send
            </button>
          </div>
        );
      }
      function ChatMessage(props) {
        //const message = props.message;
        //const sender = props.sender;
        const { message, sender } = props; //destructuring shortcut
        if (sender === "robot") {
          return (
            <div className="chat-message-robot">
              <img src={RobotProfilePicture} className="chat-message-profile" />
              <div className="chat-message-text">{message}</div>
            </div>
          );
        }

        //here using div to group elements because div is a block element and we want the message to take up entire line.
        return (
          <div className="chat-message-user">
            <div className="chat-message-text">{message}</div>

            <img src={UserProfilePicture} className="chat-message-profile"></img>
          </div>
        );
      }

     
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

      //component to display the welcome message if the chatmessages is empty
      function WelcomeMessage({ chatMessages }) {
        if (chatMessages.length === 0) {
          return (
            <div className="welcome-message-container">
              <div className="welcome-message">
                👋 <strong>Welcome to the React Chatbot!</strong>
                <br />
                <br />
                Start a conversation by typing a message below. You can ask
                about the current date, say hello, or simply explore how this
                chatbot works while I learn React.
              </div>
            </div>
          );
        }
        return null;
      }

      //storing the generated html of the Components:-
      function App() {
        

        const initialChatMessages = [];
        
        const [chatMessages, setChatMessages] =
          useState(initialChatMessages); //Array destructuring

        return (
          <div className="app-container">
            

            <WelcomeMessage chatMessages={chatMessages} />

            <ChatMessages chatMessages={chatMessages} />
            {/*{ChatInput()}*/}
            {/*<ChatInput></ChatInput>*/}
            {/*called COMPONENT SYNTAX; creating our own HTML element*/}
            {/* This works same as above line :-  {ChatInput()} */}
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
            {/* <ChatInput /> is Shortcut for <ChatInput></ChatInput>, only if nothing in between*/}
          </div>
        );
      }

export default App
