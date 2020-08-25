function waitASecondCallback(cb:(output:string)=>void){
  setTimeout(() => { cb('I waited'); }, 1000);
}

describe('waitASecondCallback(done)', () => {
  it('waits a second, then calls the cb', (done:()=>void) => {
    const start = new Date();

    waitASecondCallback((val) => {
      const duration = +(new Date()) - +start;
    
      expect(val).toBe('I waited');
      expect(duration).toBeGreaterThanOrEqual(1000);
          
      done();
    });
  }, 1025);
});
