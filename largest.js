//write a java script program to determine largest of three numbers using nested ifelse statement
//use a switch stamt that display day of week based on number
let n1,n2,n3;
let larg;

function func(){
    n1=document.getElementById("n1").value;
    n2=document.getElementById("n2").value;
    n3=document.getElementById("n3").value;
    larg=Math.max(n1,n2,n3);
    document.getElementById('larg').innerHTML=`LargestElement among ${n1},${n2}, ${n3} is ${larg}`;
    
}


    