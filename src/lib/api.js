import client from './client';
import jwtAxios from './jwtUtil';

export const fetchStudyMember = (userId) =>
  jwtAxios.get(`/api/member/${userId}`);

export const fetchStudyMemberProfile = () =>
  jwtAxios.get(`/api/member/profile`);

export const fetchStudyMemberList = () => jwtAxios.get(`/api/members`);

export const fetchStudyDetail = ({ studyId, inviteCode }) =>
  jwtAxios.get(`/api/study/${studyId}?invite-code=${inviteCode}`);

export const fetchMyStudyDetail = (studyId) =>
  jwtAxios.get(`/api/study/my/${studyId}`);

export const fetchMyStudy = () => jwtAxios.get(`/api/study/my`);

export const fetchSecretStudy = (inviteCode) =>
  jwtAxios.get(`/api/study/secret?invite-code=${inviteCode}`);

export const removeStudyMember = (studyList) =>
  jwtAxios.delete(`/api/study`, {
    data: { studyList: studyList },
  });

export const updateRegisterState = (studyId, registerId, changeState) =>
  jwtAxios.post(`/api/study/my/${studyId}/state/${registerId}`, {
    state: changeState,
  });

export const updateStudySecret = (studyId, secret, password) =>
  jwtAxios.post(`/api/study/${studyId}/secret`, { secret, password });

export const updateMyStudy = (studyId, studyName, content, fullCount) =>
  jwtAxios.post(`/api/study/my/${studyId}`, { studyName, content, fullCount });

export const updateTodayScheduleTodo = (clearScheduleTodoList) =>
  jwtAxios.post(`/api/schedule/today`, {
    clearScheduleTodoList: clearScheduleTodoList,
  });

export const kickOffStudyMember = (studyId, memberId) =>
  jwtAxios.post(`/api/study/my/${studyId}/member/${memberId}/out`, {});

export const updateMemberProfile = (name, password, age) =>
  jwtAxios.post(`/api/member/profile`, { name, password, age });

export const removeScheduleList = (scheduleList) =>
  jwtAxios.delete(`/api/schedule`, {
    data: { scheduleList: scheduleList },
  });

export const removeTodoList = (todoList) =>
  jwtAxios.delete(`/api/todo`, {
    data: { todoList: todoList },
  });

export const removeMemberSelf = () => jwtAxios.delete(`/api/member`, {});

export const removeStudyCodeList = (studyId, studyCodeList) =>
  jwtAxios.delete(`/api/study/${studyId}/code`, {
    data: { inviteCodeList: studyCodeList },
  });

export const cancelStudyRegisterList = (studyRegisterList) =>
  jwtAxios.post(`/api/study/register/cancel`, {
    studyRegisterList: studyRegisterList,
  });

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
  jwtAxios.post(`/api/study`, {
    studyName,
    content,
    secret,
    password,
    fullCount,
    isUse,
  });

export const createTodo = (title, content) =>
  jwtAxios.post(`/api/todo`, { title, content });

export const fetchScheduleMemberList = (studyId) =>
  jwtAxios.get(`/api/schedule?studyId=${studyId}`);

export const fetchTodayScheduleList = (scheduleType) =>
  jwtAxios.get(`/api/schedule/today?type=${scheduleType}`);

export const fetchTodoByMemberList = () => jwtAxios.get(`/api/todo`);

export const fetchRegisterList = () => jwtAxios.get(`/api/study/my/register`);

export const fetchStudyCodes = (studyId) =>
  jwtAxios.get(`/api/study/${studyId}/code`);

export const fetchTodoByScheduleList = (scheduleId) =>
  jwtAxios.get(`/api/todo/schedule/${scheduleId}`);

export const fetchScheduleDetail = (scheduleId) =>
  jwtAxios.get(`/api/schedule/${scheduleId}`);

export const fetchPublicStudyList = ({ name, leader, page, size, sort }) =>
  client.get(
    `/api/study?name=${name}&leader=${leader}&page=${page}&size=${size}&sort=${sort}`,
  );

export const fetchStudyRegister = (studyId, goal, objective, comment) =>
  jwtAxios.post(`/api/study/register/${studyId}`, { goal, objective, comment });

export const createInviteStudyCode = (studyId) =>
  jwtAxios.post(`/api/study/${studyId}/code`, {});

export const login = ({ memberId, password }) => {
  const formData = new FormData();
  formData.append('memberId', memberId);
  formData.append('password', password);

  return client.post(`/api/login`, formData);
};

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
  jwtAxios.post(`/api/schedule`, {
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
  });

export const isAuth = () => client.post('/api/token/check');
