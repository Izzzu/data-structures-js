const Queue = require('./queue.js').Queue;
const expect = require('expect');

it('should create empty Queue', () => {
  var queue = new Queue();

  expect(queue.first).toNotExist();
  expect(queue.size).toBe(0);
});

it('should enqueue Queue', () => {
  var queue = new Queue();
  queue.enqueue(3);

  expect(queue.first.data).toBe(3);
  expect(queue.size).toBe(1);
});

it('should dequeue Queue', () => {
  var queue = new Queue();
  queue.enqueue(3);
  queue.enqueue(4);

  var a = queue.dequeue();

  expect(a.data).toBe(3);
  expect(queue.size).toBe(1);
});

//test ze dequeue empty queue
//dodac peek
//dodac isFull
//dodac isEmpty
// i przetestować
