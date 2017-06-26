
var Queue = function() {
  this.storage = [];
  this.size = 0;

  this.enqueue = (data) => {
    this.storage.push(data);
    this.size += 1;
  }

  this.dequeue = () => {
    //add if queue puste
    this.storage.shift();
    this.size -= 1;

  }

  this.peek = () => {
    //add if queue puste
    if(this.storage) {
      return this.storage[this.size - 1];
    }
    return null;
  }
}

module.exports = {Queue}
