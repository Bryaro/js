// var name = "Jack";
// var age = 23;
// var shootingScore } 45.6;

// var message = "Hi, my name is " + name + " and I am" + age + " years old!";


// var firstName = "john";
// var lastName = "JacobJingleHeimerSmith";
// var dateOfBirth = "10-09-82";
// var age = 23;
// var profileImgUrl = "http://phpography.com/images/cool-wallpapers-hd-wallpaper-22.jpg";


// var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!" ;


// console.log(loginWelcomeMessage);

// var sum = 10 + 15;
// var sub = 15 - 10;
// var mul = 10 * 3;
// var div = 10 / 3;
// var mod = 10 % 3;

// var msg = "10 / 3 = 3 with a remainder of " + mod;

// var result = 10 * ((5 + 3) - 4) ;

// console.log(result)

// var myAccountBalance = 300;
// var nikeSBShoes = 799.23;
// var coupon = 400
// // == equal to
// // === ??
// // <= less than or equal to
// // >= greater than or equal to
// // !==
// var val1 = 23;
// var val2 = "23";
// || means or
// && means and

// if (val1 !== val2) {
//     console.log("These are not the same");
// } else {
//     console.log ("one of these is like the other");
// } 

// if (nikeSBShoes <= myAccountBalance) {
//     myAccountBalance -= nikeSBShoes;
//     console.log("We just bought some shoes!");
//     console.log("Account Balance: " + myAccountBalance);
// } else if (nikeSBShoes - coupon <= myAccountBalance) {
//     console.log("We bought sheos with coupon!");
//     myAccountBalance -= nikeSBShoes - coupon;
//     console.log("Account Balance: " + myAccountBalance);
// } else {
//     console.log("you too broke fore shoes")
// }


// if (1 === 1 && 2 === 2 || "joe" === "joe") {
// console.log("These are both true")
// }

// if (true && true) {
//     console.log("These are the same")
// }

// if (1 === 3 || "joe" === "joe") {
//     console.log("one of these are true")
// }

// if (1 === 3 || "joe" === "joe") {
//     console.log("one of these are true")
// }

// var cat1 = 5;
// var cat2 = 10;
// var cat3 = 1;
// var cat4 = true;

// if (cat1 > cat2 && cat1 > cat3 && !cat4) {
//     console.log("cat 1 is the cutest");
// } else if (cat2 > cat1 && cat2 > cat3 && !cat4) {
//     console.log("cat 2 is the cutest");
// } else if (cat3 > cat1 && cat3 > cat2 || cat4) {
//     console.log("cat3 is the cutest");
// }


// var balances = [50.45, 4000.12, -300.50];

// var studentNames = ["Timmy","Janessa","Arun","Osman","Bryar"];

// var naughtyList = [];
// naughtyList.push(studentNames[0])

// var index = naughtyList.indexOf("Timmy");
// console.log(naughtyList);
// if (index> -1) {
//     naughtyList.splice(index, 1);
// }

// console.log(naughtyList);

// var total = 10;
// for (var x = 0; x < total; x++) {
//  console.log(x);
// }

// var students = ["Bryar","Hezha","Hawre","Beryar","Bobo"];

// for (var index = 0; index < students.length; index++) {
//     console.log(students[index]);
// }


// const val1 = 23;
// const val2 = "23";

// if (val1 !== val2) {
//     console.log("these are not the same")
// } else {
//     console.log("these are the same")
// }


// if (true === false) {
//     console.log("false")
// } else { 
//     console.log("true") 
// }

// const val1 = 23;
// const val2 = "23";

// console.log(val1 !== val2 ? "true" : "false") 

// -------------------------------------------------------------
// const length1 = 15;
// const width1 = 10;
// const area1 = length1 * width1;

// const length2 = 12;
// const width2 = 14;
// const area2 = length2 * width2;
// console.log(area1);
// console.log(area2);

// #############  isntead of doing as above, se better way to do this below #############


// function area(length, width) {
// return length * width;
// }


// const rectanglesAreas = []
// rectanglesAreas.push(area(10,15));
// rectanglesAreas.push(area(14,2));
// rectanglesAreas.push(area(4,5));
// console.log(rectanglesAreas);


// var bankBalance = 500;

// function makeTransaction(priceOfSale) {
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log("Purchase Successful");
//     } else {
//         console.log("Payment denied");
//     }
// }
// console.log(bankBalance);
// makeTransaction(79.00);

// console.log(bankBalance);
// makeTransaction(2.32);

// console.log(bankBalance);
// makeTransaction(10.45);

// console.log(bankBalance);
// makeTransaction(450.00)


// var transaction = function(priceOfSale) {
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log("Purchase Successful");
//     } else {
//         console.log("Payment denied");
//     }
// };

// var prinCustumName = function(first,last) {
//     console.log("First Name: " + first + " Last Name: " + last);
// }

// var ApplyCreditcard = function(creditScore, sould) {
//     // call some functions to prcess application
// }

// var bankOp = [];
// bankOp.push(transaction);
// bankOp.push(prinCustumName);
// bankOp.push(ApplyCreditcard);
// ___________________________________________________________________________________________________



// let student0 = {
//     firstName: "Bryar0",
//     lastName: "Osman0",
//     age: 35,
//     greeting: function() {
//         return "Hi, I'm " + this.firstName + " and Im " + this.age + " years old.";
//     }
// };

// console.log(student0.greeting());
// //  ############   this above and below are same just written differently, use whatever suits you good to work with    ###########

// let student1 = new Object();
// student1.firstName = "Bryar1";
// student1.lastName = "Osman1";
// student1.age = 35;

// // ######## or this different method as well ##############

// let student2 = {};
// student2.firstName = "Bryar2";
// student2.lastName = "Osman2";
// student2.age = 35;


let students = [];


function Student(first, last, age, country) {
    this.firstName = first
    this.lastName = last
    this.age = age
    this.country = country
    this.greeting = function() {
        return "Hi, I'm " + this.firstName + this.lastName + " and Im " + this.age + " years old. and I am from " + this.country;
        };
}


students.push(new Student("Jenny"," Laga",5,"Sweden"));
students.push(new Student("Baxa"," Timsah",8,"Kurdistan"));
students.push(new Student("Marta"," Ivars",4,"Latvia"));

//  let s1 = new student("Jenny","laga",5,"female");
//  console.log(s1);
//  console.log(s1.greeting());
// students.push(student0);
// students.push(student1);
// students.push(student2);

for (let index = 0; index < students.length; index++) {
    let student = students[index];
    console.log(student.greeting());
}

// ___________________________________________________________________________________________________
// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student["firstName"]);
// console.log(student["lastName"]);

// let students = ["Bryar","Hawre","Beryar","Hezha","bobo"]