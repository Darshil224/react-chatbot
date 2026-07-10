import { useState } from 'react'
// import { ChatInput } from './components/ChatInput.jsx'; //no need to add .js or .jsx in file name, Vite adds it automatically
import { ChatInput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage'; //importing named export: we use curly braces
import ChatMessages from './components/ChatMessages'; //importing the default export... note we dont use curly braces for this.
import { WelcomeMessage } from './components/WelcomeMessage';
import { Chatbot } from 'supersimpledev';
import './App.css'
import RobotProfilePicture from './assets/robot.png'
import UserProfilePicture from './assets/user.png'

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
