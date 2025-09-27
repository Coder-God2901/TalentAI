import { Routes, Route, useNavigate } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { CandidateDashboard } from './components/CandidateDashboard';
import { RecruiterDashboard } from './components/RecruiterDashboard';
import { JobSearchPage } from './components/JobSearchPage';
import { SkillChallengePage } from './components/SkillChallengePage';
import { InterviewExperience } from './components/InterviewExperience';
import { ProfilePage } from './components/ProfilePage';
import { ThemeProvider, useTheme } from './ThemeContext';
import { ThemeToggleButton } from './components/ui/ThemeToggleButton';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';


// We create a "layout" component to handle the background color logic
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme(); // Get the current theme from context

  const backgroundClass = theme === 'dark'
    ? 'min-h-screen bg-gradient-to-br from-talentai-neutral-dark via-talentai-primary to-talentai-neutral-dark'
    : 'min-h-screen bg-talentai-neutral-light';

  return (
    <div className={backgroundClass}>
      <ThemeToggleButton /> {/* Add the button here! */}
      {children}
    </div>
  );
};
// A new, simplified Landing Page component that uses the router's navigation
const AppLandingPage = () => {
  const navigate = useNavigate();
  // The 'onNavigate' prop is no longer needed. We use the 'navigate' hook from the router.
  return <LandingPage onNavigate={(page) => navigate(`/${page}`)} />;
};

export default function App() {
  return (
    <ThemeProvider>
    <Routes>
      {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
      {/* Landing Page Route */}
      <Route path="/" element={<AppLandingPage />} />

      {/* Candidate Routes (Dark Theme) */}
      <Route path="/candidate-dashboard" element={<AppLayout><CandidateDashboard onNavigate={function (page: string, type?: 'candidate' | 'recruiter'): void {
        throw new Error('Function not implemented.');
      } } /></AppLayout>} />
      <Route path="/job-search" element={<AppLayout><JobSearchPage onNavigate={function (page: string, type?: 'candidate' | 'recruiter'): void {
        throw new Error('Function not implemented.');
      } } /></AppLayout>} />
      <Route path="/skill-challenge" element={<AppLayout><SkillChallengePage onNavigate={function (page: string, type?: 'candidate' | 'recruiter'): void {
        throw new Error('Function not implemented.');
      } } /></AppLayout>} />
      <Route path="/interview" element={<AppLayout><InterviewExperience onNavigate={function (page: string, type?: 'candidate' | 'recruiter'): void {
        throw new Error('Function not implemented.');
      } } /></AppLayout>} />
      <Route path="/profile" element={<AppLayout><ProfilePage onNavigate={function (page: string, type?: 'candidate' | 'recruiter'): void {
        throw new Error('Function not implemented.');
      } } /></AppLayout>} />
      
      {/* Recruiter Routes (Light Theme) */}
      <Route path="/recruiter-dashboard" element={<AppLayout><RecruiterDashboard onNavigate={function (page: string, type?: 'candidate' | 'recruiter'): void {
        throw new Error('Function not implemented.');
      } } /></AppLayout>} />
    </Routes>
    </ThemeProvider>
  );
}