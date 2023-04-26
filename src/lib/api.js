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

export const fetchStudyDetail = (studyId) =>
  client.get(`/api/study/${studyId}`);

export const fetchMyStudyDetail = (studyId) =>
  client.get(`/api/study/my/${studyId}`, privateHeader);

export const fetchMyStudy = () => client.get(`/api/study/my`, privateHeader);

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

export const kickOffStudyMember = (studyId, memberId) =>
  client.post(
    `/api/study/my/${studyId}/member/${memberId}/out`,
    {},
    privateHeader,
  );

export const updateMemberProfile = (name, age) =>
  client.post(`/api/member/profile`, { name, age }, privateHeader);

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

export const fetchScheduleMemberList = (memberId) =>
  client.get(`/api/schedule/member/${memberId}`);

export const fetchTodoByMemberList = () =>
  client.get(`/api/todo`, privateHeader);

export const fetchRegisterList = () =>
  client.get(`/api/study/my/register`, privateHeader);

export const fetchTodoByScheduleList = (scheduleId) =>
  client.get(`/api/todo/schedule/${scheduleId}`);

export const fetchPublicStudyList = ({ page, size, sort }) =>
  client.get(`/api/study?page=${page}&size=${size}&sort=${sort}`);

export const fetchStudyRegister = (studyId, goal, objective, comment) =>
  client.post(
    `/api/study/register/${studyId}`,
    { goal, objective, comment },
    privateHeader,
  );

export const login = ({ memberId, password }) =>
  client.post(`/api/login`, { memberId, password });

export const createSchedule = (name, startDate, endDate, isUse, todoList) =>
  client.post(
    `/api/schedule`,
    {
      name,
      startDate,
      endDate,
      isUse,
      todoList,
    },
    privateHeader,
  );

export const isAuth = () => client.post('/api/token/check');
