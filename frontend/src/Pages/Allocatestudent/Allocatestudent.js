import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./alocatestudent.css"

const AllocateStudent = () => {
  const [students, setStudents] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [interviewId, setInterviewId] = useState('');

  useEffect(() => {
    const fetchStudentsAndInterviews = async () => {
      const [studentsData, interviewsData] = await Promise.all([
        axios.get('/api/students'),
        axios.get('/api/interviews'),
      ]);
      setStudents(studentsData.data);
      setInterviews(interviewsData.data);
    };

    fetchStudentsAndInterviews();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/interviews/allocate', { studentId, interviewId });
      // redirect to interview list page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Allocate Student to Interview</h1>
      <form onSubmit={submitHandler}>
        <select
          className="select-field"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        >
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student._id} value={student._id}>
              {student.name}
            </option>
          ))}
        </select>
        <select
          className="select-field"
          value={interviewId}
          onChange={(e) => setInterviewId(e.target.value)}
        >
          <option value="">Select Interview</option>
          {interviews.map((interview) => (
            <option key={interview._id} value={interview._id}>
              {interview.companyName} - {new Date(interview.date).toLocaleDateString()}
            </option>
          ))}
        </select>
        <button type="submit" className="button">Allocate Student</button>
      </form>
    </div>
  );
};

export default AllocateStudent;
