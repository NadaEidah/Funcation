Q1
function tellFortune(partnerName , geographicLo , JobTilite ,children){
	output = "you will be a "+ JobTilite + "in" + geographicLo + "and marid to" + partnerName +"with" +children+"kids";

	return output;


}

Q2
function calDog(num){
	return num*7
}
Q3
function all (age,capTea){
	var inYear=capTea*365 ;
	var totalAge=100-age ;
	var totalCap=inYear*totalAge;
	return "you will need " + totalCap+ "cups of tea untill the rips old age of 100"
}
Q4
function name(text){
	return text+"hallo"
}


Q5
function double(cat){
	return 2*5
}


function double(x){
  return 2 * 7
}


function double(x) {
  return 2 * 7
}


Q6
func double1(x {
  return 2 * x ;
}

function double1 (x){
	return 2*x
}

functiondouble2 x)
return 2 * x;
}

function double2 (x){
return 2 * x;
}

function (x) double3 {
  return 2 * x;

function double3 (x)  {
  return 2 * x


Q7

 function cube (num){
 	var all=num*num*num
 	return all
}
Q8
function multiply (num1, num2){
	var cal=num1*num2
	return cal
}
Q9
function canDriving(age){
	var after=20-age;
	if(age>20){
		return "yes you can";
	}
	else{ (age<20)
		return "please come back after" + after +"years to get one"
	}
}
Q10
function sameLength(text1,text2){
	var num1 = text1.length;
	var num2 = text2.length;
	if(num1 == num2){
		return true;
	}
	else{
		return false;
	}
	}
Q11
function largerNubmer(num1,num2){
	if (num1>num2){
		return num1;
	}
	else {
		return num2;
	}
}
Q12
function smallerNubmer(num1,num2,num3){
	if (num1<num2){
		return num1;
	}
	else if (num2<num3) {
		return num2;
	}

	else {
		return num3
	}
}
Q13
function shorterString (text1,text2,text3,text4,text5){
	var word1=text1.length;
	var word2=text2.length;
	var word3=text3.length;
	var word4=text4.length;
	var word5=text5.length;
	if(word1 < word2 < word3 < word4 < word5){
		return text1;
	}
	if(word2 < word1 < word3 < word4 < word5){
		return text2;
	}
	if(word3 < word1 < word2 < word4< word5){
		return text3
	}

	if(word4 < word1 < word2 < word3< word5){
		return text4
	}
	if(word5 < word1 < word2 < word3< word4){
		return text5
	}

	else{
		return "no shorter string"
	}
}

Q14
function longerString(text1,text2,text3,text4){
	var word1=text1.length;
	var word2=text2.length;
	var word3=text3.length;
	var word4=text4.length;

	if(word1 > word2 > word3 > word4 ){
		return text1;
	}
	 if(word1 > word2 > word3 > word4 ){
		return text2;
	}
	  if(word1 > word2 > word3 > word4){
		return text3;
	}

	 if(word1 > word1 > word2 > word3){
		return text4;
	}
	

	else{
		return "no longer String";
	}
}


Q15	
function isEven(num){
		
	if (num%2 === 0) {
		return"true if this number is even";
	}
	else 
	 { return"false if this number is odd";
}
}
console.log(isEven(1))

Q16	
function isOdd(num){
		
	if (num%4 != 0) {
		return"true if this number is even";
	}
	else 
	 { return"false if this number is odd";
}
}
console.log(isOdd(4))
Q17
function positive(num){
	   
	return Math.abs(num)
}


console.log (positive(-50))
Q18
function fullName(firstName,lastName){
	return firstName + lastName
}
console.log(fullName("nana \t ", "ead"))

Q19
function average(num1,num2,num3,num4,num5) {
	var x=num1+num2+num3+num4+num5/5
	return x 
}
console.log(average(5,4,3,2,1))
Q20
function randomNumber(num){
	return Math.random(num)
}
console.log (randomNumber())
Q21
function randomBetweenNumbers(num1,num2){
	return Math.random()*(num1-num2)+num2
}
console.log(randomBetweenNumbers(1,3))
Q22
function scoreInUniversty(avg){
	if(avg>= 95&& avg=100){
		return "A";
	} 
	else if (avg >= 85&& avg<=94){
		return "B";
	}
	else if(avg >= 70&& avg<=84){
		return "C";
	}
	else if (avg >= 50&& avg<=69){
		return "D";
	}
	else if(avg >= 0&& avg<=49){
		return "F";
	}
}
console.log(scoreInUniversty(avg))
Q23
function counter(num){
	var x=0
	Math.max()
	return ++x
}
console.log(counter(0))


Q24
function resetCounter(num){
	var y=0
	Math.max()
	return ++y + "the counter reset now";
}
console.log(resetCounter(0))

