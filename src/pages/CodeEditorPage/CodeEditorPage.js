import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import styled from 'styled-components';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

const EditorContainer = styled.div`
  padding: 20px;
  background-color: #1e1e1e;
  color: #fff;
  min-height: 100vh;
  margin-left: 250px;
  max-width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px;
    padding-top: 60px;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
`;

const EditorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const EditorBox = styled.div`
  background: #2d2d2d;
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  
  h3 {
    color: #fff;
    margin-bottom: 10px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .CodeMirror {
    height: 300px !important;
    border-radius: 4px;
    font-size: 14px;
    width: 100% !important;

    @media (max-width: 768px) {
      height: 200px !important;
      font-size: 13px;
    }
  }

  .CodeMirror-scroll {
    overflow-x: auto !important;
    overflow-y: auto !important;
  }

  .CodeMirror-hscrollbar {
    display: none !important;
  }
`;

const OutputSection = styled.div`
  width: 100%;
  
  h2 {
    margin-bottom: 15px;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const OutputBox = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  color: #000;
  min-height: 200px;
  overflow: auto;
  width: 100%;
  word-wrap: break-word;
  
  @media (max-width: 768px) {
    padding: 15px;
    min-height: 150px;
  }

  iframe {
    width: 100%;
    border: none;
    min-height: 200px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 20px;
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 13px;
    margin-bottom: 15px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    ${Button} {
      flex: 1;
      min-width: calc(33.33% - 7px);
      margin: 0;
    }
  }

  @media (max-width: 480px) {
    ${Button} {
      min-width: 100%;
    }
  }
`;

const CodeEditorPage = () => {
  const [html, setHtml] = useState('<h1>Hello World!</h1>');
  const [css, setCss] = useState('body { background: #f0f0f0; }');
  const [js, setJs] = useState('document.getElementById("currentTime").innerText = new Date().toLocaleTimeString();');

  const outputContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <p id="currentTime"></p>
        <script>${js}</script>
      </body>
    </html>
  `;

  const handleRun = () => {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
      const iframe = document.createElement('iframe');
      iframe.srcdoc = outputContent;
      outputDiv.innerHTML = '';
      outputDiv.appendChild(iframe);
    }
  };

  const handleSave = () => {
    localStorage.setItem('savedCode', JSON.stringify({ html, css, js }));
    alert('Code saved successfully!');
  };

  const handleClear = () => {
    setHtml('<h1>Hello World!</h1>');
    setCss('body { background: #f0f0f0; }');
    setJs('document.getElementById("currentTime").innerText = new Date().toLocaleTimeString();');
  };

  return (
    <EditorContainer>
      <h1>Code Editor</h1>
      <ButtonContainer>
        <Button onClick={handleRun}>▶️ Run</Button>
        <Button onClick={handleSave}>💾 Save</Button>
        <Button onClick={handleClear}>🗑️ Clear</Button>
      </ButtonContainer>

      <EditorsGrid>
        <EditorBox>
          <h3>index.html</h3>
          <CodeMirror
            value={html}
            options={{
              mode: 'htmlmixed',
              theme: 'material',
              lineNumbers: true,
              lineWrapping: true,
              autoCloseTags: true,
              autoCloseBrackets: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setHtml(value);
            }}
          />
        </EditorBox>

        <EditorBox>
          <h3>styles.css</h3>
          <CodeMirror
            value={css}
            options={{
              mode: 'css',
              theme: 'material',
              lineNumbers: true,
              lineWrapping: true,
              autoCloseBrackets: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setCss(value);
            }}
          />
        </EditorBox>

        <EditorBox>
          <h3>script.js</h3>
          <CodeMirror
            value={js}
            options={{
              mode: 'javascript',
              theme: 'material',
              lineNumbers: true,
              lineWrapping: true,
              autoCloseBrackets: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setJs(value);
            }}
          />
        </EditorBox>
      </EditorsGrid>

      <OutputSection>
        <h2>Output</h2>
        <OutputBox>
          <div
            id="output"
          />
        </OutputBox>
      </OutputSection>
    </EditorContainer>
  );
};

export default CodeEditorPage;