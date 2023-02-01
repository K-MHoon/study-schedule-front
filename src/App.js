import logo from './logo.svg';
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/member" element={<MemberListPage />} />
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
    </Routes>
  );
}

export default App;
