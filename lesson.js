
const boxen = require("boxen");

class Lesson {
    constructor(teacher,studentList){
        this.teacher = teacher;
        this.studentList = studentList;

        this.isLate = [];
        this.onTime = [];
        this.absent = [];

        
        if(this.teacher === undefined){
            throw Error (`Error, you must provide a name for the teacher and a name for the student `)
        }
            
        if(this.studentList === undefined) {
            throw Error (`Error, you must provide students `)
        }
    }

    markOnTime(onTimeStudents){
        onTimeStudents.map(student => {
            if(this.studentList.includes(student)){
                this.onTime.push(...onTimeStudents)
            }
        })
    }
    
    markLate(lateStudents){
        lateStudents.map(student => {
            if(this.studentList.includes(student)){
                this.isLate.push(...lateStudents)
            }
        })
    }

    outputSummary() {

        console.log(boxen('STUDENTS ATTENDANCE', { margin:1, borderStyle: 'round', borderColor:'green'}));
        this.onTime.forEach(student => {
            console.log (`${student.name} was on time`)
        });

        this.isLate.forEach(student => {
            console.log (`${student.name} was late`);
        });

        if(this.onTime.length + this.isLate.length !== this.studentList.length){
            const absentStudent = this.markAbsent();
            absentStudent.map (({name}) => console.log(`${name} was absent`))
         
        }
    }
        markAbsent(){
            const presentStudents = [...this.onTime, ...this.isLate];
            return this.studentList.filter(student =>{
                return !presentStudents.includes(student);
            });
        }
}       
        

module.exports = Lesson;
