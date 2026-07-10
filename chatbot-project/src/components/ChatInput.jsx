import {useState} from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
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