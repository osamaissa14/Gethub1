import React from 'react';
import StudentCard from './StudentCard'; // ✅ You must have this file/component

const student = [
  { id: 1, name: "Sarah Ali", grade: 95 },
  { id: 2, name: "Omar Tarek", grade: 82 },
  { id: 3, name: "Lina Haddad", grade: 76 }
];

const StudentList = () => {
  return (
    <div>
      <h2>Student List</h2>
      {student.map((s) => (
        <StudentCard key={s.id} name={s.name} grade={s.grade} />
      ))}
    </div>
  );
};

export default StudentList;
