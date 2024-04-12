import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { ListGroup, Button, Form } from "react-bootstrap";

function StudentList() {
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = () => {
    setStudents([...students, { name, age, email }]);
    setName("");
    setAge("");
    setEmail("");
  };

  const removeStudent = (index) => {
    const newStudents = [...students];
    newStudents.splice(index, 1);
    setStudents(newStudents);
  };

  return (
    <div className="container">
      <h1>Student List</h1>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={addStudent}>
          Add Student
        </Button>
      </Form>

      <ListGroup>
        {students.map((student, index) => (
          <ListGroup.Item key={index}>
            Name: {student.name}, Age: {student.age}, Email: {student.email}
            <Button
              variant="danger"
              onClick={() => removeStudent(index)}
              style={{ float: "right" }}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default StudentList;
