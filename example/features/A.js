const L = require('../../')('注册');

module.exports = function() {
  L('AAAA');
  setInterval(() => {
    L('AAAA', 'bbbb', 10);
  }, 2000);
  let ccc = '';
  try {
    let a = ccc.aa;
    L(a);
    a.aa;
  } catch (err) {
    L('异常处理', err);
  }
};