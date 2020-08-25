const db = require('./db');

describe('getUser()', () => {
  beforeEach(() => {
    // Set up the system to a predictable state
    db.users.deleteAll();
    db.users.add({id: 1, name: 'Joel', admin: false});
    db.users.add({id: 2, name: 'Justin', admin: true});
  });
  afterAll(() => {
    // Clean up the system
    db.users.deleteAll();
  });
  /* Tests go here */
});