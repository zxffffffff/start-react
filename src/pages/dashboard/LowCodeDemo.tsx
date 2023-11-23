import { ReactNode, useEffect, useRef, useState } from "react";
import { Button, Flex, Layout, Checkbox, Form, Input } from 'antd';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
const { Header, Footer, Sider, Content } = Layout;

const initialConfig = {
  width: '400',
  height: '300',
  fixed_size: true,
};

function DragCtrl(props: any) {
  console.log("DragCtrl", props);

  const initDragPos = { x: 0, y: 0 };
  const [dragPos, setDragPos] = useState(initDragPos);

  const onDragStart = (e: DraggableEvent, data: DraggableData) => {
    console.log('onDragStart', e, data);
  };

  const onDragMove = (e: DraggableEvent, data: DraggableData) => {
    console.log('onDragMove', e, data);
  };

  const onDragStop = (e: DraggableEvent, data: DraggableData) => {
    console.log('onDragStop', e, data);
    setDragPos(initDragPos); // reset pos
  };

  return (
    <Draggable
      position={dragPos}
      onStart={onDragStart}
      onDrag={onDragMove}
      onStop={onDragStop}
    >
      <div>
        {props.children}
      </div>
    </Draggable>
  );
};

export default function LowCodeDemo() {
  const [config, setConfig] = useState(initialConfig);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    setConfig(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
      <Layout>
        <Sider style={{ backgroundColor: '#3ba0e9' }}>

          <Flex style={{ width: 60, backgroundColor: '#3ba0e9' }} vertical>
            <DragCtrl
              code='<Button>button</Button>'
            >
              <Button>button-1</Button>
            </DragCtrl>
            <DragCtrl
              code='<Button>button</Button>'
            >
              <Button>button-2</Button>
            </DragCtrl>
            <div>
              ...
            </div>
          </Flex>

        </Sider>
        <Layout>

          <Header style={{ minHeight: 30, backgroundColor: '#7dbcea' }}>
            <Form
              name="basic"
              layout='inline'
              size='small'
              initialValues={initialConfig}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item label="宽" name="width">
                <Input style={{ width: 60 }} />
              </Form.Item>

              <Form.Item label="高" name="height">
                <Input style={{ width: 60 }} />
              </Form.Item>

              <Form.Item
                name="fixed_size"
                valuePropName="checked"
              >
                <Checkbox>禁止缩放</Checkbox>
              </Form.Item>

              <Form.Item >
                <Button type="primary" htmlType="submit">
                  确定
                </Button>
              </Form.Item>
            </Form>
          </Header>

          <Content style={{ minHeight: Number(config.height), backgroundColor: '#108ee9' }}>
            <div style={{ width: Number(config.width), height: Number(config.height), backgroundColor: 'gray', border: '1px solid black' }}>
              Content
            </div>
          </Content>

        </Layout>
      </Layout>

      <Footer style={{ minHeight: 400, backgroundColor: '#7dbcea' }}>
        Footer
      </Footer>

    </Layout>
  );
}
