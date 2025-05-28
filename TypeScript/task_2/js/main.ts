interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
      return "Working from home";
  }

  getCoffeeBreak(): string {
      return "Getting a coffee break";
  }

  workDirectorTasks(): string {
      return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
      return "Cannot work from home";
  }

  getCoffeeBreak(): string {
      return "Cannot have a break";
  }

  workTeacherTasks(): string {
      return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
  }
  return new Director();
}

// exemple
console.log(createEmployee(200));  // teacher
console.log(createEmployee(1000)); // director
console.log(createEmployee('$500')); // director

// check if an employee is a director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// function that execute work based on employee type
function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// exemple
executeWork(createEmployee(200));  // "Getting to work"
executeWork(createEmployee(1000)); // "Getting to director tasks"

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
  if ( todayClass == "Math") {
    console.log("Teaching Math");
  } else {
    console.log("Teaching History");
  }
}

console.log(teachClass("Math")); // "Teaching Math"
console.log(teachClass("History")); // "Teaching History"
