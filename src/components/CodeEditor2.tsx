import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const code = `// VS Code 使用 Monaco 作为文本编辑器

import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import Editor from '@monaco-editor/react';

function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <>
      <button onClick={showValue}>Show value</button>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
`;

export default function CodeEditor2() {
  const onChange = (value: string | undefined, event: any) => {
    console.log("onChange", value);
  };

  return (
    <MonacoEditor
      height="50vh"
      defaultLanguage="javascript"
      defaultValue={code}
      onChange={onChange}
      theme="vs-dark"
    />
  );
}
