import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MemberListPage from './pages/member/MemberListPage';
import MemberRegisterPage from './pages/member/MemberRegisterPage';
import ScheduleListPage from './pages/schedule/ScheduleListPage';
import ScheduleCreatePage from './pages/schedule/ScheduleCreatePage';
import TodoByScheduleListPage from './pages/todo/TodoByScheduleListPage';
import TodoByMemberListPage from './pages/todo/TodoByMemberListPage';
import PublicStudyListPage from './pages/study/PublicStudyListPage';
import LoginPage from './pages/auth/LoginPage';
import Private from './modules/Private';
import MemberProfilePage from './pages/member/MemberProfilePage';
import StudyCreatePage from './pages/study/StudyCreatePage';
import StudyDetailPage from './pages/study/StudyDetailPage';
import StudyRegisterPage from './pages/study/StudyRegisterPage';
import StudyManagePage from './pages/study/StudyManagePage';
import TodoCreatePage from './pages/todo/TodoCreatePage';
import StudyInfoPage from './pages/study/StudyInfoPage';
import TodayScheduleListPage from './pages/schedule/TodayScheduleListPage';
import MemberSchedulePage from './pages/schedule/MemberSchedulePage';
import ScheduleDetailPage from './pages/schedule/ScheduleDetailPage';
import StudyCodePage from './pages/study/StudyCodePage';
import TodoManagePage from './pages/todo/TodoManagePage';

export const Url = {
  studyInfoPage: '/info/study',
};

const App = () => {
  return (
    <Routes>
      {/* <Route element={<Private />}> */}
      <Route path="/member/profile" element={<MemberProfilePage />} />
      <Route path="/members" element={<MemberListPage />} />
      <Route path="/study/create" element={<StudyCreatePage />} />
      <Route path="/study/:studyId/register" element={<StudyRegisterPage />} />
      <Route path={Url.studyInfoPage} element={<StudyInfoPage />} />
      <Route
        path={`${Url.studyInfoPage}/:studyId`}
        element={<StudyManagePage />}
      />
      <Route
        path={`${Url.studyInfoPage}/:studyId/studyCode`}
        element={<StudyCodePage />}
      />
      <Route path="/schedule/create" element={<ScheduleCreatePage />} />
      <Route path="/study/:studyId/schedules" element={<ScheduleListPage />} />
      <Route
        path="/study/:studyId/schedules/manage"
        element={<MemberSchedulePage />}
      />
      <Route
        path="/schedule/:scheduleId/todos"
        element={<TodoByScheduleListPage />}
      />
      <Route
        path="/study/:studyId/schedule/:scheduleId"
        element={<ScheduleDetailPage />}
      />
      <Route path="/member/todos" element={<TodoByMemberListPage />} />
      <Route path="/todo/create" element={<TodoCreatePage />} />
      <Route path="/schedule/today" element={<TodayScheduleListPage />} />
      <Route path="/member/todos/manage" element={<TodoManagePage />} />
      {/* </Route> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/study/:studyId" element={<StudyDetailPage />} />

      <Route path="/member/register" element={<MemberRegisterPage />} />

      <Route path="/study/public" element={<PublicStudyListPage />} />
    </Routes>
  );
};

export default App;
