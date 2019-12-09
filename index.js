
const Teacher = require(`./teacher`);
const Student = require(`./student`);
const Lesson = require(`./lesson`);
var unidecode = require('unidecode');

const teacher1 = new Teacher('Maths', 'Billy');
const student1 = new Student('Bilaal');
const student2 = new Student('Nath');
const student3 = new Student('Tom');
const mathsLesson = new Lesson(Teacher, [
    student1,
    student2,
    student3,
]);
mathsLesson.markOnTime([
    student1,
]);
mathsLesson.markLate([
    student2,
]);
mathsLesson.outputSummary();










