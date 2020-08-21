function doubleFnResult(fn:() => string):string{
  const result = fn();
  return `${result}${result}`;
}

describe('doubleFnResult(fn)', () => {
  it('calls fn and doubles the result, calling fn once', () => {
    const fn = jest.fn()
      .mockReturnValue("Hi!")
      .mockReturnValueOnce("Bye!");
    
    expect(doubleFnResult(fn)).toBe("Bye!Bye!");
    expect(fn).toBeCalledTimes(1);

    fn.mockClear();
    expect(doubleFnResult(fn)).toBe("Hi!Hi!");
    expect(fn).toBeCalledTimes(1);
  })
});