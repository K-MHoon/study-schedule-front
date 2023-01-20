import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ScheduleListForm from '../../components/schedule/ScheduleListForm';
import * as api from '../../lib/api';

const ScheduleListContainer = () => {
  const { memberId } = useParams();
  const [schedules, setSchedules] = useState([]);

  const getMemberList = async () => {
    try {
      const response = await api.fetchScheduleMemberList(memberId);
      setSchedules(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMemberList();
  }, []);

  return <ScheduleListForm schedules={schedules} />;
};

export default ScheduleListContainer;
