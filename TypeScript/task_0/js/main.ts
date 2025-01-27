interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Cloe",
  lastName: "Doe",
  age: 20,
  location: "Paris",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Dooee",
  age: 22,
  location: "Lyon",
};

// cree lle tableau des students
const studentsList: Student[] = [student1, student2];

// creation d'une table html avec vanilla
const table = document.createElement("table");
const tbody = document.createElement("tbody");

// mettre les etudiant dans la table
studentsList.forEach((student) => {
  const row = document.createElement("tr"); // la ligne tr contient deux td

  const firstNameCell = document.createElement("td"); // une case pour le first name
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td"); // une case pour la location
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell); // la case firstname deviens un enfant de la ligne
  row.appendChild(locationCell); // la case location deviens un enfant de la ligne
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table); // on ajoute le tableau a <body>
