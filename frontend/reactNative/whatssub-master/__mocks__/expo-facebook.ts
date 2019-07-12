export const logInWithReadPermissionsAsync = () => {
  return new Promise(
    (resolve, reject) => {
      resolve({ type: 'success', token: 'testToken' });
    }
  );
};
