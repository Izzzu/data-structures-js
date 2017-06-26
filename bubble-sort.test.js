const bubble = require('./bubble-sort.js');
const expect = require('expect');

it('should sort sorted list', () => {
  var a = [1,2,3];
  bubble.sort(a);
  expect(a).toEqual([1,2,3]);
});
