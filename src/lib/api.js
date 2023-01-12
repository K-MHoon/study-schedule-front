import client from './client';

export const fetchStudyMember = (userId) => client.get(`/api/member/${userId}`);
export const fetchStudyMemberList = () => client.get(`/api/member`);
export const createMember = (name, age) =>
  client.post(`/api/member`, { name, age });

export const fetchScheduleMemberList = (memberId) =>
  client.get(`/api/schedule/member/${memberId}`);
