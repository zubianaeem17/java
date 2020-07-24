//Chap=1
//q1
// alert('hello! welcome to my website')

//q2
// alert("Error! Please enter a valid password.")

// //q3
// alert('Welcome to JS Land... \nHappy Coding!')

// //q4
// alert('Welcome to JS Land...')
// alert('Happy Coding!') //do prevent wala kam

// //q5
// console.log("Hello... I can run JS through my web browser's console")

// //q6 
// alert('Use of alerts')

// //q7 
// alert(''practice)

//CHAP:2

//q1
//var username;

//q2
// var fullName = "Zubia Naeem";
// var myName = fullName;
// console.log(myName)
// document.write(myName)

//q3
// var message;
// message = "Hello World"
// alert(message)

//q4
// var name="John Doe";
// alert(name)
// var age = "15 Years old"
// alert(age)
// var dept = "Certified Mobile Application Development";
// alert(dept)

//q5
// var pizza = alert ('PIZZA\nPIZZ\nPIZ\nPI\nP')

//q6
// var email = "example@example.com"
//var a = email
// alert ("My email Address is" + " "+ a)

//q7
// var book = "A smarter way to learn JavaScript";
// alert('I am trying to learn from the Book' +" " + book)

//q8
// document.write('Yah! I can write HTML content through JavaScript')

//q9
// var a = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
// alert(a)
// document.write(a)

//CHAP:3

//q1
// var age = "15";
// alert("I am "+age+" years old")

//q2
// var c=14;
// alert('You have visited this site '+c+" times")

//q3
// var birthYear = 1990;
// document.write("My birth year is "+ birthYear +
//  \nData type of my declared variable is " + typeof(birthYear))

//q4
// var name="John Doe";
// var prodTitle="T-shirts";
// var quantity="5";
// document.write('"' + name.bold() +  " ordered " + quantity.bold() + ' ' +prodTitle.bold() +" on XYZ Clothing store" +'"' +".");

//CHAP:4

//q1
//var x,y,z;

//q2
// var x;
// var xY;
// var x_y;
// var _x;
// var Xy;

// var !;
// var 2x;
// var @;
// var const;
// var null;

//q3
// var heading = "Rules for naming JS variables";
// document.write(heading.bold()+ "<br>" + "<br>" + "<br>" +
// "Variables names can only contain numbers,$ and _. For example: $my_1stVariable" +
//  "<br>" + "Variable must begin with a leter,$ or _. For example: $name, _name or name"
//  + "<br>" + "Variable names are case sensitive" 
//  + "<br>" + "Variable names should not be JS Keywords");

//CHAP:5

//q1
// var a = +prompt("enter a");
// var b = +prompt ("enter b");
// document.write("The sum of " + a + " and " + b +" is ", a+b);

//q2
// var a = +prompt("enter a");
// var b = +prompt ("enter b");
// document.write("The difference of " + a + " and " + b +" is ", a-b + "<br>" +
// "The product of " + a + " and " + b +" is ", a*b + "<br>" +
// "The modulus of " + a + " and " + b +" is ", a%b + "<br>");

//q3
// var z;
// document.write("the value of variable after declarataion is: ",z + "<br>");
// var z=10;
// document.write("Initial value: ",z + "<br>")
// z++;
// document.write("Value after increment: ", z +"<br>")
// z=z+7;
// document.write("Value after addition is: ",z);
// z--;
// document.write("<br>" + "Value after decrement is: ",z);
// z=z%3;
// document.write("<br>" + "The remainder is: ",z);

//q4
// var cost = 600;
// var total= cost*5;
// document.write("Total cost to buy 5 tickets to a movie is: "+total + "PKR");

//q5
// var a =4;
// document.write("Table of 4" +"<br>");
// for (i=1 ; i<=10; i++) {
//     document.write (a+ '*'+ i+ '=',a*i + "<br>");
// }

//q6
// var celsius = 25;
// var farenheit = ((celsius*9)/5)+32;
// document.write(celsius + "oC is "+ farenheit + "oF"+"<br>");
// var f = 70;
// var c = (f-32)*5/9;
// document.write(f+ "oF is "+c+"oC")

//q7
// var item1 = 650;
// var quan1 = 3 ;
// var item2=100;
// var quan2 = 7;
// var ship = 100;
// var cost = (item1*quan1) + (item2*quan2) + ship;
// document.write("Price of item 1 is:"+ item1 + "<br>"+
// "Quantity of item1 is : " + quan1 + "<br>"
// + "Price of item2 is: "+ item2 + "<br>" +
// "Quantity of item2 is: "+ quan2 + "<br>"
// + "Shipping Charges: "+ ship +"<br>"+ "<br>" +
// "Total cost is: "+ cost);

//q8
// var total = 980;
// var obtainedmarks = 804;
// var percentage = (obtainedmarks/total)*100;
// document.write("percentage is: "+ percentage +"%") 

//q9
// var us =10;
// var saudi = 25;
// var pk = (us*104.80)+(saudi*28);
// document.write("Total Currency in PKR: "+pk);

//q10
// var a=3;
// a=(((a+5)*10)/2);
// document.write(a);

//q11
// var cyear = 2016;
// var pyear = 1992;
// var now = cyear - pyear ;
// var orr = cyear - pyear -1;
// document.write("The current age is either: "+now + " or " + orr)

//q12
// var radius=5;
// var cir=2*Math.PI*radius;
// document.write("The circumference is " + cir +"<br>");
// var area=Math.PI*radius**2;
// document.write("The area is "+ area);


//q13
// var snack="Burger";
// var age=20;
// var maxAge=50;
// var amount=4;
// var total=(maxAge-age)*amount;
// document.write("You will need "+total+ " to last you until the ripe old age of " + maxAge);

//ASSIGNMENT:06-09

//q1
// var a=10;
// document.write("Result:" + "<br>");
// document.write("The value of a is :" + a + "<br>");
// document.write("<br>");
// document.write("The value of ++a is :" ,++a + "<br>");
// document.write("Now the value of a is :" , a + "<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("The value of a++ is :" , a++ +"<br>");
// document.write("Now the value of a is :" , a + "<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("The value of --a is :" , --a +"<br>");
// document.write("Now the value of a is :" , a + "<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("The value of a-- is :" , a-- +"<br>");
// document.write("Now the value of a is :" , a + "<br>");

//q2
// var a=2;
// var b=1;
// var result=--a - --b + ++b + b--;
// console.log(result);

//q3
// var name= prompt("what is your name?");
// document.write("Hello "+name)

//q4 not given

//q5
// var num=prompt("Enter Number to print multiplication table: ","5");
// var number=parseInt(num);
// if(number===1){
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// }
// else if (number===2) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===3) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===4) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===5) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===6) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===7) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===8) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===9) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===10) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// }

//q6
// var sub1 = prompt("Subject 1: ");
// var sub2 = prompt("Subject 2: ");
// var sub3 = prompt("Subject 3: ");
// var total =100;
// var mark1 = +prompt("Marks of subject1: ");
// var mark2 = +prompt("Marks of subject 2: ");
// var mark3 = +prompt("Marks of subject 3: ");
// var t=(mark1+mark2+mark3);
// var per=(t/300)*100;
// console.log("Percentage is: ", per);


//C 9-11
//q1
// var city = prompt("enter your city");
// if (city==="Karachi") {
//     document.write("Welcome to the city of lights")
// }

//q2
// var gender = prompt("What is your gender");
// if (gender==="male"){
//     document.write("Good Morning Sir")
// } else if (gender ==="female"){
//     document.write("Good Morning Ma'am")
// }

//q3
// var inputColor=prompt("Enter the color ");
// if(inputColor=="Red"){
//     document.write("Must Stop");
// }
// else if(inputColor=="Yellow"){
//     document.write("Ready To Move");
// }
// else if(inputColor=="Green"){
//     document.write("Move Now");
// }

//q4
// var fuel = +prompt("What is the remaining fuel in litres?");
// if (fuel<0.25) {
//     document.write("Please refill fuel in your car")
// }

//q5
//1.displayed
//2.not displayed
//c. 2 and 4 are displayed
//d. displayed 
//e. not displayed
//f. displayed

//q6
// var markobtain = +prompt("what are the marks obtained?");
// var total = +prompt("Total marks?");
// var per = (markobtain/total)*100;
// if (per>=80) {
//     document.write("Total marks:"+total+"<br>"
//     +"Marks Obtained: "+markobtain+"<br>"+ "Percentage: "+per+"<br>"+"Grade: A-one"+"<br>" +"Remarks: Excellent")
// } else if (per>=70){
//     document.write("Total marks:"+total+"<br>"
//     +"Marks Obtained: "+markobtain+"<br>"+ "Percentage: "+per+"<br>"+"Grade : A"+"<br>" +"Remarks: Good")
// } else if (per>=60) {
//     document.write("Total marks:"+total+"<br>"
//     +"Marks Obtained: "+markobtain+"<br>"+ "Percentage: "+per+"<br>"+"Grade : B"+"<br>" +"Remarks: You need to improve")
// } else if (per<60) {
//     document.write("Total marks:"+total+"<br>"
//     +"Marks Obtained: "+markobtain+"<br>"+ "Percentage: "+per+"<br>"+"Grade: Fail"+"<br>" +"Remarks: Sorry")
// }

//q7
// var num=6;
// var guess= +prompt("What's your guess?");
// if (guess==num) {
//     document.write("Bingo! Correct answer.")
// } else if (guess===(num+1)){
//     document.write("Close enough to the correct answer")
// }

//q8
// var a= +prompt("enter number:");
// if (a%3==0) {
//     document.write("The number is divisible by 3")
// } else {
//     document.write("The number is not divisible by 3")
// }

//q9
// var a=+prompt("Enter the number");
// if(a%2==0){
//     document.write("Its an even number");
// }
// else{
//     document.write("Its an odd number");
// }


//q10
// var temp=+prompt("Enter temp");
// if(temp>40){
//     document.write("It is too hot outside.");
// }
// else if(temp>30){
//     document.write("The weather today is normal.");
// }
// else if(temp>20){
//     document.write("Today's weather is cool.");
// }

// else if(temp>10){
//         document.write("OMG!Today's weather is so cool.");
// }

//q11
// var first=+prompt("Enter first num:");
// var second=+prompt("Enter sec num:");
// var operation=prompt("Enter operation:");
// if(operation==="+"){
//     var third=first+second;
//     document.write(third);
// }
// else if(operation==="-"){
//     var third=first-second;
//     document.write(third);
// }
// else if(operation==="*"){
//     var third=first*second;
//     document.write(third);
// }
// else if(operation==="/"){
//     var third=first/second;
//     document.write(third);
// }
// else if(operation==="%"){
//     var third=first%second;
//     document.write(third);
// }

//ASSIGNMENT:12-13
//q1
// var str = prompt("Write any string");
// for (var i = 0; i < str.length; i++) {
//     var char = str.charCodeAt(i);
//     if (char >= 65 && char<= 90) {
//         document.write(str, " is uppercase")
//     }
//     else if (char >= 97 && char <= 122) {
//         document.write(str, " is lowercase")
//     }
//     else {
//         document.write(str, " is a number")
//     } 
// }
// q2
// var a=+prompt('enter value');
// var b=+prompt('enter value');
// if(a>b){
//     alert(a +" "+'is bigger')
// }
// else{
//     alert(b+" "+'is bigger')
// }

//q3
// var a=+prompt("Enter the number: ");
// if(a>=0){
//    document.write("Number is positive");
// }
// else if(a<=0){
//     document.write("Number is negative");
// }
// else if(a===0){
//     document.write("Number is equal to zero");
// }
// else{
//     document.write("Enter valid number");
// }

//q4
// var a=prompt('enter a string value')
// if(a=="a"|| a=="e" || a=="i"|| a=="o"|| a=="u"){
//     alert('its is a vowel')
// }
// else{
//     alert('not a vowel')
// }


// q5
// var corPas="maham123";
// var userPas=prompt("Enter his/her password");
// if(userPas==""){
//     document.write("Please enter your password");
// }
// if(corPas==userPas){
//     document.write("Correct! The password you entered matches the original password");
// }
// else{
//     document.write("Incorrect password!");
// }

//q6
//var greeting
// var hour = 13;
//  if (hour < 18) 
//  { document.write(greeting = "Good day");
//  }
//   else{
//        document.write(greeting = "Good evening"); }

//q7
// var time=+prompt('enter your time','like 1900');
// if(time>=0000 && time<1200){
//     alert('good morning')
// }

// if(time>=1200 && time<1700){
//     alert('good afternoon')
// }
// if(time>=1700 && time<2100){
//     alert('good evening')
// }
// if(time>=2100 && time<2359){
//     alert('good night')
// }
// else{
//     alert('enter a corret time')
// }


// ASSIGNMENT:14-16
// q1
// var studentNames =[];

// q2
// var studentNames = new Array();

// q3
// var stringArray = ["one", "two", "three"];

// q4
// var numberArray = [1,2,3,4,5];

// q5
// var booleanArray = [true,false,true,false];

// q6
// var mixedArray = ["one", 2, "three", 4];

// q7
// document.write('Qualifications:')
// document.write('<br>')
// document.write('<br>')
// var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// var number = [1,2,3,4,5,6,7,8]
// for (var i=0; i<qual.length;i++){
//     document.write(number[i]+")"+qual[i]+"<br>")
// }

// q8
// var names = ["Michael", "John", "Tony"];
// var scores = [320, 230, 480];
// var totalMarks = 500;
// for (var i=0; i<names.length; i++){
//     document.write("Score of "+ names[i]+" is "+ scores[i]+". Percentage:"+ scores[i]/totalMarks*100+"%"+"<br>")
// }

// q9
// var colors = ["Red", "Pink","Blue","Black"];
// document.write("Colors are: ",colors, "<br>")
// (a)
// var addBeg = prompt("What color do you want to add?");
// colors.unshift(addBeg)
// document.write("Updated array of colors are: ",colors)
// (b)
// var addEnd = prompt("What color do you want to add?");
// colors.push(addEnd)
// document.write("Updated array of colors are: ",colors)
// (c)
// colors.unshift("White","Orange")
// document.write("Updated array of colors are: ",colors)
// (d)
// colors.shift(colors)
// document.write("Updated array of colors are: ",colors)
// (e)
// colors.pop(colors)
// document.write("Updated array of colors are: ",colors)
// (f)
// var a = prompt("At which index you want to add color?");
// var b =prompt("What color do you want to add?");
// colors.splice(a,0,b)
// document.write("Updated array of colors are: ",colors)
// (g)
// var a = prompt("From which index you want to delete color?");
// var b =prompt("How many colors you want to delete?");
// colors.splice(a,b)
// document.write("Updated array of colors are: ",colors)

// q10
// var score = [320,230,480,120];
// document.write("Score of Students : ",score, "<br>")
// score.sort()
// document.write("Ordered Scores of Students : ",score)

// q11
// var cities = ["Karachi", "Lahore","Islamabad", "Quetta", "Peshawar"];
// document.write("Cities list:","<br>",cities,"<br>")
// var copycities = cities.slice(2,4)
// document.write("Selected cities list:", "<br>", copycities)

// q12
// var arr = ["This", "is", "my", "cat"];
// document.write("Array:","<br>", arr,"<br>")
// var arr1= arr.join(' ')
// document.write("String:", "<br>", arr1)

// q13
// var phone =["Apple", "Samsung", "Motorola", "Nokia", "Sony","Haier"];
// document.write("Select Menu: ","<br>")
// for(var i=0; i<phone.length; i++){
//     document.write(phone[i],"<br>")
// }

// Chap#17-20

// q1
// var arr1 = ["ABC", 1]; 
// var arr2 = ["EFG", 2]; 
// var arr3 = ["IJK", 3];  
// var multi = [arr1, arr2, arr3]; 

// q2
// var arr1 = [0,1,2,3]; 
// var arr2 = [1,0,1,2]; 
// var arr3 = [2,1,0,1]; 
// var multi = [arr1, arr2, arr3];  
// for(var i = 0; i < multi.length; i++) { 
//     document.write(multi[i].join(' ') + "<br>");
// }

// q3
// for (var i=1; i<=10; i++){
//     document.write(i,"<br>")
// }

// q4
// var a = prompt("Enter a number to show its multiplication table");
// var b = prompt("Enter length of multiplication table");
// document.write("Multiplication Table of ",a, "<br>")
// document.write("Length ", b, "<br>")
// for (var i=1; i<=b; i++){
//     document.write(a, " x", i, " =", a*i, "<br>")
// }

// q5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i=0; i<fruits.length; i++){
//     document.write(fruits[i], "<br>")
// }
// document.write("<br>")
// for (var i=0; i<fruits.length; i++){
//     document.write("Element at index ",i, " is ",fruits[i],"<br>")
// }

// q6

// q7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b = prompt("Welcome to Our Bakery. What do you want to order?");
// for (var i=0; i<A.length; i++) {
//     if (b==A[i]){
//         document.write(b, " is available at index ", i, " in our bakery")
//     }
//     else {
//         document.write("We are sorry. ", b, " is not available in our bakery")
//     }
// }

// q8
// var A = [24, 53, 78, 91, 12];
// document.write("Array items: ", A,"<br>")
// var largest = 0
// for (var i=0; i<A.length; i++){
//     if (A[i]>largest){
//         var largest= A[i];
//     }
// }
// document.write("The largest number is: ", largest)

// q9
// var A = [24, 53, 78, 91, 12];
// document.write("Array items: ", A,"<br>")
// var smallest = A[0];
// for (var i=0; i<A.length; i++){
//     if (A[i]<smallest){
//         var smallest= A[i];
//     }
// }
// document.write("The smallest number is: ", smallest)

// q10
// var b = [];
// for (var a=1; a<=100; a++){
//     if (a%5===0){
//         b.push(a)
//     }
// }
// document.write(b)

//CHAPTER 21-25
//QUESTION:1
// var firstName = prompt("Enter your first name: ");
// var lastName= prompt("Enter your last name :");
// var fullName =firstName+ " "+lastName;
// alert("Hello "+ fullName);

//QUESTION:2
// var a=prompt("Which is your favourite mobile phone?");
// document.write("My favourite phone is:" +a +"<br>"+ "The length of string is: "+a.length);

//QUESTION:3
// var a="Pakistani";
// document.write("String: " + a+"<br>");
// document.write("Index of 'n':" +a.indexOf('n'));

//QUESTION:4
// var word="Hello World";
// document.write("String: " + word+"<br>");
// var result=word.lastIndexOf('l');
// document.write("Last index of 'l':"+result);

//QUESTION:5
// var str="Pakistani";
// document.write("Character at index 3: ",str.charAt(3));

//QUESTION:6
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName.concat(lastName);
// document.write("Hello ", fullName);

//QUESTION:7
// var str="Hyderabad";
// document.write("City: ", str +"<br>");
// var r=str.replace("Hyder","Islam");
// document.write("After replacement :", r);

//QUESTION:8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// for (var i=0; i<message.length; i++){
//     message= message.replace("and", "&");

//  }
//  document.write(message);

//QUESTION:9
// var str="472";
// document.write("Value: ",str, "<br>");
// document.write("Type: ", typeof str, "<br>");
// var num=Number(str);
// document.write("Value: ",num, "<br>");
// document.write("Type: ", typeof num, "<br>");

//QUESTION:10
// var str =prompt("Enter any string");
// var upper= str.toUpperCase()
// document.write(upper)

//QUESTION:11
// var str =prompt("Enter any string");
// var a = str.slice(0,1);
// var b = str.slice(1,);
// var upper = a.toUpperCase()
// var full = upper + b;
// document.write(full)

//QUESTION:12
// var num = 35.36 ;
// document.write("Number: ", num, "<br>");
// var str=num.toString();
// var c=str.replace(".","");
// document.write("Result: ",c);

//QUESTION:13
// var username = prompt("Enter username");
// for(var i=0;i<username.length;i++){
//     var char=username.charCodeAt(i);
//     if(char===33){
//         alert("Please enter a valid username");

//     }
//     else if(char===44){
//          alert("Please enter a valid username");

//     }
//     else if(char===46){
//          alert("Please enter a valid username");

//     }
//     else if(char===64){
//         alert("Please enter a valid username");

//     }
// }

//QUESTION:14
// var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var search=prompt('Enter What you want to search: ');
// search=search.toLowerCase();
// for(var i = 0;i < a.length;i++){
//     if(a[i]===search){
//         alert(a[i]+" is available at index "+i +" in our bakery");
//     }
// }
// if(a.includes(search)!=true){
//     alert("We are sorry."+search+" is not available in our bakery");
// }

//QUESTION:15
// var pas=prompt("Enter Password ");
// var s=pas.length;
// if(s<6){
//      alert("Password should be atleast 6 characters long");
       
// else if(pas[0]>='0' && pas[0] <='9'){
//     alert("Password should not start with a number");
// }
// else if(pas.includes(a)!=true){
//     alert("Password should contain alphabets as well as numbers");

// }



//QUESTION:16
// var university = "University of Karachi";
// var array = university.split("");
// for (var i=0; i<array.length;i++){
//     document.write(array[i], "<br>");
// }

//QUESTION:17
// var str =prompt("Enter input");
// document.write("User input: ", str, "<br>")
// var a= str[str.length-1];
// document.write("Last character of input: ", a);

//QUESTION:18
// var str= "The quick brown fox jumps over the lazy dog";
// document.write("Text: ", str, "<br>")
// var a =str.toLowerCase()
// var res=0
// var find = "the";
// for (var i=0; i<a.length;i++){
//     if (a.slice(i,i+find.length)== find){
//         res=res + 1;
        
//     }
// }
// document.write("There are ", res, " occurence(s) of word 'the'");


//CHAPTER 26-30
//QUESTION:1
//var a=+prompt("Enter positive integer:");
// document.write("Number:",a+"<br>");
// var c=Math.round(a);
// document.write("Round off value:",c +"<br>");
// var d=Math.floor(a);
// document.write("floor value:",d +"<br>");
// var e=Math.ceil(a);
// document.write("Ceil value:",e +"<br>");


//QUESTION:2
// var a=+prompt("Enter negative floating point number: ");
// document.write("Number:",a+"<br>");
// var c=Math.round(a);
// document.write("Round off value:",c +"<br>");
// var d=Math.floor(a);
// document.write("floor value:",d +"<br>");
// var e=Math.ceil(a);
// document.write("Ceil value:",e +"<br>");

//QUESTION:3
// var a=-4;
// var c=Math.abs(a);
// document.write("The absolute value of ",a," is ",c);

//QUESTION:4
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write('Random dice value: ' + diceRoll);

//QUESTION:5
// var rNum = Math.floor( Math.random() * 2 ) +1;
// document.write(rNum+"<br>");
// if(rNum===1){
//      document.write("Random coin value: Tails");
// }
// else{
//     document.write("Random coin value: Heads");
// }

//QUESTION:6
// var rNum = Math.floor( Math.random() * 100 ) +1;
// document.write("Random number b/w 1 and 100: " ,rNum);

//QUESTION:7
// var a=prompt("Enter your weight in kilograms:");
// var b=parseFloat(a);
// document.write('"The weight of user is ",b,"kilograms");

//QUESTION:8
// var secNum=Math.floor( Math.random() * 10 ) +1;
// var userI=+prompt("Enter a number between 1 and 10:");
// if(userI===secNum){
//     alert("Congrats!");
// }
// else{
//     alert("Try again");
// }


//CHAPTER 31-34
//QUESTION:1
// var date = new Date()
// document.write(date)

//QUESTION:2
// var a = ["January","February","March","April","May","June","July","August","september","october","november","december"]
// var now = new Date();
// var month = now.getMonth();
// var nameOfMonth = a[month];
// document.write("Current Month: "+nameOfMonth)

//QUESTION:3
// var a=new Date();
// var c = a.toString();
// var b = c.slice(0,3);
// document.write(b)

//QUESTION:4
// var day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var to = new Date();
// var dayy = to.getDay();
// var name = day[dayy];
// document.write(name)
// if (name==="saturday" || name==="sunday") {
//     document.write("It's Fun Day")
// }

//QUESTION:5
// var a = new Date();
// var dtoday = a.getDate(); 
// if (dtoday < 16) {
//     document.write("First fifteen days of the month")
// } else {
//     document.write("Last fifteen days of the month")
// }

//QUESTION:6
// var time = new Date();
// var ms = time.getTime();
// var mins = ms/60000;
// document.write("Current Time: "+time + "<br>"+"Elapsed milliseconds since January 1,1970: " + ms +
// "<br>" + "elapsed minutes since January1,1970 "+ mins)

//QUESTION:7
// var a = new Date();
// var time = a.getHours();
// if (time < 12) {
//     document.write("It's AM")
// } else {
//     document.write("It's PM")
// }

//QUESTION:8
// var laterDate = new Date( "December 31, 2020 00:00:00");
// document.write(laterDate)
            //OR
// var a = new Date();
// n=a.setHours(0,0,0)
// z=new Date(a.setFullYear(2020,11,31))
// document.write(z)

//QUESTION:9
// var ramadan = new Date("April 26,2020");
// var now = new Date();
// var day = now.getTime()-ramadan.getTime();
// var days = Math.floor(day/(1000*60*60*24));
// document.write(days," days have passed since first Ramadan April 26,2020.")

//QUESTION:10
// var ref = new Date("2020,5,20");
// var reff= ref.getTime();
// var date = new Date();
// var get = date.getTime();
// var diff = (get - reff)/1000;
// document.write("Reference Date: ",date,"<br>"," ", diff, " seconds have passed since the beginning of 2020")

//QUESTION:11
// var a = new Date();
// var hour1 = a.setHours(6,38,30);
// var hour2 = new Date()
// var b = hour2.setHours(7,38,30);
// document.write("Current Date: ",a,"<br>","1 hour ago it was ",hour2)

//QUESTION:12
// var a = new Date();
// var b = new Date();
// var c = (b.getFullYear())-100;
// document.write("Current date: ",a,"<br>","100 years back it was", b)

//QUESTION:13
// var age = 19;
// var a = new Date();
// var year = a.getFullYear();
// var birthYear = year - age;
// document.write("my age is: ",age,"<br>","my birth year is: ",birthYear)

//QUESTION:14
// var numOfUnits = 500;
// var chargesPerUnit = 18.83;
// var latePayment = 500;
// var netAmount = numOfUnits * chargesPerUnit;
// var grossAmount = netAmount + latePayment;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: <b>Maham Naeem</b> </br>");
// document.write("Month: <b>June</b> </br>");
// document.write("Number of units: <b>" + numOfUnits + "</b> </br>");
// document.write("Charges per unit: <b>" + chargesPerUnit + "</b></br></br>");
// document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b></br>");
// document.write("Late Payment Surcharge: <b>" + latePayment + "</b> </br>");
// document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b></br>");


//CHAPTER 35-38
//QUESTION:1 
// function tellTime() {
//     var now = new Date();
//     document.write(now);
// }

// tellTime();

// QUESTION:2
// function name(){
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     document.write("Hello " + firstName + " " + lastName + "!");
// }

// name();

// QUESTION:3
// function add(){
//     var num1 = Number(prompt("Enter first number"));
//     var num2 = Number(prompt("Enter second number"));
//     var sum = num1 + num2 ;
//     return sum;
// }

// var a = add();
// document.write("The sum of the two numbers is " + a);

// QUESTION:4
// function Calculator(num1,num2,operator){
//     var result = 0;
//     switch(operator){
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         default:
//             alert("You have entered an invalid operator");
//     }
//     return result;
// }

// var num1 = +prompt("Enter first number");
// var operator = prompt("Enter operation to be performed on both numbers e.g +,-,*,/");
// var num2 = +prompt("Enter second number");

// var result = Calculator(num1,num2,operator)

// QUESTION:5
// function square(x){
//     var squareOfNum = Math.pow(x , 2)
//     return squareOfNum;
// }

// var anyNum = +prompt("Enter a number");
// var b = square(anyNum);
// document.write("Square of " + anyNum + " is " + b);

// QUESTION:6
// function factorial(n){
//     var result = 1;
//     for(var i = 2; i <= n; i++){
//         result = result * i ;
//     }
//     return result;
// }

// var number = +prompt("Enter any +ve number");
// var factorialOfNumber = factorial(number);
// document.write(factorialOfNumber);

// QUESTION:7
// function counting(start,end){
//     if(start < end){
//         for(var i = start; i <= end ; i++){
//         document.write(i + "<br>");
//         }
//     }
//     else{
//         for(var i = end; i <= start ; i++){
//             document.write(i + "<br>");
//         }
//     }
// }

// var num1 = +prompt("Enter start number");
// var num2 = +prompt("Enter end number");
// counting(num1, num2);

// QUESTION:8
// function calculateHypotenuse(base, perp){

//     var base = calculateSquare(base);
//     var perp = calculateSquare(perp);
//     var hyp = Math.sqrt(base + perp);
//     return hyp;

//     function calculateSquare(num){
//         var sq = num * num;
//         return sq;
//     }
// }

// var x = +prompt("Enter value of Base");
// var y = +prompt("Enter value of Perpendicular");
// var ans = calculateHypotenuse(x,y);
// document.write("Base is " + x + "<br>");
// document.write("Perpendicular is " + y + "<br>");
// document.write("Hypotenuse is " + ans);

// QUESTION:9
//// i)
// function areaOfRectangle(w,h){
//     var area = w * h;
//     return area;
// }
// var a = areaOfRectangle(10,10);
// document.write("Area of the rectangle is: " + a + "<br>");

///// ii)
// function areaOfRectangle(w,h){
//     var area = w * h;
//     return area;
// }
// var width = +prompt("Enter width of the rectangle");
// var height = +prompt("Enter height of the rectangle");
// var a = areaOfRectangle(width,height);
// document.write("Area of the rectangle is: " + a);

// QUESTION:10
// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// var str = prompt("Enter any string");
// var a = palindrome(str);
// if(a === true){
//     document.write(str + " is a palindrome word.");
// }
// else{
//     document.write(str + " is not a palindrome word.");
// }

// QUESTION:11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }

// var str = prompt("Enter any string in lower case");
// document.write(uppercase(str));

// QUESTION:12
// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length ; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// var str = prompt("Enter any sentence");
// document.write("<br>")
// document.write(longestWord(str));

// QUESTION:13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));

// QUESTION:14
// function calcCircumference(radius) {
//     var c = 2 * Math.PI * radius;
//     document.write("The radius is " + radius + ". ");
//     document.write("The circumfrence is " + c + "." + "<br>");
//   }
//   function calcArea(radius) {
//     var a = Math.PI * (radius * radius);
//     document.write("The radius is " + radius + ". ");
//     document.write("The area is " + a + ".");
//   }
  
//   calcCircumference(10);
//   calcArea(10);