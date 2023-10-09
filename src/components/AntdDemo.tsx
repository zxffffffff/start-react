import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, ColorPicker, DatePicker, Divider, Input, Popconfirm, Radio, RadioChangeEvent, Row, Select, Space, Tooltip, Typography } from "antd";
import Search from "antd/es/input/Search";
import { useState } from "react";
const { Text, Link } = Typography;

function TextDemo() {
  return <>
    <Space direction="vertical">
      <Text>Ant Design (default)</Text>
      <Text type="secondary">Ant Design (secondary)</Text>
      <Text type="success">Ant Design (success)</Text>
      <Text type="warning">Ant Design (warning)</Text>
      <Text type="danger">Ant Design (danger)</Text>
      <Text disabled>Ant Design (disabled)</Text>
      <Text mark>Ant Design (mark)</Text>
      <Text code>Ant Design (code)</Text>
      <Text keyboard>Ant Design (keyboard)</Text>
      <Text underline>Ant Design (underline)</Text>
      <Text delete>Ant Design (delete)</Text>
      <Text strong>Ant Design (strong)</Text>
      <Text italic>Ant Design (italic)</Text>
      <Link href="https://ant.design" target="_blank">
        Ant Design (Link)
      </Link>
    </Space>
  </>
}

function ButtonDemo() {
  return <>
    <Space wrap>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </Space>
    <Divider />
    <Space direction="vertical">
      <Space wrap>
        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
      </Space>
      <Space wrap>
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
        <Tooltip title="search">
          <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="dashed" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button icon={<SearchOutlined />} href="https://www.google.com" />
      </Space>
    </Space>
  </>
}

function InputDemo() {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
    },
  ];

  return <>
    <Space direction="vertical" size="middle">
      <Space.Compact>
        <Input defaultValue="26888888" />
      </Space.Compact>
      <Space.Compact>
        <Input style={{ width: '20%' }} defaultValue="0571" />
        <Input style={{ width: '80%' }} defaultValue="26888888" />
      </Space.Compact>
      <Space.Compact>
        <Search addonBefore="https://" placeholder="input search text" allowClear />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Input defaultValue="Combine input and button" />
        <Button type="primary">Submit</Button>
      </Space.Compact>
      <Space.Compact>
        <Select defaultValue="Zhejiang" options={options} />
        <Input defaultValue="Xihu District, Hangzhou" />
      </Space.Compact>
      <Space.Compact size="large">
        <Input addonBefore={<SearchOutlined />} placeholder="large size" />
        <Input placeholder="another input" />
      </Space.Compact>
    </Space>
  </>
}

function RadioDemo() {
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];

  const [value1, setValue1] = useState('Apple');
  const [value2, setValue2] = useState('Apple');
  const [value3, setValue3] = useState('Apple');
  const [value4, setValue4] = useState('Apple');

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio1 checked', value);
    setValue1(value);
  };

  const onChange2 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio2 checked', value);
    setValue2(value);
  };

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio3 checked', value);
    setValue3(value);
  };

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio4 checked', value);
    setValue4(value);
  };

  return <>
    <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
    <br />
    <Radio.Group options={optionsWithDisabled} onChange={onChange2} value={value2} />
    <br />
    <br />
    <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" />
    <br />
    <br />
    <Radio.Group
      options={optionsWithDisabled}
      onChange={onChange4}
      value={value4}
      optionType="button"
      buttonStyle="solid"
    />
  </>
}

function GridDemo() {
  const bg_red = { background: '#FF0000', color: 'white' };
  const bg_yellow = { background: 'yellow' };
  const bg_blue = { background: 'blue', color: 'white' };
  const bg_green = { background: 'green', color: 'white' };

  return <>
    <Row>
      <Col span={24} style={bg_red}>col-24/24</Col>
    </Row>
    <Row>
      <Col span={12} style={bg_red}>col-12/24</Col>
      <Col span={12} style={bg_yellow}>col-12/24</Col>
    </Row>
    <Row>
      <Col span={8} style={bg_red}>col-8/24</Col>
      <Col span={8} style={bg_yellow}>col-8/24</Col>
      <Col span={8} style={bg_blue}>col-8/24</Col>
    </Row>
    <Row>
      <Col span={6} style={bg_red}>col-6/24</Col>
      <Col span={6} style={bg_yellow}>col-6/24</Col>
      <Col span={6} style={bg_blue}>col-6/24</Col>
      <Col span={6} style={bg_green}>col-6/24</Col>
    </Row>
  </>
}

export default function AntdDemo() {
  return <>
    <Divider>文字</Divider>
    <TextDemo />
    <Divider>按钮</Divider>
    <ButtonDemo />
    <Divider>输入框</Divider>
    <InputDemo />
    <Divider>单选框</Divider>
    <RadioDemo />
    <Divider>网格</Divider>
    <GridDemo />
    <Divider>其他</Divider>
    <ColorPicker showText />
    <DatePicker />
    <Popconfirm
      title="气泡弹窗标题"
      description="气泡弹窗内容12333333"
      okText="Yes"
      cancelText="No"
    >
      <Button danger>气泡弹窗</Button>
    </Popconfirm>
  </>
}
