const path = require('path');
const dateFormat = require('dateformat');
const color = require('chalk');
const lodash = require('lodash');
// Stack trace format :
// https://github.com/v8/v8/wiki/Stack%20Trace%20API
const stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i;
const stackReg2 = /at\s+()(.*):(\d*):(\d*)/i;

/**
 *
 * @param nameSpace
 * @returns {Function}
 */
module.exports.default = module.exports = function(nameSpace = null) {
  return function(...args) {
    try {
      const err = (new Error).stack.split('\n')[2];
      const sp = stackReg.exec(err) || stackReg2.exec(err);
      const pathSplit = sp[2].split('/');
      const lengthFromRight = Math.max(-2, -pathSplit.length);
      const filePath = pathSplit.slice(lengthFromRight).join('/');

      const file = color.red(filePath);
      const now = new Date();
      const time = color.gray(dateFormat(now, 'mm-dd HH:MM:ss'));
      const scope = nameSpace ? color.yellow('【' + nameSpace + '】') : '';
      const rand = color.green;

      let argsStringifys = args.map(arg => {
        // Error对象处理
        if (lodash.isError(arg)) {
          return color.red(arg.toString());
        }
        // Object 或 Array 处理
        return lodash.isObject(arg) || lodash.isArray(arg)
            ? JSON.stringify(arg)
            : arg;
      });

      const content = color.green(argsStringifys.join(`  `));
      // 日志输出格式为：
      // 时间 文件 串号 【名字空间】详细内容
      console.log(`${time} ${file} ${scope}\t`, content);
    } catch (err) {
      console.trace(err);
    }
  };
};