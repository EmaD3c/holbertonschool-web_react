/// <reference path="./js/subjects/Teacher.ts" />
/// <reference path="./js/subjects/Subject.ts" />
/// <reference path="./js/subjects/Cpp.ts" />
/// <reference path="./js/subjects/React.ts" />
/// <reference path="./js/subjects/Java.ts" />

const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();

const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 5,
};

console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("\nReact");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log("\nJava");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
