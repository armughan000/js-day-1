//example 1

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
 
console.log("Employee ", employee);
let newEmployee = employee;
console.log("New Employee ", newEmployee);
 
newEmployee.ename = "Beck";
console.log("Employee ", employee);
console.log("New Employee ", newEmployee);

//example 2

let users = [
    {'id': 1, 'name': 'Alice', 'active': true},
    {'id': 2, 'name': 'Bob', 'active': false},
    {'id': 3, 'name': 'Charlie', 'active': false},
    {'id': 4, 'name': 'David', 'active': true}
];

let filteredUsers = users.filter(user => user.active);
filteredUsers.forEach(user => {
    user.name += " active";
});

console.log(filteredUsers);
console.log(users);

//example 3

const originalArray = [1, 2, [3, 4]];
const shallowCopy = Object.assign({}, originalArray);
shallowCopy[2][0] = 99;
console.log(originalArray);