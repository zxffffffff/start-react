import React from 'react';
import CodeMirror, { ViewUpdate } from '@uiw/react-codemirror';
import { githubLightInit } from '@uiw/codemirror-theme-github';
import { javascript } from '@codemirror/lang-javascript';

export default function CodeEditor() {
  const [value, setValue] = React.useState("console.log('hello world!');");
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