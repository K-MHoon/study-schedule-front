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

export const studyMemberRemove = (studyList) =>
  client.delete(`/api/study`, { data: studyList, ...privateHeader });

export const createMember = (memberId, password, name, age) =>
  client.post(`/api/register`, { memberId, password, name, age });

export const createStudy = (studyName, secret, password, fullCount, isUse) =>
  client.post(
    `/api/study`,
    {
      studyName,
      secret,
      password,
      fullCount,
      isUse,
    },
    privateHeader,
  );

export const fetchScheduleMemberList = (memberId) =>
  client.get(`/api/schedule/member/${memberId}`);

export const fetchTodoByMemberList = (memberId) =>
  client.get(`/api/todo/member/${memberId}`);

export const fetchTodoByScheduleList = (scheduleId) =>
  client.get(`/api/todo/schedule/${scheduleId}`);

export const fetchPublicStudyList = ({ page, size, sort }) =>
  client.get(`/api/study?page=${page}&size=${size}&sort=${sort}`);

export const login = ({ memberId, password }) =>
  client.post(`/api/login`, { memberId, password });

export const createSchedule = (
  memberId,
  name,
  startDate,
  endDate,
  isUse,
  todoList,
) =>
  client.post(`/api/schedule/member/${memberId}`, {
    name,
    startDate,
    endDate,
    isUse,
    todoList,
  });

export const isAuth = () => client.post('/api/token/check');
