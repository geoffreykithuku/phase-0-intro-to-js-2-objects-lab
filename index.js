// Write your solution in this file!
const employee = {
    name:"Sam",
    streetAddress:"11 Broadway"
}
function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...employee,
        streetAddress : "11 Broadway"
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    
    employee.streetAddress = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee, name){
    let newEmployee = {
        ...employee
    }
    delete newEmployee.name;
    return newEmployee;
}
function  destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
}

