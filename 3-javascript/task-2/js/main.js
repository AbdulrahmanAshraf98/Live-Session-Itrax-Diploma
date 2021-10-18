var count=0;
var users=[];
var user_name=document.getElementById("name");
var add=document.getElementById("add");
var resualt=document.getElementById("count");
add.onclick=function(){
    users.push(user_name.value);
    resualt.innerText=users.length;
    user_name.value="";

}
