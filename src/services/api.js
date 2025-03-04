import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth Services
export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

// Course Services
export const courseService = {
  getAllCourses: () => api.get('/courses'),
  getCourseById: (id) => api.get(`/courses/${id}`),
  enrollCourse: (courseId) => api.post(`/courses/${courseId}/enroll`),
  updateProgress: (courseId, progress) => 
    api.put(`/courses/${courseId}/progress`, { progress }),
  getEnrolledCourses: () => api.get('/courses/enrolled'),
};

// Chat Services
export const chatService = {
  getMessages: (contactId) => api.get(`/chat/${contactId}`),
  sendMessage: (contactId, message) => 
    api.post(`/chat/${contactId}`, { message }),
  getContacts: () => api.get('/chat/contacts'),
};

// Jobs Services
export const jobService = {
  getAllJobs: () => api.get('/jobs'),
  applyForJob: (jobId) => api.post(`/jobs/${jobId}/apply`),
  getApplications: () => api.get('/jobs/applications'),
};

// Certificate Services
export const certificateService = {
  getCertificates: () => api.get('/certificates'),
  generateCertificate: (courseId) => 
    api.post(`/certificates/generate/${courseId}`),
  downloadCertificate: (certificateId) => 
    api.get(`/certificates/${certificateId}/download`),
};

// Q&A Services
export const qaService = {
  getQuestions: () => api.get('/qa'),
  askQuestion: (question) => api.post('/qa', question),
  answerQuestion: (questionId, answer) => 
    api.post(`/qa/${questionId}/answer`, { answer }),
  voteQuestion: (questionId, voteType) => 
    api.post(`/qa/${questionId}/vote`, { voteType }),
};

export default api;