// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 20,
  location: 'Paris'
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Johnson',
  age: 22,
  location: 'New York'
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create the table and populate it
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
