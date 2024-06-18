import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Interviewlist.css"

export const InterviewList = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const fetchInterviews = async () => {
      const { data } = await axios.get('/api/interviews');
      setInterviews(data);
    };

    fetchInterviews();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Interviews</h1>
      <ul className="interview-list">
        {interviews.map((interview) => (
          <li key={interview._id} className="interview-item">
            <span className="company-name">{interview.companyName}</span>
            <span className="interview-date">
              {new Date(interview.date).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
