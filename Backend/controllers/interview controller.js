import { Interview } from '../modoles/interviewmodal.js';
import { Student } from '../modoles/studentmodal.js';

export const addInterview = async (req, res) => {
  const { companyName, date } = req.body;

  const interview = new Interview({
    companyName,
    date,
  });

  await interview.save();
  res.status(201).json(interview);
};

export const getInterviews = async (req, res) => {
  const interviews = await Interview.find({}).populate('students.student');
  res.json(interviews);
};

export const allocateStudentToInterview = async (req, res) => {
  const { studentId, interviewId } = req.body;

  const interview = await Interview.findById(interviewId);
  const student = await Student.findById(studentId);

  if (!interview || !student) {
    return res.status(404).json({ message: 'Student or Interview not found' });
  }

  interview.students.push({ student: studentId });
  await interview.save();

  res.status(201).json(interview);
};

export const updateInterviewResult = async (req, res) => {
  const { interviewId, studentId, result } = req.body;

  const interview = await Interview.findById(interviewId);

  const studentInterview = interview.students.find(
    (stu) => stu.student.toString() === studentId
  );

  if (studentInterview) {
    studentInterview.result = result;
    await interview.save();
    res.status(200).json(interview);
  } else {
    res.status(404).json({ message: 'Student not found in this interview' });
  }
};

