let num;
function func(){
    num=document.getElementById("daynum").value;
    num=Number(num);    
    switch (num){
        case 1:
            document.getElementById("ans").innerHTML="Monday";
            break;
        case 2:
            document.getElementById("ans").innerHTML='Tuesday';
            break;
        case 3:
            document.getElementById("ans").innerHTML='Wednesday';
            break;
        case 4:
            document.getElementById("ans").innerHTML='Thursday';
            break;
        case 5:
            document.getElementById("ans").innerHTML='Friday';
            break;
        case 6:
            document.getElementById("ans").innerHTML='Saturday';
            break;
        case 7:
            document.getElementById("ans").innerHTML='sunday';
            break;
        default:
            document.getElementById("ans").innerHTML='Please';
    }
    }