function Node(data) {
  this.data = data;
  this.next = null;
}

// Stack implemented using LinkedList
function Stack() {
  this.first = null;
  this.size = 0;

  this.push = (data) => {
    var newNode = new Node(data);
    newNode.next = this.first; //Special attention
    this.first = newNode;
    this.size += 1;
  }

  this.pop = () => {
    if(this.first) {
      var temp = this.first;
      this.first = this.first.next;
      this.size -= 1;
      return temp;
  }
  return null;
  }


}

module.exports = {Stack};
