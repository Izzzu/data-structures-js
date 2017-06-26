function Node(data) {
  this.data = data;
  this.next = null;
}

var Queue = function() {
  this.first = null;
  this.size = 0;

  this.enqueue = (data) => {
    var newNode = new Node(data);

    if(!this.first) {
      this.first = newNode;
    } else {
      var temp = this.first;
      while(temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
    this.size += 1;
    return newNode;
  }

  this.dequeue = () => {
    //add if queue puste
    var temp =this.first;
    this.first = this.first.next;
    this.size -=1;
    return temp;
  }
}

module.exports = {Queue}
