# somefn [![npm version](https://img.shields.io/npm/v/@zsqk/somefn.svg?style=flat)](https://www.npmjs.com/package/@zsqk/somefn) ![node version](https://img.shields.io/node/v/@zsqk/somefn.svg?style=flat)

some functions for browser

通用 JS 功能 (浏览器环境兼容):

- hash
  - SHA1
  - SHA256
  - SHA512
- HMAC
  - SHA256
  - SHA512
- Uint8Array to hex string tools
- UA 解析
  - UA 结构整理
  - OS 识别
  - 软件识别
- lz 压缩

## 使用说明

### UA 识别

```ts
import { parserUA } from '@zsqk/somefn/js/ua';

const ua = parserUA(window.navigator.userAgent);
const name = `${ua.os} ${ua.softwareName}`;
```

## dev

依赖 Deno 运行时的功能:
本仓库不直接提交新功能, 所有新功能均从上层项目中拉取.

- `gitChanges` 查看 Git 变动.
本仓库只做 npm 适配工作.

说明:
publish:

```sh
npm run tsc && cp package*.json build && cp README.md build && npm publish ./build --access public
```
