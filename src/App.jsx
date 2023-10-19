import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home page/HomePage";
import Dashboard from "./pages/dashboard/Dashboard";
import ProfilePage from "./pages/profile page/ProfilePage";
import LoginPage from "./pages/login page/LoginPage";
import UserPolicyPage from "./pages/user policy/UserPolicyPage";
import QuizPage from "./pages/quiz page/QuizPage";
import TrainingPage from "./pages/training page/TrainingPage";
import MainLayout from "./components/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='/' element={<MainLayout />}>
          <Route path='home' element={<HomePage />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='training' element={<TrainingPage />} />
          <Route path='policy' element={<UserPolicyPage />} />
          <Route path='quiz' element={<QuizPage />} />
          <Route path='profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
