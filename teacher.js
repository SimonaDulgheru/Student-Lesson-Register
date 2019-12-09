const boxen = require("boxen");


class Teacher  {
    constructor(subject, name){
        this.subject = subject;
        this.name = name;

        if(!subject){
            throw Error(`Error,  you must provide a subject! `) 
        }
            
        if(!name){
            throw Error(`Error,  you must provide a name!`)
        } 
            
        
        else{
            console.log(boxen('LESSON AND TEACHER', { margin: 1, borderStyle: 'round', borderColor:'green'}));
            console.log(`The ${this.subject} lesson was conducted by ${this.name}`) 
            
        }
    }  
   
}

module.exports = Teacher;