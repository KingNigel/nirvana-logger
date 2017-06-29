/**
 * Created by 高乐天 on 17/6/16.
 */
const lodash = require('lodash');
let err = new Error('a err occur');
let b = {};

console.log(err.toString());
let ccc = '';
try {
  let a = ccc.aa;
  console.log(a);
  a.aa
} catch (err) {
  console.log(err.toString());
}