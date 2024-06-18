import { Student } from "../modoles/studentmodal.js";

export const addStudent = async (req, res) => {
  const { name, college, status, dsaScore, webdScore, reactScore } = req.body;

  const student = new Student({
    name,
    college,
    status,
    dsaScore,
    webdScore,
    reactScore,
  });

  await student.save();
  res.status(201).json(student);
};

export const getStudents = async (req, res) => {
  const students = await Student.find({});
  res.json(students);
};


