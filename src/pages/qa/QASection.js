import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const QAContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const QuestionCard = styled(motion.div)`
  background: rgba(26, 32, 39, 0.95);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid rgba(108, 99, 255, 0.1);
`;

const QASection = () => {
  const [questions] = useState([
    {
      id: 1,
      title: 'How to implement authentication in React?',
      content: 'I am building a React application and need help with JWT authentication...',
      author: 'John Doe',
      votes: 15,
      answers: 3,
      tags: ['react', 'authentication', 'jwt'],
    },
    // Add more questions
  ]);

  return (
    <QAContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="neon-text"
        style={{ marginBottom: '30px' }}
      >
        Questions & Answers
      </motion.h1>

      {questions.map((question, index) => (
        <QuestionCard
          key={question.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h2>{question.title}</h2>
          <p>{question.content}</p>
          <div style={{ marginTop: '10px' }}>
            {question.tags.map(tag => (
              <span key={tag} style={{ marginRight: '10px', color: 'var(--primary)' }}>
                #{tag}
              </span>
            ))}
          </div>
        </QuestionCard>
      ))}
    </QAContainer>
  );
};

export default QASection;