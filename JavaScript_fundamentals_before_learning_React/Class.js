class School{
    constructor(fname,level,num_of_students){
        this.fname = fname;
        this.level = level;
        this.num_of_students = num_of_students;
    }

    //method to get Name
    getName(){
        return this.fname;
    }

    //method to get Level

    getLevel(){
        return this.level;
    }
        //method to get number of students

    

}

class Dkut extends School{
    getStudents(){
        return this.num_of_students;
    }
}

const kit= new Dkut("Dedan Kimathi University of Technology","University",15000)
console.log("Name of the Institution:",kit.getName())
console.log("Level of the Institution:",kit.getLevel())
console.log("Number of Students",kit.getStudents())

