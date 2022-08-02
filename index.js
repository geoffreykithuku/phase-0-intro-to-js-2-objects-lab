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
function deleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}
function  destructivelyDeleteFromEmployeeByKey(employee, key){
    return delete employee.name;
}

