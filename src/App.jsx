import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home page/HomePage";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginPage from "./pages/login page/LoginPage";
import UserPolicyPage from "./pages/user policy/UserPolicyPage";
import QuizPage from "./pages/quiz page/QuizPage";
import TrainingPage from "./pages/training page/TrainingPage";
import MainLayout from "./components/MainLayout";
import ProgressPage from "./pages/progress page/ProgressPage";
import ProfilePage from "./pages/profile page/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='login' index element={<LoginPage />} />
        <Route path='/' element={<MainLayout />}>
          <Route path='home' index element={<HomePage />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='training' element={<TrainingPage />} />
          <Route path='policy' element={<UserPolicyPage />} />
          <Route path='quiz' element={<QuizPage />} />
          <Route path='progress' element={<ProgressPage />} />
          <Route path='profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
