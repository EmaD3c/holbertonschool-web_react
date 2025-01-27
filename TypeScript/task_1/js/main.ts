interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [key: string]: any; // pouvoir ajouter des option siplementaires 
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const Director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    yearsOfExperience: 20,
    fullTimeEmployee: true,
    numberOfReports: 3,
}

const Teacher1: Teacher = {
  firstName: "Jhon",
  lastName: "Soe",
  fullTimeEmployee: true,
  yearsOfExperience: 20,
  location: "Paris",
  contract: true,
};

// interface pour printteacherfonction
interface printTeacher {
  (firstName: string, lastName: string): string;
}

//  returns the first letter of the firstName and the full lastName
const printTeacher: printTeacher = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));
console.log(printTeacher(Teacher1.firstName, Teacher1.lastName)); // resultat voulu  : J. Soe


// cree le tableau des students
const TeacherList: Teacher[] = [Teacher1,];

const showelement = document.createElement("pre") // afficher sur la page
showelement.textContent = `Teacher: ${JSON.stringify(Teacher1, null, 2)}
\nDirector: ${JSON.stringify(Director1, null, 2)}`;

document.body.appendChild(showelement);

console.log(Teacher1);
console.log(Director1);
