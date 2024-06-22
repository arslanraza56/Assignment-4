const StudentList = document.getElementById("studentList");

const listArray = ["Arslan", "Ali", "Husnain", "Rafey"];

for (const students of listArray) {
  StudentList.innerHTML += <li>${students}</li>;
}