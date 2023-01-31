import client from './client';

export const fetchStudyMember = (userId) => client.get(`/api/member/${userId}`);
export const fetchStudyMemberList = () => client.get(`/api/member`);
export const createMember = (name, age) =>
  client.post(`/api/member`, { name, age });

export const fetchScheduleMemberList = (memberId) =>
  client.get(`/api/schedule/member/${memberId}`);

export const fetchTodoByMemberList = (memberId) =>
  client.get(`/api/todo/member/${memberId}`);

export const fetchTodoByScheduleList = (scheduleId) =>
  client.get(`/api/todo/schedule/${scheduleId}`);

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
