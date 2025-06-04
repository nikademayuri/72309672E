let students = [];

exports.getAllStudents = (req, res) => {
  res.json(students);
};

exports.createStudent = (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: "Name and age are required" });
  }
  const newStudent = { id: students.length + 1, name, age };
  students.push(newStudent);
  res.status(201).json(newStudent);
};
