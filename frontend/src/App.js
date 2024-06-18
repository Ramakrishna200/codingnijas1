import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './Pages/auth/auth';
import StudentList from './Pages/studentlist/studentlist';
import AddStudent from './Pages/addstudent/addstudent';
import { InterviewList } from './Pages/InterviewList/interviewlist';
import { AddInterview } from './Pages/Addinterview/addinterview';
import AllocateStudent from './Pages/Allocatestudent/Allocatestudent';

import { AuthProvider } from "./context/authcontext";
import ErrorBoundary from './errorbondary';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <AuthProvider>
      <ErrorBoundary>
        <Router>
          <Navbar /> {/* Include the Navbar component here */}
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/student" element={<AddStudent />} />
            <Route path="/interviews" element={<InterviewList />} />
            <Route path="/add-interview" element={<AddInterview />} />
            <Route path="/allocate-student" element={<AllocateStudent />} />
            <Route path="/" element={<Auth />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </AuthProvider>
  );
}

export default App;
