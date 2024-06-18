import React, { useState } from 'react';
import axios from 'axios';
import "./add.css";

const AddStudent = () => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [status, setStatus] = useState('not_placed');
  const [dsaScore, setDsaScore] = useState(0);
  const [webdScore, setWebdScore] = useState(0);
  const [reactScore, setReactScore] = useState(0);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/students/add', { name, college, status, dsaScore, webdScore, reactScore });
      // redirect to student list page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitHandler} className="add-student-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="college">College:</label>
        <input
          type="text"
          id="college"
          placeholder="Enter College Name"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Placement Status:</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="placed">Placed</option>
          <option value="not_placed">Not Placed</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="dsaScore">DSA Score:</label>
        <input
          type="number"
          id="dsaScore"
          placeholder="Enter DSA Score (0-100)"
          value={dsaScore}
          onChange={(e) => setDsaScore(e.target.value)}
          min={0}
          max={100}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="webdScore">Web Development Score:</label>
        <input
          type="number"
          id="webdScore"
          placeholder="Enter Web Development Score (0-100)"
          value={webdScore}
          onChange={(e) => setWebdScore(e.target.value)}
          min={0}
          max={100}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="reactScore">React Score:</label>
        <input
          type="number"
          id="reactScore"
          placeholder="Enter React Score (0-100)"
          value={reactScore}
          onChange={(e) => setReactScore(e.target.value)}
          min={0}
          max={100}
          required
        />
      </div>
      <button type="submit" className="add-student-btn">
        Add Student
      </button>
    </form>
  );
};

export default AddStudent;
