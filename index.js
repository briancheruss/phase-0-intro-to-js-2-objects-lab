// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object using the spread operator, including the original employee properties
    return { ...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the employee object destructively and return it
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object without the specified key using the spread operator
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key destructively and return the modified employee
    delete employee[key];
    return employee;
  }
  
  
  
  
  
