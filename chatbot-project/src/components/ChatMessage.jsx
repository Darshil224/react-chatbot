import RobotProfilePicture from '../assets/robot.png'
import UserProfilePicture from '../assets/user.png'
import './ChatMessage.css';
      
      export function ChatMessage(props) {
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