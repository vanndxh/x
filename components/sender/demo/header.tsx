import { CloudUploadOutlined, LinkOutlined } from '@ant-design/icons';
import { Sender, XRequest } from '@ant-design/x';
import { App, Button, Flex, Typography, theme } from 'antd';
import React from 'react';

const Demo: React.FC = () => {
  const { message } = App.useApp();
  const { token } = theme.useToken();

  const [open, setOpen] = React.useState(false);

  const modelRequest = XRequest({
    baseURL: 'https://api.siliconflow.cn/v1/chat/completions',
    model: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-7B',
    dangerouslyApiKey: 'Bearer sk-ravoadhrquyrkvaqsgyeufqdgphwxfheifujmaoscudjgldr',
  });

  console.log(modelRequest);

  const headerNode = (
    <Sender.Header title="Upload Sample" open={open} onOpenChange={setOpen}>
      <Flex vertical align="center" gap="small" style={{ marginBlock: token.paddingLG }}>
        <CloudUploadOutlined style={{ fontSize: '4em' }} />
        <Typography.Title level={5} style={{ margin: 0 }}>
          Drag file here (just demo)
        </Typography.Title>
        <Typography.Text type="secondary">
          Support pdf, doc, xlsx, ppt, txt, image file types
        </Typography.Text>
        <Button
          onClick={() => {
            message.info('Mock select file');
          }}
        >
          Select File
        </Button>
      </Flex>
    </Sender.Header>
  );

  return (
    <Flex style={{ height: 350 }} align="end">
      <Sender
        header={headerNode}
        prefix={
          <Button
            type="text"
            icon={<LinkOutlined />}
            onClick={() => {
              setOpen(!open);
            }}
          />
        }
        placeholder="← Click to open"
        onSubmit={() => {
          message.success('Send message successfully!');
        }}
      />
    </Flex>
  );
};

export default () => (
  <App>
    <Demo />
  </App>
);
