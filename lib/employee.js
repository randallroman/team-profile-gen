class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    
    getName() {
        console.log(this.name);
        return this.name;
    };

    getId() {
        console.log(this.id);
        return this.id;
    };

    getEmail() {
        console.log(this.email);
        return this.email;
    };

    getRole() {
        console.log(this.role);
        return this.role;
    };
}

const employee = new Employee('Rose', 3, 'fake', 'Employee');

employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();

const newEmployee = new Employee('doofus', -1, 'not an email', 'peon');

newEmployee.getName();



module.exports = Employee;