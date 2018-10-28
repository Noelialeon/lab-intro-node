class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(x) {
    this.items.push(x);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length++;
  }

  get(a) {
    return this.items[a - 1];
  }

  max() {
    return this.items[this.length - 1];
  }

  min() {
    return this.items[0];
  }

  average() {
    return this.sum() / this.length;
  }

  sum() {
    if (this.length === 0) {
      return false;
    } else {
      return this.items.reduce(function(a, b) {
        return a + b;
      });
    }
  }
}
module.exports = SortedList;

new SortedList();
