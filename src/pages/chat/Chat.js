import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ChatContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 20px;
  height: calc(100vh - 80px);
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactsList = styled.div`
  background: rgba(26, 32, 39, 0.95);
  border-radius: 15px;
  padding: 20px;
  overflow-y: auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(108, 99, 255, 0.1);
`;

const ChatWindow = styled.div`
  background: rgba(26, 32, 39, 0.95);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(108, 99, 255, 0.1);
`;

const MessageList = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const MessageInput = styled.div`
  padding: 20px;
  border-top: 1px solid rgba(108, 99, 255, 0.1);
  display: flex;
  gap: 10px;

  input {
    flex: 1;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(108, 99, 255, 0.2);
    border-radius: 8px;
    color: var(--text);
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: var(--primary);
    }
  }

  button {
    padding: 12px 24px;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const Contact = styled(motion.div)`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${props => props.active ? 'rgba(108, 99, 255, 0.2)' : 'transparent'};

  &:hover {
    background: rgba(108, 99, 255, 0.1);
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
  }
`;

const Message = styled(motion.div)`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.sent ? 'flex-end' : 'flex-start'};

  .bubble {
    max-width: 70%;
    padding: 12px 16px;
    border-radius: 16px;
    background: ${props => props.sent ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)'};
    color: ${props => props.sent ? 'white' : 'var(--text)'};
  }

  .time {
    font-size: 12px;
    color: #888;
    margin-top: 5px;
  }
`;

const Chat = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const contacts = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Can you help me with React?' },
    // Add more contacts
  ];

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: Date.now(),
        text: message,
        sent: true,
        time: new Date().toLocaleTimeString()
      }]);
      setMessage('');
    }
  };

  return (
    <ChatContainer>
      <ContactsList>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginBottom: '20px' }}
        >
          Chats
        </motion.h3>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            active={selectedContact?.id === contact.id}
            onClick={() => setSelectedContact(contact)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="avatar">
              {contact.name[0]}
            </div>
            <div>
              <div>{contact.name}</div>
              <small style={{ color: '#888' }}>{contact.lastMessage}</small>
            </div>
          </Contact>
        ))}
      </ContactsList>

      <ChatWindow>
        <MessageList>
          {messages.map((msg) => (
            <Message
              key={msg.id}
              sent={msg.sent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="bubble">{msg.text}</div>
              <div className="time">{msg.time}</div>
            </Message>
          ))}
        </MessageList>

        <MessageInput>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <motion.button
            onClick={handleSend}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </MessageInput>
      </ChatWindow>
    </ChatContainer>
  );
};

export default Chat;