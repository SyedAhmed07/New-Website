var Name=('Student Record =========>');
var rollno= +prompt('Enter Your Roll No');
var maths= +prompt('Enter Your Maths Marks','100');
var bio= +prompt('Enter Your Biology Marks','100');
var urdu= +prompt('Enter Your Urdu Marks','100');
var eng= +prompt('Enter Your English Marks','100');
var phy= +prompt('Enter Your physics Marks','100');
var maxmarks= 500;
var gainedmarks= maths+bio+urdu+eng+phy;
var percentage= (gainedmarks / maxmarks)*100;


console.log(Name);
console.log('Roll No:' , rollno);
console.log('Maths Marks:' , maths);
console.log('Biology Marks' , bio);
console.log('Urdu Marks:' , urdu);
console.log('English Marks:' , eng);
console.log('Physics Marks:' , phy);
console.log('Percentage:' , percentage);


if(percentage >= 90){
    console.log('Grade: A**')
}else if(percentage >= 80){
    console.log('Grade: A*')
}else if(percentage >= 70){
    console.log('Grade: A')
}else if(percentage >= 60){
    console.log('Grade: B')
}else if(percentage >= 50){
    console.log('Grade: C')
}else(
    console.log('Fail')
)