//auth
export const USER_LOGIN_KEY = 'userLoginKey';

const auth = {
  user: () => '/user',
  userLogin: () => `/user/login`,
};

export const Endpoints = {
  ...auth,
};
