describe('module, e.g. User', () => {
  describe('component, e.g. Authentication', () => {
    describe('context, e.g. with valid session', () => {
      it('does something', () => {});
      it('fails to do something', () => {
        throw new Error('failure!');
      });
      it.skip('did something, but this test needs review', () => {});
      it.todo('will eventually do something');  
    });
  });
});
