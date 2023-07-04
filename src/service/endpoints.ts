//auth
export const USER_LOGIN_KEY = 'userLoginKey';
export const USER_REGISTER_KEY = 'userRegisterKey';

//event
export const USER_CREATE_EVENT_KEY = 'userCreateEventKey';
export const USER_DELETE_EVENT_KEY = 'userDeleteEventKey';
export const UPLOAD_EVENT_COVER_KEY = 'userUploadEventCoverKey';
export const USER_LIST_EVENTS_KEY = 'userListEventsKey';
export const USER_EVENTS_DETAILS_KEY = 'userEventDetailKey';

//confirm
export const USER_CONFIRM_EVENT_KEY = 'userConfirmEventKey';
export const USER_CONFIRM_LIST_KEY = 'userConfirmListKey';

const auth = {
  user: () => '/user',
  userLogin: () => `/user/login`,
};

const event = {
  event: () => `/event`,
  eventId: ({ id }: { id: string }) => `/event/${id}`,
  eventUpload: () => `/event/upload`,
  eventDetail: ({ slug }: { slug: string }) => `/event/${slug}`,
};

const confirm = {
  confirm: () => `/confirm`,
};

export const Endpoints = {
  ...auth,
  ...event,
  ...confirm,
};
