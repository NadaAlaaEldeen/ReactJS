import React from "react";
import "./students.css";
function Students({ students }) {
  let RenderStudents = (All) => {
    if (All) {
      return Array.from(All).map((student, index) => {
        return (
          <div>
            <table className="student-table">
              <tbody>
                <tr key={index}>
                  <td> {student.name}</td>
                  <td>{student.age}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      });
    }
  };

  console.log(students);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Students</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
      </table>
      {RenderStudents(students)}
    </div>
  );
}

export default Students;