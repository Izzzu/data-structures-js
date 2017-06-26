const Stack = require('./stack.js').Stack;
const expect = require('expect');

it('should push to Stack', () => {
  var stack = new Stack();
  stack.push(2);

  expect(stack.size).toBe(1);
  expect(stack.first.data).toBe(2);


});

it('should pop from Stack', () => {
  var stack = new Stack();
  stack.push(2);
  stack.push(3);

  var p = stack.pop();

  expect(p.data).toBe(3);
  expect(stack.size).toBe(1);


});
