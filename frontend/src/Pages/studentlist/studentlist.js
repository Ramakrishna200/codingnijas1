import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./studentlist.css"

const StudentListComponent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const { data } = await axios.get('/api/students');
      setStudents(data);
    };

    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Students</h1>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student._id} className="student-item">
            <div className="student-info">
              <span className="student-name">{student.name}</span>
              <span className="student-college">{student.college}</span>
            </div>
            <span className={`student-status ${student.status.toLowerCase()}`}>
              {student.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentListComponent;
