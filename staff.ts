let readlineSync = require('readline-sync');
enum Gender {
    Male,
    Female,
    Other,
}
class Employee {
    fullName: string;
    gender: Gender;
    birthday: string;
    email: string;
    phone: string;
    users: Employee[] = [];
    constructor(fullName: string,
                gender: Gender,
                birthday: string,
                email: string,
                phone: string)
    {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }

    // addUser(): void {
    //     let fullName = readlineSync.question('Nhap Name: ')
    //     let gender = readlineSync.question('Nhap giới tính: ')
    //     let birthday = readlineSync.question('Nhap ngày sinh: ')
    //     let email = readlineSync.question('Nhap Email: ')
    //     let phone = readlineSync.question('Nhập số điện thoại: ')
    //     let user = new Employee(fullName, gender, birthday,email, phone);
    //     this.users.push(user)
    // }
}
let employeeList: Employee[] = [];
employeeList.push(new Employee("Lê Ý",Gender.Male,"20-02-1989","ley@gmail.com","0912"));
employeeList.push(new Employee("Lê Hùng",Gender.Female,"20-02-2000","hung@gmail.com","0123"));
employeeList.push(new Employee("Lê Hoàng",Gender.Male,"20-02-1997","hoang@gmail.com","0945"));
employeeList.push(new Employee("Lê Thái",Gender.Other,"20-02-1995","thai@gmail.com","0967"));

function showEmployee(employee){
    console.table(employee);
}
showEmployee(employeeList)
