//auth
export const USER_LOGIN_KEY = 'userLoginKey';
export const USER_REGISTER_KEY = 'userRegisterKey';
export const USER_SEND_EMAIL_KEY = 'userSendEmailKey';
export const USER_SEND_CODE_KEY = 'userSendCodeKey';

//event
export const USER_CREATE_EVENT_KEY = 'userCreateEventKey';
export const USER_DELETE_EVENT_KEY = 'userDeleteEventKey';
export const UPLOAD_EVENT_COVER_KEY = 'userUploadEventCoverKey';
export const USER_LIST_EVENTS_KEY = 'userListEventsKey';
export const USER_EVENTS_DETAILS_KEY = 'userEventDetailKey';
export const EVENT_CONFIRM_LIST_KEY = 'eventConfirmListKey';
export const UPDATE_EVENT_KEY = 'updateEventKey';
export const EVENT_DETAIL_KEY = 'eventDetailKey';

//confirm
export const USER_CONFIRM_EVENT_KEY = 'userConfirmEventKey';

const auth = {
  user: () => '/user',
  userLogin: () => `/user/login`,
  userSendEmail: () => `/user/send-email`,
  userSendCode: () => `/user/send-code`,
};

const event = {
  event: () => `/event`,
  eventId: ({ id }: { id: string }) => `/event/${id}`,
  eventUpload: () => `/event/upload`,
  eventDetail: ({ slug }: { slug: string }) => `/event/slug/${slug}`,
  eventConfirms: ({ id }: { id: string }) => `/event/${id}/confirms`,
};

export const Endpoints = {
  ...auth,
  ...event,
};
