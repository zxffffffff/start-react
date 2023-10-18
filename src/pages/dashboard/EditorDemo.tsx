import { Divider, Layout } from "antd";
import CodeEditor from "../../components/CodeEditor";
import CodeEditor2 from "../../components/CodeEditor2";
import RichEditor from "../../components/RichEditor";
import MarkDown from "../../components/MarkDown";

export default function EditorDemo() {
  return (
    <>
      <Layout>
        <CodeEditor />
        <Divider />
        <CodeEditor2 />
        <Divider />
        <RichEditor />
        <Divider />
        <MarkDown />
      </Layout>
    </>
  );
}
