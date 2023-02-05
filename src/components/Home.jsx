import React from 'react';
import '../css/common/Button.scss';
import '../css/common/Icons.scss';
import '../css/common/Box.scss';
import { IoIosCreate, IoIosContacts } from 'react-icons/io';

const Home = () => {
  return (
    <div>
      <div className="middle">스터디에 오신 것을 환영합니다.</div>
      <div className="middle">
        <button className="w-btn-outline w-btn-blue-outline">
          스터디 조회하기 <IoIosContacts className="size25" />
        </button>
        <button className="w-btn-outline w-btn-blue-outline">
          스터디 만들기 <IoIosCreate className="size25" />
        </button>
      </div>
    </div>
  );
};

export default Home;
