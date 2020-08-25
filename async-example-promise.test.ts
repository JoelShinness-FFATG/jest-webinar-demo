async function waitASecondPromise(){
  await new Promise(resolve => { setTimeout(resolve, 1000); });
  return 'I waited'
}

describe('waitASecondPromise()', () => {
  it('waits a second, then resolves', async () => {
    const start = +(new Date());

    const result = await waitASecondPromise();
    const duration = +(new Date()) - start;

    expect(result).toBe('I waited');
    expect(duration).toBeGreaterThanOrEqual(1000);
  }, 1025);
});
