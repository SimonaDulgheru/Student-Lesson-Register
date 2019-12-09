
const Teacher = require(`./teacher`);
const Student = require(`./student`);
const Lesson = require(`./lesson`);


const teacher1 = new Teacher('Node.js', 'Billy');

const student1 = new Student('Andreas');
const student2 = new Student('Dan');
const student3 = new Student(`Bob`);
const student4 = new Student(`Nuimar`);
const student5 = new Student(`Brad`);
const nodeLesson = new Lesson(teacher1, [
    student1,
    student2,
    student3,
    student4,
    student5,
    
]);
nodeLesson.markOnTime([
    student1,
    
]);
nodeLesson.markLate([
    student3,
  
]);
nodeLesson.outputSummary();










