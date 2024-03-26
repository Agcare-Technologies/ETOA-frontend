import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home page/HomePage';
import Dashboard from './pages/dashboard/Dashboard';
import LoginPage from './pages/login page/LoginPage';
import UserPolicyPage from './pages/user policy/UserPolicyPage';
import QuizPage from './pages/quiz page/QuizPage';
import TrainingPage from './pages/training page/TrainingPage';
import MainLayout from './components/MainLayout';
import ProgressPage from './pages/progress page/ProgressPage';
import ProfilePage from './pages/profile page/ProfilePage';
import GenerateIDCardPage from './pages/generate ID Card/GenerateIDCardPage';

function App() {
	return (
		<Routes>
			<Route path='login' element={<LoginPage />}></Route>
			<Route path='/' element={<MainLayout />}>
				<Route path='home' index element={<HomePage />} />
				<Route path='dashboard' element={<Dashboard />} />
				<Route path='training' element={<TrainingPage />} />
				<Route path='policy' element={<UserPolicyPage />} />
				<Route path='quiz' element={<QuizPage />} />
				<Route path='progress' element={<ProgressPage />} />
				<Route path='profile' element={<ProfilePage />} />
				<Route path='idCard' element={<GenerateIDCardPage />} />
			</Route>
		</Routes>
	);
}

export default App;
