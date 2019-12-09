


class Lesson {
    constructor(teacher,students){
        this.teacher = teacher;
        this.students = students;
        this.isLate = [];
        this.onTime = [];
        this.absent = [];

        
        if(this.teacher === undefined)
            console.log(`Error, you must provide a name for the teacher and a name for the student `)
        if(this.students === undefined)
            console.log(`Error, you must provide students `)

        // students.map
        // [{ student: new Student(), isLate: false, onTime: false } ]
    }

    markOnTime(onTimeStudents){
        onTimeStudents.map[{ student: new Student(), isLate: false, onTime: true }];
           this.onTime.push (...onTimeStudents);
    }
    
    markLate(lateStudents){
        lateStudents.map[{ student: new Student(), isLate: true, onTime: false }];
           this.isLate.push (...lateStudents);
    }

    outputSummary() {
        console.log(`The ${this.subject}  lesson was conducted by ${this.name}`) 

        onTimeStudents.forEach(student => {
            return (`${student.name} was on time`)
        });

        lateStudents.forEach(student => {
            return (`${student.name} was late`);
        });

        if(this.onTime.lenght + this.isLate !== students.lenght){
            const absentStudent = this.absentStu();
            absentStudent.map [{ student: new Student(), isLate: false, onTime: false } ]
            console.log(`${name} was absent`);
        }

        absentStudents.forEach(student => {
            return (`${student.name} was absent`)
        });
}

        absentStu(){
            const presentStudents = [...this.onTime, ...this.isLate];
            return this.students.filter(student =>{
                return !presentStudents.includes(student);
            });
        }
}       
        

module.exports = Lesson;
