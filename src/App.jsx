import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import CourseListingPage from './pages/CourseListingPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import StudentDashboard from './pages/StudentDashboard';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<CourseListingPage />} />
              <Route path="/course/:id" element={<CourseDetailsPage />} />
              <Route path="/dashboard" element={<StudentDashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;