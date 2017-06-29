const L = require('../..')('撞库');
module.exports = function() {
  const obj = {
    a: 'asdfasdf',
    b: {
      a: 'asdfasdf',
      b: {
        a: 'asdfasdf',
        b: {
          a: 'asdfasdf',
          b: {
            a: 'asdfasdf',
            b: {
              a: 'asdfasdf',
              b: {
                a: 'asdfasdf',
                b: {
                  a: 'asdfasdf',
                  b: 'adsfasdfasdf',
                },
              },
            },
          },
        },
      },
    },
  };

  const arr = [
    1, 2, 3,
    4, 5, 6,
  ];

  L('BBBB', 'bbbb', 10);

  L(obj);
  L(arr);
  L(obj, arr);
};
