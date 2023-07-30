import { getAccessToken } from '../modules/Cookie';
import client from './client';

const privateHeader = {
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  },
};

export const fetchStudyMember = (userId) => client.get(`/api/member/${userId}`);

export const fetchStudyMemberProfile = () =>
  client.get(`/api/member/profile`, privateHeader);

export const fetchStudyMemberList = () =>
  client.get(`/api/members`, privateHeader);

export const fetchStudyDetail = ({ studyId, inviteCode }) =>
  client.get(`/api/study/${studyId}?invite-code=${inviteCode}`, privateHeader);

export const fetchMyStudyDetail = (studyId) =>
  client.get(`/api/study/my/${studyId}`, privateHeader);

export const fetchMyStudy = () => client.get(`/api/study/my`, privateHeader);

export const fetchSecretStudy = (inviteCode) =>
  client.get(`/api/study/secret?invite-code=${inviteCode}`, privateHeader);

export const removeStudyMember = (studyList) =>
  client.delete(`/api/study`, {
    data: { studyList: studyList },
    ...privateHeader,
  });

export const updateRegisterState = (studyId, registerId, changeState) =>
  client.post(
    `/api/study/my/${studyId}/state/${registerId}`,
    { state: changeState },
    privateHeader,
  );

export const updateStudySecret = (studyId, secret, password) =>
  client.post(
    `/api/study/${studyId}/secret`,
    { secret, password },
    privateHeader,
  );

export const updateMyStudy = (studyId, studyName, content, fullCount) =>
  client.post(
    `/api/study/my/${studyId}`,
    { studyName, content, fullCount },
    privateHeader,
  );

export const updateTodayScheduleTodo = (clearScheduleTodoList) =>
  client.post(
    `/api/schedule/today`,
    { clearScheduleTodoList: clearScheduleTodoList },
    privateHeader,
  );

export const kickOffStudyMember = (studyId, memberId) =>
  client.post(
    `/api/study/my/${studyId}/member/${memberId}/out`,
    {},
    privateHeader,
  );

export const updateMemberProfile = (name, password, age) =>
  client.post(`/api/member/profile`, { name, password, age }, privateHeader);

export const removeScheduleList = (scheduleList) =>
  client.delete(`/api/schedule`, {
    data: { scheduleList: scheduleList },
    ...privateHeader,
  });

export const removeTodoList = (todoList) =>
  client.delete(`/api/todo`, {
    data: { todoList: todoList },
    ...privateHeader,
  });

export const removeMemberSelf = () =>
  client.delete(`/api/member`, {
    ...privateHeader,
  });

export const removeStudyCodeList = (studyId, studyCodeList) =>
  client.delete(`/api/study/${studyId}/code`, {
    data: { inviteCodeList: studyCodeList },
    ...privateHeader,
  });

export const cancelStudyRegisterList = (studyRegisterList) =>
  client.post(
    `/api/study/register/cancel`,
    {
      studyRegisterList: studyRegisterList,
    },
    privateHeader,
  );

export const createMember = (memberId, password, name, age) =>
  client.post(`/api/register`, { memberId, password, name, age });

export const createStudy = (
  studyName,
  content,
  secret,
  password,
  fullCount,
  isUse,
) =>
  client.post(
    `/api/study`,
    {
      studyName,
      content,
      secret,
      password,
      fullCount,
      isUse,
    },
    privateHeader,
  );

export const createTodo = (title, content) =>
  client.post(`/api/todo`, { title, content }, privateHeader);

export const fetchScheduleMemberList = (studyId) =>
  client.get(`/api/schedule?studyId=${studyId}`, privateHeader);

export const fetchTodayScheduleList = () =>
  client.get(`/api/schedule/today`, privateHeader);

export const fetchTodoByMemberList = () =>
  client.get(`/api/todo`, privateHeader);

export const fetchRegisterList = () =>
  client.get(`/api/study/my/register`, privateHeader);

export const fetchStudyCodes = (studyId) =>
  client.get(`/api/study/${studyId}/code`, privateHeader);

export const fetchTodoByScheduleList = (scheduleId) =>
  client.get(`/api/todo/schedule/${scheduleId}`);

export const fetchScheduleDetail = (scheduleId) =>
  client.get(`/api/schedule/${scheduleId}`, privateHeader);

export const fetchPublicStudyList = ({ name, leader, page, size, sort }) =>
  client.get(
    `/api/study?name=${name}&leader=${leader}&page=${page}&size=${size}&sort=${sort}`,
  );

export const fetchStudyRegister = (studyId, goal, objective, comment) =>
  client.post(
    `/api/study/register/${studyId}`,
    { goal, objective, comment },
    privateHeader,
  );

export const createInviteStudyCode = (studyId) =>
  client.post(`/api/study/${studyId}/code`, {}, privateHeader);

export const login = ({ memberId, password }) =>
  client.post(`/api/login`, { memberId, password });

export const createSchedule = (
  scheduleId,
  name,
  startDate,
  endDate,
  isUse,
  todoList,
  period,
  custom,
  studyId,
  scheduleType,
) =>
  client.post(
    `/api/schedule`,
    {
      scheduleId,
      name,
      startDate,
      endDate,
      isUse,
      todoList,
      period,
      customDay: custom,
      studyId,
      scheduleType,
    },
    privateHeader,
  );

export const isAuth = () => client.post('/api/token/check');
