import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MemberListPage from "./pages/member/MemberListPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/member" element={<MemberListPage />} />
        </Routes>
    );
}

export default App;
