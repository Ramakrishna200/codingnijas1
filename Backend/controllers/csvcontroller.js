
import { createObjectCsvWriter } from 'csv-writer';
import { Student } from '../modoles/studentmodal.js';
import { Interview } from '../modoles/interviewmodal.js';

 export const downloadCSV = async (req, res) => {
  const students = await Student.find({});
  const interviews = await Interview.find({}).populate('students.student');

  const records = [];
  interviews.forEach((interview) => {
    interview.students.forEach((stu) => {
      const student = students.find((s) => s._id.toString() === stu.student._id.toString());
      records.push({
        studentId: student._id,
        studentName: student.name,
        studentCollege: student.college,
        studentStatus: student.status,
        dsaScore: student.dsaScore,
        webdScore: student.webdScore,
        reactScore: student.reactScore,
        interviewDate: interview.date,
        interviewCompany: interview.companyName,
        interviewStudentResult: stu.result,
      });
    });
  });

  const csvWriter = createObjectCsvWriter({
    path: 'students_interviews.csv',
    header: [
      { id: 'studentId', title: 'Student ID' },
      { id: 'studentName', title: 'Student Name' },
      { id: 'studentCollege', title: 'Student College' },
      { id: 'studentStatus', title: 'Student Status' },
      { id: 'dsaScore', title: 'DSA Score' },
      { id: 'webdScore', title: 'WebD Score' },
      { id: 'reactScore', title: 'React Score' },
      { id: 'interviewDate', title: 'Interview Date' },
      { id: 'interviewCompany', title: 'Interview Company' },
      { id: 'interviewStudentResult', title: 'Interview Result' },
    ],
  });

  await csvWriter.writeRecords(records);
  res.download('students_interviews.csv');
};


