      import './WelcomeMessage.css';
      
      //component to display the welcome message if the chatmessages is empty
      export function WelcomeMessage({ chatMessages }) {
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