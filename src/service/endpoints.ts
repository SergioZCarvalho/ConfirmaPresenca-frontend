//auth
export const USER_LOGIN_KEY = 'userLoginKey';
export const USER_REGISTER_KEY = 'userRegisterKey';

//event
export const USER_CREATE_EVENT_KEY = 'userCreateEventKey';
export const UPLOAD_EVENT_COVER_KEY = 'userUploadEventCoverKey';

const auth = {
  user: () => '/user',
  userLogin: () => `/user/login`,
};

const event = {
  event: () => `/event`,
  eventUpload: () => `/event/upload`,
};

export const Endpoints = {
  ...auth,
  ...event,
};
