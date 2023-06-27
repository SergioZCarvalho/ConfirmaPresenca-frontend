//auth
export const USER_LOGIN_KEY = 'userLoginKey';
export const USER_REGISTER_KEY = 'userRegisterKey';

//event
export const USER_CREATE_EVENT_KEY = 'userCreateEventKey';
export const USER_DELETE_EVENT_KEY = 'userDeleteEventKey';
export const UPLOAD_EVENT_COVER_KEY = 'userUploadEventCoverKey';
export const USER_LIST_EVENTS_KEY = 'userListEventsKey';

const auth = {
  user: () => '/user',
  userLogin: () => `/user/login`,
};

const event = {
  event: () => `/event`,
  eventId: ({ id }: { id: string }) => `/event/${id}`,
  eventUpload: () => `/event/upload`,
};

export const Endpoints = {
  ...auth,
  ...event,
};
