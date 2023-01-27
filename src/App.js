import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MemberListPage from './pages/member/MemberListPage';
import MemberRegisterPage from './pages/member/MemberRegisterPage';
import ScheduleListPage from './pages/schedule/ScheduleListPage';
import TodoListPage from './pages/todo/TodoListPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/member" element={<MemberListPage />} />
      <Route path="/member/register" element={<MemberRegisterPage />} />
      <Route path="/member/:memberId/schedule" element={<ScheduleListPage />} />
      <Route
        path="/member/:memberId/schedule/:scheduleId/todos"
        element={<TodoListPage />}
      />
    </Routes>
  );
}

export default App;
