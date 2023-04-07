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
import MyStudyPage from './pages/study/MyStudyPage';
import StudyManagePage from './pages/study/StudyManagePage';

const App = () => {
  return (
    <Routes>
      <Route element={<Private />}>
        <Route path="/member/profile" element={<MemberProfilePage />} />
        <Route path="/members" element={<MemberListPage />} />
        <Route path="/study/create" element={<StudyCreatePage />} />
        <Route
          path="/study/:studyId/register"
          element={<StudyRegisterPage />}
        />
        <Route path="/study/my" element={<MyStudyPage />} />
        <Route path="/study/my/manage/:studyId" element={<StudyManagePage />} />
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/study/:studyId" element={<StudyDetailPage />} />

      <Route path="/member/register" element={<MemberRegisterPage />} />
      <Route path="/member/:memberId/schedule" element={<ScheduleListPage />} />
      <Route
        path="/member/:memberId/schedule/create"
        element={<ScheduleCreatePage />}
      />
      <Route
        path="/member/:memberId/schedule/:scheduleId/todos"
        element={<TodoByScheduleListPage />}
      />
      <Route
        path="/member/:memberId/schedule/create/todos"
        element={<TodoByMemberListPage />}
      />
      <Route path="/study/public" element={<PublicStudyListPage />} />
    </Routes>
  );
};

export default App;
