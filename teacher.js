class Teacher  {
    constructor(subject, name){
        this.subject = subject;
        this.name = name;

        if(this.subject === undefined){
            throw Error(`Error,  you must provide a subject and a name! `) 
        }
            
           if(this.name === undefined){
            throw Error(`Error,  you must provide a subject and a name!`)
        } 
            
        
        else{
            console.log(`The ${this.subject}  lesson was conducted by ${this.name}`) 
        }
    }
        
   
}

module.exports = Teacher;