import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';

const EditorContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ControlsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const Button = styled(motion.button)`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: ${props => props.primary ? 'linear-gradient(45deg, var(--primary), var(--secondary))' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
`;

const CodeEditor = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('// Start coding here');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleRun = () => {
    // Implement code execution logic
    console.log('Running code:', code);
  };

  return (
    <EditorContainer>
      <ControlsContainer>
        <Select value={language} onChange={handleLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </Select>
        <Button
          primary
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRun}
        >
          Run Code
        </Button>
      </ControlsContainer>
      <Editor
        height="90vh"
        defaultLanguage={language}
        defaultValue={code}
        theme="vs-dark"
        onChange={handleCodeChange}
        options={{
          minimap: { enabled: false },
          fontSize: 16,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </EditorContainer>
  );
};

export default CodeEditor;