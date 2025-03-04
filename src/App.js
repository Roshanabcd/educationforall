import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Main Pages
import Dashboard from './pages/dashboard/Dashboard';
import Courses from './pages/courses/Courses';
import CoursePlayer from './pages/courses/CoursePlayer';
import Jobs from './pages/jobs/Jobs';
import CodeEditor from './pages/editor/CodeEditor';
import QASection from './pages/qa/QASection';
import Chat from './pages/chat/Chat';
import Projects from './pages/projects/Projects';
import Certificates from './pages/certificates/Certificates';
import AdminDashboard from './pages/admin/AdminDashboard';
import CodeEditorPage from './pages/CodeEditorPage/CodeEditorPage';

// Components
import Layout from './components/layout/Layout';
import PrivateRoute from './components/common/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Redirect root to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {/* Protected Routes */}
            <Route element={<Layout />}>
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/courses"
                element={
                  <PrivateRoute>
                    <Courses />
                  </PrivateRoute>
                }
              />
              <Route
                path="/course/:id"
                element={
                  <PrivateRoute>
                    <CoursePlayer />
                  </PrivateRoute>
                }
              />
              <Route
                path="/jobs"
                element={
                  <PrivateRoute>
                    <Jobs />
                  </PrivateRoute>
                }
              />
              <Route
                path="/editor"
                element={
                  <PrivateRoute>
                    <CodeEditor />
                  </PrivateRoute>
                }
              />
              <Route
                path="/code-editor"
                element={
                  <PrivateRoute>
                    <CodeEditorPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/qa"
                element={
                  <PrivateRoute>
                    <QASection />
                  </PrivateRoute>
                }
              />
              <Route
                path="/chat"
                element={
                  <PrivateRoute>
                    <Chat />
                  </PrivateRoute>
                }
              />
              <Route
                path="/projects"
                element={
                  <PrivateRoute>
                    <Projects />
                  </PrivateRoute>
                }
              />
              <Route
                path="/certificates"
                element={
                  <PrivateRoute>
                    <Certificates />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <AdminDashboard />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;