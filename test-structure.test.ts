function stringAndAnObject(){
  return ['string', {an: 'object'}]
}

describe('stringAndAnObject', () => {
  it('returns the correct string and object', () => {
    // Execution
    const results = stringAndAnObject();

    // Verification
    expect(results[0]).toBe('string');
    expect(results[1]).toEqual({an: 'object'});
    expect(results).not.toBeInstanceOf(Number);
  });
});