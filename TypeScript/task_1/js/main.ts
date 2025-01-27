interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  // [key: string]: any; // pouvoir ajouter des option siplementaires 
}

const Teacher1: Teacher = {
  firstName: "Jhon",
  lastName: "Soe",
  fullTimeEmployee: true,
  yearsOfExperience: 20,
  location: "Paris",
  // contract: true,
};


// cree le tableau des students
const TeacherList: Teacher[] = [Teacher1,];

const showelement = document.createElement("pre") // afficher sur la page
showelement.textContent = JSON.stringify(Teacher1, null, 2);

document.body.appendChild(showelement);

console.log(Teacher1);
