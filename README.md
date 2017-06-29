# 用法

```bash
# npm or yarn

yarn add nirvana-logger
```

```js
const L = require('nirvana-logger')('scopename');

L('string', string, 'object', object, 'array', array, 'error object', new Error('this is error'))

```

