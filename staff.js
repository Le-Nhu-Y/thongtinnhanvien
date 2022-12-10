var readlineSync = require('readline-sync');
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(fullName, gender, birthday, email, phone) {
        this.users = [];
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }
    return Employee;
}());
var employeeList = [];
employeeList.push(new Employee("Lê Ý", Gender.Male, "20-02-1989", "ley@gmail.com", "0912"));
employeeList.push(new Employee("Lê Hùng", Gender.Female, "20-02-2000", "hung@gmail.com", "0123"));
employeeList.push(new Employee("Lê Hoàng", Gender.Male, "20-02-1997", "hoang@gmail.com", "0945"));
employeeList.push(new Employee("Lê Thái", Gender.Other, "20-02-1995", "thai@gmail.com", "0967"));
function showEmployee(employee) {
    console.table(employee);
}
showEmployee(employeeList);
