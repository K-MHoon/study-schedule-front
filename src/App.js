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

const App = () => {
  return (
    <Routes>
      <Route element={<Private />}>
        <Route path="/member/profile" element={<MemberProfilePage />} />
        <Route path="/members" element={<MemberListPage />} />
        <Route path="/study/create" element={<StudyCreatePage />} />
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/login" element={<LoginPage />} />

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
