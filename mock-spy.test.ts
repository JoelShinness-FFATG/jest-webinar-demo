
function doSomethingNTimes(doSomething:(i:number)=>void, n:number):void {
  for(let i = 0; i < n; i++){
    doSomething(i);
  }
}

describe('doSomethingNTimes(doSomething, n)', () => {
  it('does doSomething n times', () => {
    const doSomething = jest.fn();
    
    doSomethingNTimes(doSomething, 3);
    expect(doSomething).toBeCalledTimes(3);
    expect(doSomething.mock.calls).toEqual([
      [0],[1],[2]
    ]);
  });
});