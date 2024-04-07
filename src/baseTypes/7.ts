/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
let arrWorkingDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']


function isWeekend(day: string): boolean {
  for (const day of arrWorkingDays) {
    if (arrWorkingDays.includes(day)) 
      return { '${day} is working day'};
  }
  return { '${day} is weekend'}
}
isWeekend()