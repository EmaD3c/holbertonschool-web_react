interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

// additionner les MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "MajorCredits" };
}

// additionner les MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "MinorCredits" };
}

// exemple
const major1: MajorCredits = { credits: 30, brand: "MajorCredits" };
const major2: MajorCredits = { credits: 20, brand: "MajorCredits" };

const minor1: MinorCredits = { credits: 10, brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 5, brand: "MinorCredits" };

const resultMajor = sumMajorCredits(major1, major2);
const resultMinor = sumMinorCredits(minor1, minor2);

console.log("Total Major Credits:", resultMajor);
console.log("Total Minor Credits:", resultMinor);
