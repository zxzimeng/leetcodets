export class LinkedList {
  private head: Node;
  prepend(data: number) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  toString(): string {
    if (this.head == null) {
      return "";
    }
    let current: Node = this.head; 
    let returnArray = [];
    while (current != null) {
      returnArray.push(current.data);
      current = current.next;
    }
    return returnArray.join(",");
  }
}

export class Node {
  public next: Node;
  public constructor(public data: number) {}
}
