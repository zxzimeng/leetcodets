class Stack {
  stackArray = [];
  pop() {
    return this.stackArray.pop();
  }
  push(x) {
    this.stackArray.push(x);
  }
  returnAll() {
    return this.stackArray;
  }
}
export function generateFibnacci(input: number): number {
  const stack = new Stack();
  stack.push(0);
  let temp1 = 0;
  let temp2 = 1;
  for (let i = 0; i < 100; i++) {
    stack.push(temp2);
    let hold = temp1;
    temp1 = temp2;
    temp2 = hold + temp2;
  }
  console.log(stack.returnAll());
  return stack.pop();
}
