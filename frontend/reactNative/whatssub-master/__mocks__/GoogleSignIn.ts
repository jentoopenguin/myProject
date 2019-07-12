export const GoogleSignIn = {
  initAsync: jest.fn(() => Promise.resolve()),
  askForPlayServicesAsync: jest.fn(() => Promise.resolve(true)),
  signInAsync: jest.fn(() => Promise.resolve({
    type: 'success',
    user: {
      auth: {
        clientId: 'test',
        accessToken: 'aabb',
        accessTokenExpirationDate: 1562518153000,
      },
    },
  })),
  signOutAsync: jest.fn(() => Promise.resolve()),
};
