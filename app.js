var a=["Ahmed", "Hasnain", "Rizwan", "Anas", "Misbah"];
a[5]=("Sami");
a[10]=("Arham");
console.log(a[2]);
console.log(a);

var b=["Mango", "Orange", "Strawberry", "Grapes", "Banana"]
b.push("Peach")
b.pop()
b.unshift("Cherry")
b.shift()
// b.slice(2,3)
b.splice(2,1)
b.splice(0,1)
console.log(b)

var c= b.splice(1)
console.log(c)


var m= ['Mango' , 'Apple' , 'Orange' , 'Pineapple' , 'Peach']
for(var a=0; a < m.length; a++){
    console.log(m[3])
}

// var x= ['Mango' , 'Apple' , 'Orange' , 'Pineapple' , 'Peach']
// for(var a=0; a < x.length; a++){
//     console.log(x, +a)
// }

var z=("Pineapple")
for(var i=0; i< m.length; i++){
    console.log(m[i])
    if(m[i] == z){
        alert('Okay')
    }else{
        alert("Not Okay")
    }
}

