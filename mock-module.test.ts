import { getProfile, User } from "./api-calls";

// Implementation
function isAdmin():Promise<boolean>{
  return getProfile().then(
    ({isAdmin}) => isAdmin, 
    () => false
  );
}

// Test
jest.mock('./api-calls', () => ({
  getProfile:jest.fn<Promise<User>, []>()
}))

describe('isAdmin()', () => {
  it.todo('returns true if the user is admin');
  it.todo('returns false if the user is not an admin');
  it.todo('returns false if the api call fails');
});
