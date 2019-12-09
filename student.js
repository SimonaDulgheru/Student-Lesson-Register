

class Student{
    constructor(name){
        this.name = name;
        
        if(this.name === undefined)
            throw Error(`Error,  you must provide a name for the student!`)
    }
    
}


 module.exports = Student;