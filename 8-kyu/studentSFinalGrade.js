/*

- TITLE:
Student's Final Grade

- DESCRIPTION:
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases

- LABELS:
#FUNDAMENTALS

*/

const GRADERS = [
  (exam, projects) => (exam > 90 || projects > 10 ? 100 : undefined),
  (exam, projects) => (exam > 75 && projects >= 5 ? 90 : undefined),
  (exam, projects) => (exam > 50 && projects >= 2 ? 75 : undefined)
];

function finalGrade(exam, projects) {
  for (let grader of GRADERS) {
    const grade = grader(exam, projects);
    if (grade) return grade;
  }
  return 0;
}
