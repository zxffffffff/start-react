import React from 'react';
import CodeMirror, { ViewUpdate } from '@uiw/react-codemirror';
import { githubLightInit } from '@uiw/codemirror-theme-github';
import { javascript } from '@codemirror/lang-javascript';

const code = `// 社区开源，简单易用

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return <CodeMirror value={value} height="200px" extensions={[javascript({ jsx: true })]} onChange={onChange} />;
}
export default App;`;

export default function CodeEditor() {
  const [value, setValue] = React.useState(code);
  const onChange = React.useCallback((val: string, viewUpdate: ViewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return <CodeMirror
    theme={githubLightInit({
      settings: {
        caret: '#c6c6c6',
        fontFamily: 'monospace',
      }
    })}
    extensions={[javascript({ jsx: true })]}
    value={value}
    height="200px"
    onChange={onChange} />;
}