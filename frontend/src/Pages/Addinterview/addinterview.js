import React, { useState } from 'react';
import axios from 'axios';
import "./addinterview.css"

export const AddInterview = () => {
  const [companyName, setCompanyName] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/interviews/add', { companyName, date });
      // redirect to interview list page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Add Interview</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="input-field"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="date"
          className="input-field"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit" className="button">Add Interview</button>
      </form>
    </div>
  );
};
