//// CHAPTER 21----25 ////



/// Q1 /////


// var userFirstName = prompt ("Enter your firstname");

// var userLastName = prompt ("Enter your lastname");

// var fullName = userFirstName + userLastName;

// console.log(fullName);

// alert("welcome" , fullName);




////    Q2    //////////////

// var mobPhone = prompt ("Enter your mobile phone")

// var length = mobPhone.length;

// document.write("length of string:" + length);



////    Q3 /////


// var letter = "Pakistani";

// var char = letter.indexOf("n");
// console.log(char);




////    Q4 ////

// var lastInd = "hello world";

// var lastChar = lastInd.lastIndexOf("l");
// console.log(lastChar);




////    Q5 /////

// var thridInd = "Pakistani";

// var char = thridInd.charAt(3);

// console.log(char);



////    Q6 ////

// var userFirstName = prompt ("Enter your first name");

// var userLastName = prompt ("Enter your last name");


// var fullName = userFirstName.concat(userLastName);

// console.log(fullName);



////    Q7 /////

// var city = "Hyderabad"

// city = city.replace("Hyderabad", "Islamabad");

// console.log(city);







/////       Q8    //////


// var message = "Ali and Sami are best friends. They play cricket and football together.";

// message = message.replace( "and" , "&" );

// message = message.replace( "and" , "&" );
// console.log(message);




////    Q9 /////

// var number = 472;

// var numberStr = number.toString();

// console.log(numberStr)




/////   Q10   /////////


// var userWord = prompt ("Enter user input").toUpperCase()
// console.log(userWord)

// if(userWord === "PEANUTS"){
//     alert("welcome");
// }else{
//     alert("invalid");
// }



////    Q11 //////////

// var userFirstName = prompt ("Enter your case")


// var firstChar = userFirstName[0].toUpperCase()
// var otherChar = userFirstName.slice(1).toLowerCase()

// var capWord = firstChar + otherChar ;

// console.log(capWord)


////    Q12 /////


// var num = 35.36 ;

// var num1 = num.toString().replace("." , "");

// console.log(num1)


////   ||||| ////

// var num = 35.36.toString()

// console.log(num , typeof num);

// console.log(num.split(".").join(""));




////    Q13 /////

// var userFirstName = prompt ("enter your name")





////    Q14 ////

// var bakary = ["cake", "apple pie", "cookie", "chips", "patties"];


// var bakary = prompt("Welcome to ABC bakary").toLowerCase();

// console.log(bakary);

// if(bakary === "cake"){
//     alert("Available");
// }else if(bakary == "apple pie"){
//     alert("Available");
// }else if(bakary == "cookie"){
//     alert("Available");
// }else if(bakary == "chips"){
//     alert("Available");
// }else if(bakary == "patties"){
//     alert("Available");
// }else{
//     alert("Not Available");
// }



////    Q15  /////////////






/////   Q16 ////

// var university = new String("University of Karachi").split("")



// console.log(university)



/////   Q17  //////


// var str = prompt ("Enter your input")

// var char = str.charAt(str.length-1)

// console.log(char)



/////   Q18  //////










/////   CHAPTER 26-30 ///////////

/// Q1  /////////


// var number = 3.45214

// console.log(number)

// var number = Math.round(3.45214) 

// console.log(number)

// var number = Math.floor(3.45214)

// console.log(number)

// var number = Math.ceil(3.45214)

// console.log(number)




/////   Q2  ////

//  var number = -2.673

// console.log(number)

// var number = Math.round(-2.673) 

// console.log(number)

// var number = Math.floor(-2.673)

// console.log(number)

// var number = Math.ceil(-2.673)

// console.log(number)




////    Q3  /////



// var number1 = Math.abs(-4);
// var number2 = Math.abs(4);

// console.log(number1)
// console.log(number2)


////    Q4 ////


// Math.floor(Math.random()*7)

// console.log(randomNumber)




////    Q5  /////


// var toss = Math.floor(Math.random() * 3 + 1)

// console.log(toss)

// if(toss == 2){
//     alert("heads")
// }else if (toss == 1){
//     alert("tails")
// }else{
//     alert("invalid")
// }



////    Q6 ////

// var number = 100;

// number = Math.ceil(Math.random()*100) ;
// console.log(number)


////    Q8 /////

// var num = Math.ceil(Math.random()*10);

// console.log(num);

// var gNum = +prompt ("enter the guess number")

// if(num == gNum){
//     alert("good")
// }else{
//     alert("try again")
// }
