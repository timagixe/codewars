/*

- TITLE:
Job Matching #1

- DESCRIPTION:
A candidate will have a minimum salary, so it will look like this:

let candidate = {
  minSalary: 120000
}
A job will have a maximum salary, so it will look like this:

let job = {
  maxSalary: 140000
}
If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate is a rockstar who enjoys programming on Codewars in their spare time. The company offering the job may be able to work something out.

- LABELS:
#ALGORITHMS

*/

const WIGGLE_PERCENT = 10;

function match(candidate, job) {
    if (!candidate.minSalary || !job.maxSalary) {
        throw new Error("Candidate or job has no salary requirements.");
    }

    const candidateSalaryWithWiggle =
        candidate.minSalary - candidate.minSalary * (WIGGLE_PERCENT / 100);

    return candidateSalaryWithWiggle <= job.maxSalary;
}
