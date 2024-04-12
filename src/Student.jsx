// import { useState, useEffect } from "react";
// function Student() {
//   const [students, setStudents] = useState(
//     JSON.parse(localStorage.getItem("students")) || []
//   );
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     localStorage.setItem("students", JSON.stringify(students));
//   }, [students]);

//   const addStudent = () => {
//     setStudents([...students, { name, age, email }]);
//     setName("");
//     setAge("");
//     setEmail("");
//   };

//   const removeStudent = (index) => {
//     const newStudents = [...students];
//     newStudents.splice(index, 1);
//     setStudents(newStudents);
//   };
// }

// export default Student;
