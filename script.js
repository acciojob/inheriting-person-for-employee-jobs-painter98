// complete this js code
function Person(name, age){
	greet(){
		console.log(`Hello, my name is ${this.name} I am ${this.age} years old.`);
	}
}

function Employee(name, age, jobTitle){
  Person.apply(this, [name, age]);
  this.jobTitle = jobTitle;
	jobGreet(){
		console.log(`Hello, my name is ${this.name} I am ${this.age} years old, and my job title is ${this.jobTitle}`);
	}
}
Employee.prototype = new Person();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
