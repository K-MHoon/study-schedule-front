import React from 'react';
import StudyInfoForm from '../../components/study/StudyInfoForm';

export const removeList = async (removeFunction, items, message) => {
  if (items.length === 0) {
    alert('목록에서 선택된 것이 없습니다.');
    return;
  }
  try {
    await removeFunction(items);
    alert(message);
    window.location.reload();
  } catch (e) {
    console.log(e);
    if (e.response.status === 504) {
      alert('서버가 점검 중입니다. 관리자에게 문의해주세요.');
    } else {
      if (!e.response.data.errorList) {
        alert(`[Failed] ${e.response.data.message} \n`);
      } else {
        alert(`[Failed] ${e.response.data.errorList[0].message}`);
      }
    }
  }
};

const StudyInfoContainer = () => {
  return <StudyInfoForm />;
};

export default StudyInfoContainer;
