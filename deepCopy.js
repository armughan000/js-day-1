//example 1
let student1 = {
    name: "Ali",
    company: "asd"
}
 
let student2 = { ...student1 };
 
student1.name = "Ahmed";
student2.company = "dada";
 
console.log("student 1 name is", student1.name);
console.log("student 1 company is", student1.company);
console.log("student 2 name is ", student2.name);
console.log("student 2 company is ", student2.company);

//example 2

const originalObject = {
    name: "John",
    age: 30,
};


const deepCopyObject = JSON.parse(JSON.stringify(originalObject));

deepCopyObject.age = 35;

console.log("Original Object:", originalObject);
console.log("Deep Copy Object:", deepCopyObject);