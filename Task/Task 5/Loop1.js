//For the given JSON iterate over all the loops (for, for in , for of)
//Assuming entering the details of the employees in the DB

const data = {
    "employeeDetails": [
      {"id": 1001, "firstName": "Karan", "age": 26},
      {"id": 1002, "firstName": "Jai", "age": 30},
      {"id": 1003, "firstName": "Vinoth", "age": 24},
      {"id": 1004, "firstName": "Raj ", "age": 28},
      {"id": 1004, "firstName": " Naveen ", "age": 23}
    ]
  };

  console.log("Output using 'For' loop");
  for (let i=0; i<data.employeeDetails.length;i++) {
    console.log("ID - " + data.employeeDetails[i].id);
    console.log("Firstname is " + data.employeeDetails[i].firstName);
    console.log("Age is " + data.employeeDetails[i].age);
  }

  console.log("--------------------------------------------------------------");

  console.log("Output using 'for of' loop");
  for (let user of data.employeeDetails) {
    console.log("ID - " + user.id);
    console.log("Firstname is " + user.firstName);
    console.log("Age is " + user.age);
  }
  console.log("---------------------------------------------------------------");

  console.log("Output using 'for in' loop");
  for (let index in data.employeeDetails) {
    console.log("Id - " + data.employeeDetails[index].id);
    console.log("Firstname is " + data.employeeDetails[index].firstName);
    console.log("Age is " + data.employeeDetails[index].age);
  }

  console.log("---------------------------------------------------------------");

  console.log("Output using 'for Each' loop");
  data.employeeDetails.forEach(employee => {
    console.log(`ID: ${employee.id}, Name: ${employee.firstName}, Age: ${employee.age}`);
  });