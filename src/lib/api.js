import client from "./client";

export const fetchStudyMember = (userNo) => client.get(`/api/member/${userNo}`);
export const fetchStudyMemberList = () => client.get(`/api/member`);
