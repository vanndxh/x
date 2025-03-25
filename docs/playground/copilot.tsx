import {
  CloseOutlined,
  CloudUploadOutlined,
  CommentOutlined,
  CopyOutlined,
  DislikeOutlined,
  LikeOutlined,
  LinkOutlined,
  OpenAIFilled,
  PlusOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import {
  Attachments,
  AttachmentsProps,
  Bubble,
  Conversations,
  Sender,
  Suggestion,
  Welcome,
  useXAgent,
  useXChat,
} from '@ant-design/x';
import { BubbleDataType } from '@ant-design/x/es/bubble/BubbleList';
import { Conversation } from '@ant-design/x/es/conversations';
import { Button, GetProp, GetRef, Popover, Skeleton, message } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';

const useStyle = createStyles(({ css }) => {
  return {
    copilot: css`
      width: 100%;
      min-width: 1000px;
      height: 722px;
      display: flex;
      border-radius: 16px;
    `,
    copilotWorkarea: css`
      flex: 1;
      height: 100%;
      background: #eef0f4;
    `,
    workareaHeader: css`
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 48px 14px 28px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    `,
    headerTitle: css`
      font-weight: 600;
      font-size: 15px;
      color: #102953;
    `,
    headerButton: css`
      background-image: linear-gradient(78deg, #8054f2 7%, #3895da 95%);
      border-radius: 12px;
      color: #fff;
      cursor: pointer;
      padding: 0 8px;

      &:hover {
        opacity: 0.8;
      }
    `,
    workareaBody: css`
      border-radius: 16px;
      overflow: auto;
      height: calc(100% - 32px - 32px - 52px);
      margin: 16px 48px;
      background: #fff;
      padding: 16px;
    `,
    copilotChat: css`
      position: relative;
      height: 100%;
    `,
    chatHeader: css`
      height: 24px;
      width: calc(100% - 32px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 16px;
    `,
    headerAction: css`
      display: flex;
      align-items: center;
    `,
    chatMessage: css`
      overflow: auto;
      padding: 16px;
    `,
    chatWelcome: css`
      padding: 12px 16px;
      background-image: linear-gradient(107deg, #f2f9fe 0%, #f7f3ff 100%);
      border-radius: 2px 12px 12px 12px;
      margin-bottom: 12px;
    `,
    question: css`
      padding: 12px;
      border-radius: 12px;
      margin-top: 12px;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s;
      border: 1px solid rgba(0, 0, 0, 0.1);
      width: fit-content;

      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }
    `,
    sendArea: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 12px;
      width: calc(100% - 24px);
    `,
    sendAction: css`
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      gap: 8px;
    `,
  };
});

const mockSessionList = [
  {
    key: '5',
    label: '新会话',
    group: '今天',
  },
  {
    key: '4',
    label: 'Ant Design X 全新升级了什么？',
    group: '今天',
  },
  {
    key: '3',
    label: '全新 AGI 混合界面',
    group: '今天',
  },
  {
    key: '2',
    label: '如何快速安装和引入组件？',
    group: '昨天',
  },
  {
    key: '1',
    label: 'Ant Design X 是什么？',
    group: '昨天',
  },
];
const mockSuggestions = [
  { label: 'Write a report', value: 'report' },
  { label: 'Draw a picture', value: 'draw' },
  {
    label: 'Check some knowledge',
    value: 'knowledge',
    icon: <OpenAIFilled />,
    children: [
      { label: 'About React', value: 'react' },
      { label: 'About Ant Design', value: 'antd' },
    ],
  },
];
const mockQuestions = [
  'Ant Design X 全新升级了什么？',
  'Ant Design X 组件资产有哪些？',
  '如何快速安装和引入组件？',
];

const Copilot = () => {
  const { styles } = useStyle();
  message.config({ top: 80 });
  const attachmentsRef = React.useRef<GetRef<typeof Attachments>>(null);

  const [copilotOpen, setCopilotOpen] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [attachmentsOpen, setAttachmentsOpen] = useState(false);
  const [files, setFiles] = React.useState<GetProp<AttachmentsProps, 'items'>>([]);
  const [sessionList] = React.useState<Conversation[]>(mockSessionList);
  const [curSession, setCurSession] = React.useState(sessionList[0].key);

  const [agent] = useXAgent<BubbleDataType>({
    request: async ({ message }, { onSuccess, onUpdate }) => {
      const fullContent = `Streaming output instead of Bubble typing effect. You typed: ${message?.content}`;
      let currentContent = '';

      const id = setInterval(() => {
        currentContent = fullContent.slice(0, currentContent.length + 2);
        onUpdate({ content: currentContent, role: 'ai' });

        if (currentContent === fullContent) {
          clearInterval(id);
          onSuccess({ content: fullContent, role: 'ai' });
          setLoading(false);
        }
      }, 100);
    },
  });

  const { messages, onRequest, setMessages } = useXChat<BubbleDataType, Record<string, any>>({
    agent,
  });

  const handleUserSubmit = (val: string) => {
    onRequest({ content: val, role: 'user' });
    setLoading(true);
  };

  return (
    <div className={styles.copilot}>
      <div className={styles.copilotWorkarea}>
        <div className={styles.workareaHeader}>
          <div className={styles.headerTitle}>
            <img
              src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*eco6RrQhxbMAAAAAAAAAAAAADgCCAQ/original"
              draggable={false}
              alt="logo"
              width={20}
              height={20}
              style={{ marginRight: 6 }}
            />
            Ant Design X
          </div>
          {!copilotOpen && (
            <div onClick={() => setCopilotOpen(true)} className={styles.headerButton}>
              ✨ AI Copilot
            </div>
          )}
        </div>

        <div className={styles.workareaBody}>
          <Skeleton />
        </div>
      </div>

      <div className={styles.copilotChat} style={{ width: copilotOpen ? 400 : 0 }}>
        <div className={styles.chatHeader}>
          <div className={styles.headerTitle}>✨ AI Copilot</div>
          <div className={styles.headerAction}>
            <Button
              type="text"
              icon={<PlusOutlined />}
              onClick={() => {
                if (messages?.length) {
                  setMessages([]);
                } else {
                  message.error('当前已是新对话');
                }
              }}
            />
            <Popover
              placement="bottom"
              styles={{ body: { padding: 0, maxHeight: 600 } }}
              content={
                <Conversations
                  items={sessionList?.map((i) =>
                    i.key === curSession ? { ...i, label: `[当前会话] ${i.label}` } : i,
                  )}
                  activeKey={curSession}
                  groupable
                  onActiveChange={setCurSession}
                />
              }
            >
              <Button type="text" icon={<CommentOutlined />} />
            </Popover>
            <Button type="text" icon={<CloseOutlined />} onClick={() => setCopilotOpen(false)} />
          </div>
        </div>

        <div
          className={styles.chatMessage}
          style={{
            height: `calc(100% - ${attachmentsOpen ? 370 : 210}px)`,
          }}
        >
          {messages?.length ? (
            <Bubble.List
              items={messages?.map((i) => i.message)}
              roles={{
                ai: {
                  placement: 'start',
                  typing: { step: 5, interval: 20 },
                  footer: loading ? null : (
                    <div style={{ display: 'flex' }}>
                      <Button type="text" size="small">
                        <ReloadOutlined />
                      </Button>
                      <Button type="text" size="small">
                        <CopyOutlined />
                      </Button>
                      <Button type="text" size="small">
                        <LikeOutlined />
                      </Button>
                      <Button type="text" size="small">
                        <DislikeOutlined />
                      </Button>
                    </div>
                  ),
                },
                user: {
                  placement: 'end',
                  styles: {
                    content: {
                      background: '#ffffff',
                      boxShadow:
                        '0px 2px 4px 0px #0000000a, 0px 0px 6px -4px #0000000a, 0px 0px 2px 0px #0000000d',
                    },
                  },
                },
              }}
            />
          ) : (
            <>
              <Welcome
                variant="borderless"
                title="👋 Hello, I'm Ant Design X"
                description="Base on Ant Design, AGI product interface solution, create a better intelligent vision~"
                className={styles.chatWelcome}
              />
              <span style={{ color: 'rgba(0, 0, 0, 0.7)', marginTop: 20 }}>我可以帮您：</span>
              {mockQuestions.map((i) => (
                <div className={styles.question} key={i} onClick={() => handleUserSubmit(i)}>
                  {i}
                </div>
              ))}
            </>
          )}
        </div>

        <div className={styles.sendArea}>
          <div className={styles.sendAction}>
            <Button onClick={() => handleUserSubmit('全新升级了什么？')}>了解升级</Button>
            <Button onClick={() => handleUserSubmit('组件资产有哪些？')}>组件资产</Button>
            <Button>更多</Button>
          </div>

          <Suggestion
            items={mockSuggestions}
            onSelect={(itemVal) => {
              setInputValue(`[${itemVal}]:`);
            }}
          >
            {({ onTrigger, onKeyDown }) => {
              return (
                <Sender
                  loading={loading}
                  value={inputValue}
                  onChange={(v) => {
                    if (v === '/') {
                      onTrigger();
                    } else if (!v) {
                      onTrigger(false);
                    }
                    setInputValue(v);
                  }}
                  onSubmit={() => {
                    handleUserSubmit(inputValue);
                    setInputValue('');
                  }}
                  onCancel={() => {
                    setLoading(false);
                  }}
                  allowSpeech
                  placeholder="问我问题或输入 / 使用技能"
                  onKeyDown={onKeyDown}
                  header={
                    <Sender.Header
                      title="上传文件"
                      styles={{ content: { padding: 0 } }}
                      open={attachmentsOpen}
                      onOpenChange={setAttachmentsOpen}
                      forceRender
                    >
                      <Attachments
                        ref={attachmentsRef}
                        beforeUpload={() => false}
                        items={files}
                        onChange={({ fileList }) => setFiles(fileList)}
                        placeholder={(type) =>
                          type === 'drop'
                            ? { title: 'Drop file here' }
                            : {
                                icon: <CloudUploadOutlined />,
                                title: 'Upload files',
                                description: 'Click or drag files to this area to upload',
                              }
                        }
                      />
                    </Sender.Header>
                  }
                  prefix={
                    <Button
                      type="text"
                      icon={<LinkOutlined />}
                      onClick={() => setAttachmentsOpen(!attachmentsOpen)}
                    />
                  }
                  onPasteFile={(_, files) => {
                    for (const file of files) {
                      attachmentsRef.current?.upload(file);
                    }
                    setAttachmentsOpen(true);
                  }}
                />
              );
            }}
          </Suggestion>
        </div>
      </div>
    </div>
  );
};

export default Copilot;
