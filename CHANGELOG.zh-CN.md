---
order: 6
title: 更新日志
timeline: true
tag: vVERSION
---

`@ant-design/x` 遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

- 修订版本号：日常 bugfix 更新。
- 次版本号：带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性。

---

## 1.1.1

`2025-04-14`

- Bubble.List
  - 💄 优化 Bubble.List更新时减少不必要的刷新。[#479](https://github.com/ant-design/x/pull/479) 由 [@YumoImer](https://github.com/YumoImer) 提交
  - 🐛 修复 Bubble.List 暗黑主题下滚动条样式不兼容问题。[#727](https://github.com/ant-design/x/pull/727) 由 [@kimteayon](https://github.com/kimteayon) 提交
- Conversation
  - 🐛 修复 Conversation内ul和li的样式问题。[#726](https://github.com/ant-design/x/pull/726) 由 [@kimteayon](https://github.com/kimteayon) 提交
  - 🆕 新增 `menu` 的 `getPopupContainer`的实现。[#698](https://github.com/ant-design/x/pull/698) 由 [@yuxuan-ctrl](https://github.com/yuxuan-ctrl) 提交
- 🐛 修复 ThoughtChain 折叠面板无法展开问题。[#720](https://github.com/ant-design/x/pull/720) 由 [@kimteayon](https://github.com/kimteayon) 提交
- 🐛 修复 Attachments 图片展示样式问题。[#708](https://github.com/ant-design/x/pull/708) 由 [@hy993658052](https://github.com/hy993658052) 提交
- 💄 优化 Sender，使自定义Actions的 `disabled`属性受控。[#666](https://github.com/ant-design/x/pull/666) 由 [@afc163](https://github.com/afc163) 提交
- 📖 优化官网站点提升用户体验。[#680](https://github.com/ant-design/x/pull/680) 由 [@wzc520pyfm](https://github.com/wzc520pyfm) 提交、[#699](https://github.com/ant-design/x/pull/699) 由 [@afc163](https://github.com/afc163) 提交、[#716](https://github.com/ant-design/x/pull/716) 由 [@afc163](https://github.com/afc163) 提交、[#686](https://github.com/ant-design/x/pull/686) 由 [@afc163](https://github.com/afc163) 提交、[#728](https://github.com/ant-design/x/pull/728) 由 [@kimteayon](https://github.com/kimteayon) 提交

## 1.1.0

`2025-03-28`

- Sender
  - 🆕 新增 `footer` 支持自定义底部内容。[#654](https://github.com/ant-design/x/pull/654) 由 [@kimteayon](https://github.com/kimteayon) 提交
  - 🆕 扩展 `autoSize` 支持配置内容高度。[#637](https://github.com/ant-design/x/pull/637) 由 [@Zhang-Wei-666](https://github.com/Zhang-Wei-666) 提交
  - 📖 补充 `onFocus`和`onBlur` 类型声明。[#625](https://github.com/ant-design/x/pull/625) 由 [@aojunhao123](https://github.com/aojunhao123) 提交
  - 🆕 扩展 Conversations 组件 `menu.trigger` 支持自定义菜单触发器。[#630](https://github.com/ant-design/x/pull/630) 由 [@kimteayon](https://github.com/kimteayon) 提交
- Attachments
  - 🆕 扩展 `ImageProps` 支持自定义图像展示配置。[#613](https://github.com/ant-design/x/pull/613) 由 [@hy993658052 ](https://github.com/hy993658052) 提交
  - 📖 补充 Attachments 组件 `onRemove` API文档。[#608](https://github.com/ant-design/x/pull/608) 由 [@kimteayon](https://github.com/kimteayon) 提交
- 📖 补充 `GPT-Vis` 渲染图表示例。 [#603](https://github.com/ant-design/x/pull/603) 由 [@lvisei](https://github.com/lvisei) 提交
- 📦 优化 Chat Design X `peerDependencies`。[#611](https://github.com/ant-design/x/pull/611) 由 [@pokerface9830 ](https://github.com/pokerface9830) 提交
- 📖 优化官网站点提升用户体验。[#626](https://github.com/ant-design/x/pull/626) 由 [@aojunhao123](https://github.com/aojunhao123) 提交、[#648](https://github.com/ant-design/x/pull/648) 由 [@kimteayon](https://github.com/kimteayon) 提交、[#659](https://github.com/ant-design/x/pull/659) 由 [@afc163](https://github.com/afc163) 提交、[#667](https://github.com/ant-design/x/pull/667) 由 [@jin19980928](https://github.com/jin19980928) 提交

## 1.0.6

`2025-03-14`

- 🆕 扩展 `Sender` 文件粘贴可处理多个文件。[#505](https://github.com/ant-design/x/pull/500) 由 [@ztkuaikuai](https://github.com/ztkuaikuai) 提交
- 🆕 扩展 `BubbleList`角色定义功能。[#485](https://github.com/ant-design/x/pull/500) 由 [@chenluda](https://github.com/chenluda) 提交
- 🐛 修复 `Attachments`组件 多文件横向滚动条展示。[#556](https://github.com/ant-design/x/pull/556) 由 [@onefeng123 ](https://github.com/onefeng123) 提交
- 🐛 修复 `Attachments`组件 onRemove 不生效问题。[#555](https://github.com/ant-design/x/pull/555) 由 [@edison-tianhe ](https://github.com/edison-tianhe) 提交
- 🐛 修复 `Sender`组件 actions 缺少 SpeechButton 组件的问题。[#549](https://github.com/ant-design/x/pull/549) 由 [@zombieJ ](https://github.com/zombieJ) 提交
- 🐛 修复 `Attachments`组件文件初始化展示问题。[#524](https://github.com/ant-design/x/pull/524) 由 [@ztkuaikuai ](https://github.com/ztkuaikuai) 提交
- 🐛 修复 `Conversations`组件滚动条问题。[#485](https://github.com/ant-design/x/pull/485) 由 [@LofiSu](https://github.com/LofiSu) 提交
- 📖 优化`Bubble` 组件typing 减少不必要的渲染。[#477](https://github.com/ant-design/x/pull/477) 由 [@kxcy001123](https://github.com/kxcy001123) 提交
- 📦 优化 Chat Design X 构建 [#578](https://github.com/ant-design/x/pull/578)，[#584](https://github.com/ant-design/x/pull/584) 由 [@kimteayon](https://github.com/kimteayon) 提交、 [#578](https://github.com/ant-design/x/pull/578) 由 [@kimteayon](https://github.com/kimteayon) 提交、[#587](https://github.com/ant-design/x/pull/587) 由 [@afc163](https://github.com/afc163) 提交
- 📖 优化官网站点提升用户体验。[#484](https://github.com/ant-design/x/pull/484) 由 [@ztkuaikuai](https://github.com/ztkuaikuai) 提交、 [#495](https://github.com/ant-design/x/pull/495) 由 [@ztkuaikuai](https://github.com/ztkuaikuai) 提交、 [#522](https://github.com/ant-design/x/pull/522) 由 [@liangchaofei](https://github.com/liangchaofei) 提交 、[#537](https://github.com/ant-design/x/pull/537) 由 [@wzc520pyfm](https://github.com/wzc520pyfm) 提交、 [#553](https://github.com/ant-design/x/pull/553) 由 [@PeachScript](https://github.com/PeachScript) 提交、 [#578](https://github.com/ant-design/x/pull/578) 由 [@kimteayon](https://github.com/kimteayon) 提交 、 [#585](https://github.com/ant-design/x/pull/585) 由 [@MaricoHan](https://github.com/MaricoHan) 提交

## 1.0.5

`2025-01-13`

- 🐛 修复 `Attachment` 组件移除图标的样式问题。[#460](https://github.com/ant-design/x/pull/460) 由 [@Rain120](https://github.com/Rain120) 提交
- 🛠 重构 `BubbleProps`，支持 `ContentType` 类型参数。[#403](https://github.com/ant-design/x/pull/403) 由 [@YumoImer](https://github.com/YumoImer) 提交
- 🛠 开发环境和网站支持 React 19。[#432](https://github.com/ant-design/x/pull/432) 由 [@YumoImer](https://github.com/YumoImer) 提交
- 📖 优化官网站点提升用户体验。[#456](https://github.com/ant-design/x/pull/456), [#446](https://github.com/ant-design/x/pull/446), [#448](https://github.com/ant-design/x/pull/448), [#444](https://github.com/ant-design/x/pull/444), [#414](https://github.com/ant-design/x/pull/414), [#406](https://github.com/ant-design/x/pull/406), [#404](https://github.com/ant-design/x/pull/404) 由 [@wzc520pyfm](https://github.com/wzc520pyfm), [@YumoImer](https://github.com/YumoImer), [@Rain120](https://github.com/Rain120), [@afc163](https://github.com/afc163) 提交

## 1.0.4

`2024-12-25`

- 🆕 扩展 `XStream` 对取消功能的支持。 [#319](https://github.com/ant-design/x/pull/319) by [@ppbl](https://github.com/ppbl)
- 🆕 扩展 `Bubble` 对 `typing.suffix`打字后缀的支持。 [#316](https://github.com/ant-design/x/pull/316) by [@BQXBQX](https://github.com/BQXBQX)
- 🆕 扩展 `Sender` 组件 `onChange` 对 `event` 事件参数的支持。 [#362](https://github.com/ant-design/x/pull/362) by [@defaultjacky](https://github.com/defaultjacky)
- 🆕 扩展 `Sender` 组件 `ref` 对 `focus`、`blur` 等焦点控制能力的支持。 [#397](https://github.com/ant-design/x/pull/397) by [@YumoImer](https://github.com/YumoImer)
- 🐛 修复 `ThoughtChain` 在非 cssVar 下的样式问题。 [#373](https://github.com/ant-design/x/pull/373) by [@YumoImer](https://github.com/YumoImer)
- 📖 添加 `Petercat` 助理功能。 [#375](https://github.com/ant-design/x/pull/375) by [@xingwanying](https://github.com/xingwanying)
- 📖 优化官网站点提升用户体验。 [#389](https://github.com/ant-design/x/pull/389)、[#377](https://github.com/ant-design/x/pull/377)、[#364](https://github.com/ant-design/x/pull/364)、[#368](https://github.com/ant-design/x/pull/368) by [@afc163](https://github.com/afc163)、[@YumoImer](https://github.com/YumoImer)

## 1.0.3

`2024-12-16`

- 💄 优化 `Bubble` 设置 `placement: 'end'` 后的样式。[#314](https://github.com/ant-design/x/pull/314) 由 [@YumoImer](https://github.com/YumoImer)
- 🐛 修复 `Bubble.List` 设置 `autoScroll` 后偶现无法触发自动滚动的问题。[#336](https://github.com/ant-design/x/pull/336) 由 [@anzhou99Ru](https://github.com/anzhou99Ru)
- 📖 优化官网站点提升用户体验。[#343](https://github.com/ant-design/x/pull/343)、[#334](https://github.com/ant-design/x/pull/334)、[#315](https://github.com/ant-design/x/pull/315)、[#331](https://github.com/ant-design/x/pull/331) 由 [@afc163](https://github.com/afc163)、[@YumoImer](https://github.com/YumoImer)、[@Wxh16144](https://github.com/Wxh16144)
- 🛠 修复 `pnpm lint` 时的错误。[#313](https://github.com/ant-design/x/pull/313) 由 [@BQXBQX](https://github.com/BQXBQX)

## 1.0.2

`2024-12-04`

- 🛠 优化 `XRequest` 支持对自定义协议解析。[#293](https://github.com/ant-design/x/pull/293) 由 [@YumoImer](https://github.com/YumoImer) 提交
- 🐛 修复 `Attachment` 前后预览按钮无法正常显隐的问题。[#295](https://github.com/ant-design/x/pull/295) 由 [@anzhou99](https://github.com/anzhou99) 提交
- 🐛 修复 `useXChat` 对同一条消息重复触发 `onUpdate` 的问题。[#298](https://github.com/ant-design/x/pull/298) 由 [@YumoImer](https://github.com/YumoImer) 提交
- 📖 添加 `Bubble` 配合 `GPT-Vis` 的使用演示文档。[#288](https://github.com/ant-design/x/pull/288) 由 [@lvisei](https://github.com/lvisei) 提交
- 📦 更新浏览器目标配置减少打包体积。[#282](https://github.com/ant-design/x/pull/282) 由 [@afc163](https://github.com/afc163) 提交
- 🛠 修复运行 `pnpm run prestart` 的错误。[#287](https://github.com/ant-design/x/pull/287) 由 [@long36708](https://github.com/long36708) 提交

## 1.0.1

`2024-11-29`

- 🛠 优化 `useXAgent` 和 `XStream` 的 TS 类型。[#272](https://github.com/ant-design/x/pull/272) 由 [@YumoImer](https://github.com/YumoImer) 提交
- 🛠 调整 `agent` 参数设为可选，以支持仅使用 `useXChat` 的数据管理功能。[#271](https://github.com/ant-design/x/pull/271) 由 [@YumoImer](https://github.com/YumoImer) 提交
- 💄 调整 `Conversations` 样式基于 RICH 设计规范。[#242](https://github.com/ant-design/x/pull/242) 由 [@YumoImer](https://github.com/YumoImer) 提交
- 🛠 修复使用 `pnpm` 启动项目时幽灵依赖导致无法启动的问题。[#223](https://github.com/ant-design/x/pull/223) 由 [@YumoImer](https://github.com/YumoImer) 提交
- 🌈 独立式样板间支持附件上传功能演示。[#250](https://github.com/ant-design/x/pull/250)、[#265](https://github.com/ant-design/x/pull/265) 由 [@kelvinelove](https://github.com/kelvinelove) 提交
- 📖 修复缺失的贡献者信息。[#212](https://github.com/ant-design/x/pull/212) 由 [@afc163](https://github.com/afc163) 提交
- 📖 优化官网站点提升用户体验。[#277](https://github.com/ant-design/x/pull/277)、[#264](https://github.com/ant-design/x/pull/264)、[#263](https://github.com/ant-design/x/pull/263)、[#262](https://github.com/ant-design/x/pull/262)、[#261](https://github.com/ant-design/x/pull/261)、[#241](https://github.com/ant-design/x/pull/241)、[#246](https://github.com/ant-design/x/pull/246)、[#210](https://github.com/ant-design/x/pull/210)、[#211](https://github.com/ant-design/x/pull/211) 由 [@YumoImer](https://github.com/YumoImer)、[@afc163](https://github.com/afc163)、[@Rain-1214](https://github.com/Rain-1214)、[@kelvinelove](https://github.com/kelvinelove)、[@tabzzz1](https://github.com/tabzzz1) 完成
- 📦 更新浏览器目标减少打包体积。[#234](https://github.com/ant-design/x/pull/234) 由 [@afc163](https://github.com/afc163) 提交

## 1.0.0

`2024-11-22`

🎉 我们非常开心的宣布 [Ant Design X](https://x.ant.design) 1.0.0 版本正式发布啦～

- 🌈 **源自企业级 AI 产品的最佳实践**：基于 RICH 交互范式，提供卓越的 AI 交互体验
- 🧩 **灵活多样的原子组件**：覆盖绝大部分 AI 对话场景，助力快速构建个性化 AI 交互页面
- ⚡ **开箱即用的模型对接能力**：轻松对接符合 OpenAI 标准的模型推理服务
- 🔄 **高效管理对话数据流**：提供好用的数据流管理功能，让开发更高效
- 📦 **丰富的样板间支持**：提供多种模板，快速启动 LUI 应用开发
- 🛡 **TypeScript 全覆盖**：采用 TypeScript 开发，提供完整类型支持，提升开发体验与可靠性
- 🎨 **深度主题定制能力**：支持细粒度的样式调整，满足各种场景的个性化需求

![demos](https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*UAEeSbJfuM8AAAAAAAAAAAAADgCCAQ/fmt.webp)

## 1.0.0-alpha.12

`2024-11-07`

- 🔥 Sender 支持 `onPasteFile` 事件与 Attachments 支持 `ref.upload` 手动上传文件, 由 [@zombieJ](https://github.com/zombieJ) [#184](https://github.com/ant-design/x/pull/184)
- 🔥 Sender `allowSpeech` 支持受控使用三方语音 SDK, 由 [@zombieJ](https://github.com/zombieJ) [#187](https://github.com/ant-design/x/pull/187)

## 1.0.0-alpha.11

`2024-11-06`

- 🔥 新组件 欢迎 - Welcome, 由 [@zombieJ](https://github.com/zombieJ) [#179](https://github.com/ant-design/x/pull/179)
- 🔥 Prompts 支持嵌套层级展示, 由 [@zombieJ](https://github.com/zombieJ) [#181](https://github.com/ant-design/x/pull/181)
- 🔥 Attachments 支持 Attachments.FileCard 子组件, 由 [@zombieJ](https://github.com/zombieJ) [#182](https://github.com/ant-design/x/pull/182)

## 1.0.0-alpha.10

`2024-11-04`

- 🐛 修复 Attachments 组件使用拖动上传时无法触发上传请求的问题, by [@YumoImer](https://github.com/YumoImer) [#178](https://github.com/ant-design/x/pull/178)

## 1.0.0-alpha.9

`2024-11-01`

- 🐛 修复 Attachments 组件内的代码逻辑问题, by [@YumoImer](https://github.com/YumoImer) [#174](https://github.com/ant-design/x/pull/174)
- 🐛 修复 Sender.Header 内不可以聚焦的问题, by [@zombieJ](https://github.com/zombieJ) [#175](https://github.com/ant-design/x/pull/175)

## 1.0.0-alpha.7

`2024-10-31`

- 🐛 修复 Attachments 组件第一次上传时无法触发上传请求的问题, 由 [@YumoImer](https://github.com/YumoImer) [#172](https://github.com/ant-design/x/pull/172)

## 1.0.0-alpha.6

`2024-10-25`

- 🔥 新组件 附件 - `Attachments`, 由 [@zombieJ](https://github.com/zombieJ) [#168](https://github.com/ant-design/x/pull/168)
- 🔥 新工具 流 - `XStream`, 由 [@YumoImer](https://github.com/YumoImer) [#138](https://github.com/ant-design/x/pull/138)
- 🔥 新工具 请求 - `XRequest`, 由 [@YumoImer](https://github.com/YumoImer) [#138](https://github.com/ant-design/x/pull/138)

## 1.0.0-alpha.5

`2024-10-23`

- 🆕 Bubble 支持 `loadingRender` 以自定义加载状态。[#165](https://github.com/ant-design/x/pull/165)
- 🐛 修复不包裹 XProvider 时，组件样式丢失的问题。[#163](https://github.com/ant-design/x/pull/163)

## 1.0.0-alpha.4

`2024-10-17`

- Sender
  - 🆕 Sender 支持 `speech` 语音功能，由 [@zombieJ](https://github.com/zombieJ) [#154](https://github.com/ant-design/x/pull/154)
  - 🆕 Sender 支持 `Sender.Header`，由 [@zombieJ](https://github.com/zombieJ) [#156](https://github.com/ant-design/x/pull/156)
  - 🆕 Sender 样式调整，由 [@zombieJ](https://github.com/zombieJ) [#151](https://github.com/ant-design/x/pull/151)
- 📖 更新文档页面下的组配置，由 [@YumoImer](https://github.com/YumoImer) [#155](https://github.com/ant-design/x/pull/155)
- 📖 调整示例切换按钮样式，由 [@afc163](https://github.com/afc163) [#146](https://github.com/ant-design/x/pull/146)
- 📖 更新 README.md，由 [@afc163](https://github.com/afc163) [#142](https://github.com/ant-design/x/pull/142)

## 1.0.0-alpha.3

`2024-10-10`

- Bubble
  - 🆕 Bubble 新增 `variant` 变体支持，由 [@zombieJ](https://github.com/zombieJ) 完成 [#140](https://github.com/ant-design/x/pull/140)
  - 🆕 Bubble 新增 `shape` 形状支持，由 [@zombieJ](https://github.com/zombieJ) 完成 [#144](https://github.com/ant-design/x/pull/144)
  - 🆕 Bubble 新增 `header` 和 `footer` 支持自定义头部与底部内容并添加对应语义化 `className`，由 [@zombieJ](https://github.com/zombieJ) 完成 [#147](https://github.com/ant-design/x/pull/147)

## 1.0.0-alpha.2

`2024-09-27`

- 🔥 新增 `XProvider` 全局化配置组件，由 [@YumoImer](https://github.com/YumoImer) 完成 [#127](https://github.com/ant-design/x/pull/127)
- 🔥 新增 运行时钩子 `useXChat` 数据管理，由 [@zombieJ](https://github.com/zombieJ) 完成 [#125](https://github.com/ant-design/x/pull/125)
- 🔥 新增 运行时钩子 `useXAgent` 模型调度，由 [@zombieJ](https://github.com/zombieJ) 完成 [#125](https://github.com/ant-design/x/pull/125)
- 🆕 `ThoughtChain` 思维链组件支持 `size` 属性，由 [@YumoImer](https://github.com/YumoImer) 完成 [#123](https://github.com/ant-design/x/pull/123)
- 🛠 更新 `.lintstagedrc.json`, 由 [@afc163](https://github.com/afc163) 完成 [#128](https://github.com/ant-design/x/pull/128)
- 🛠 更新依赖 `cheerio` 至 `v1.0.0`, 由 [@afc163](https://github.com/afc163) 完成 [#121](https://github.com/ant-design/x/pull/121)

## 1.0.0-alpha.1

`2024-09-10`

### 🚀 新特性

- 🔥 新增：`Suggestion` 建议组件，由 [@ONLY-yours](https://github.com/ONLY-yours) 完成 [#87](https://github.com/ant-design/x/pull/87)

### 🐛 修复

- 🐛 修复：更改 `Sender` 的 `restProps` 类型，由 [@ONLY-yours](https://github.com/ONLY-yours) 完成 [#101](https://github.com/ant-design/x/pull/101)
- 🛠 修复：`bun install` 问题，由 [@afc163](https://github.com/afc163) 完成 [#111](https://github.com/ant-design/x/pull/111)

### 🛠 重构

- 🛠 重构：添加层级支持，由 [@zombieJ](https://github.com/zombieJ) 完成 [#118](https://github.com/ant-design/x/pull/118)
- 🛠 重构：加速工作流，由 [@afc163](https://github.com/afc163) 完成 [#119](https://github.com/ant-design/x/pull/119)
- 🛠 重构：升级开发依赖的 5 个更新，由 [@dependabot](https://github.com/dependabot) 完成 [#120](https://github.com/ant-design/x/pull/120)
- 🛠 重构：清理 `README.md`，由 [@afc163](https://github.com/afc163) 完成 [#102](https://github.com/ant-design/x/pull/102)
- 🛠 重构：添加 issue 模板，由 [@afc163](https://github.com/afc163) 完成 [#103](https://github.com/ant-design/x/pull/103)
- 🛠 重构：添加 `bun.lockb`，由 [@afc163](https://github.com/afc163) 完成 [#108](https://github.com/ant-design/x/pull/108)
- 🛠 删除 `index-style-only.js`，由 [@afc163](https://github.com/afc163) 完成 [#106](https://github.com/ant-design/x/pull/106)
- 🛠 重构：更新 `main.yml`，由 [@afc163](https://github.com/afc163) 完成 [#105](https://github.com/ant-design/x/pull/105)
- 🛠 重构：更新 `package.json`，由 [@afc163](https://github.com/afc163) 完成 [#110](https://github.com/ant-design/x/pull/110)

### 📖 文档

- 📖 文档：更新 `README.md`，由 [@afc163](https://github.com/afc163) 完成 [#104](https://github.com/ant-design/x/pull/104)
- 📖 文档：更新 `codecov` 徽章，由 [@afc163](https://github.com/afc163) 完成 [#112](https://github.com/ant-design/x/pull/112)

## 1.0.0-alpha.0

`2024-09-05`

- 🔥 新组件 Bubble. [#19](https://github.com/ant-design/x/pull/19) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🔥 Bubble 支持方向 [#52](https://github.com/ant-design/x/pull/52) [@li-jia-nan](https://github.com/li-jia-nan)
- 🔥 新组件 Bubble.List. [#57](https://github.com/ant-design/x/pull/57) [@zombieJ](https://github.com/zombieJ)
- 🔥 新组件 Conversations. [#48](https://github.com/ant-design/x/pull/48) [@YumoImer](https://github.com/YumoImer)
- 🔥 新组件 Prompts. [#55](https://github.com/ant-design/x/pull/55) [@YumoImer](https://github.com/YumoImer)
- 🔥 新组件 Sender. [#46](https://github.com/ant-design/x/pull/46) [@ONLY-yours](https://github.com/ONLY-yours)
- 🔥 新组件 ThoughtChain. [#86](https://github.com/ant-design/x/pull/86) [@YumoImer](https://github.com/YumoImer)
- 📦 使用 `father` 构建. [#84](https://github.com/ant-design/x/pull/84) [@zombieJ](https://github.com/zombieJ)
- 🛠 修复使用 `antd` 的 es 或 lib 包时 ThemeContext 实例不一致的问题. [#88](https://github.com/ant-design/x/pull/88) [@YumoImer](https://github.com/YumoImer)
- 🛠 重构：API 命名规范 [#73](https://github.com/ant-design/x/pull/73) [@zombieJ](https://github.com/zombieJ)
- 🛠 杂项：CI、Github Actions、发布
  - 🛠 [#59](https://github.com/ant-design/x/pull/59) [@zombieJ](https://github.com/zombieJ)
  - 🛠 [#62](https://github.com/ant-design/x/pull/62) [@zombieJ](https://github.com/zombieJ)
  - 🛠 [#71](https://github.com/ant-design/x/pull/71) [@ONLY-yours](https://github.com/ONLY-yours)
  - 🛠 [#72](https://github.com/ant-design/x/pull/72) [@YumoImer](https://github.com/YumoImer)
  - 🛠 [#98](https://github.com/ant-design/x/pull/98) [@YumoImer](https://github.com/YumoImer)
- 📖 更新 README.md
  - 📖 [#81](https://github.com/ant-design/x/pull/81) [@zombieJ](https://github.com/zombieJ)
  - 📖 [#82](https://github.com/ant-design/x/pull/82) [@zombieJ](https://github.com/zombieJ)
  - 📖 [#61](https://github.com/ant-design/x/pull/61) [@afc163](https://github.com/afc163)

## 0.0.0-alpha.0

`2024-05-10`

- MISC: 项目初始化。
