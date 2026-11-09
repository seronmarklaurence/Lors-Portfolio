import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import "./MessageStatuscss.css";

export const MessageStatus = ({ message, classN }) => {
  return (
    <div className="message-status-wrapper">
      <div className={`status-alert ${classN}`}>
        {classN === 'error-text' ? <FaTimesCircle /> : <FaCheckCircle />}
        {message}
      </div>
    </div>
  );
};
