var degree=document.getElementById("degree");
var calculate=document.getElementById("calculate");
var grade=document.getElementById("grade");
calculate.onclick=function (){
    grade.innerText=calculate_grade(degree.value);
}
function calculate_grade(degree){
    if(degree>=90){
        return "excellent";
    }
    else if(degree>=80&&degree<90){
        return "very good ";
    }
    else if(degree>=70&&degree<80){
        return "good";
    }
    else if(degree>=50&&degree<70){
        return "Acceptable";
    }
    else {
        return "fail";
    }
}