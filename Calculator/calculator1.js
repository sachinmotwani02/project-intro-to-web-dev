var num = "";
var result,op,opr;


document.querySelector('.flex-container').addEventListener('click', function(event) {
 // alert(`You clicked on button ${event.target.innerText}`);
    
 if(event.target.innerText>=0 && event.target.innerText<10){
   var a = event.target.innerText;
    num = num + a.toString();
    console.log(num);
    document.getElementById("demo").innerHTML = num;
 }
 else if(event.target.innerText === 'C'){
     num = "";
    document.getElementById("demo").innerHTML = 0;
 }
 else if(event.target.innerText === 'back'){
    num = num.substring(0, num.length - 1);
   document.getElementById("demo").innerHTML = num;
   if(num.length === 0)
   document.getElementById("demo").innerHTML = 0;
}
var number = parseInt(num);
console.log(number);

if(event.target.innerText === '+'){
    op = number;
    num ="";
    opr = 1;
    document.getElementById("demo").innerHTML = 0;
}
else if(event.target.innerText === '-'){
    op = number;
    opr=2;
    num ="";
    document.getElementById("demo").innerHTML = 0;
}
else if(event.target.innerText === 'x'){
    op = number;
    opr =3;
    num = "";
    document.getElementById("demo").innerHTML = 0;
}
else if(event.target.innerText === '/'){
    op = number;
    num ="";
    opr = 4;
    document.getElementById("demo").innerHTML = 0;
}
else if(event.target.innerText === '='){
    if(opr === 1){
        result = op + number;
    }
    else if(opr === 2){
        result = op - number;
    }
    else if(opr === 3){
        result = op * number;
    }
    else if(opr === 4){
        result = op / number;
    }
    num="";
    op = result;
    document.getElementById("demo").innerHTML = result;
}
console.log(number);
});



