var tasks =[];
document.getElementById("btn-add").onclick=function(){
    var task= document.getElementById("task");
    tasks.push(task.value);
    task.value="";
    view();
}
function view(){
    var result=document.getElementById("result");
    var output="";
    var arraySize=tasks.length;
    for (var i=0;i<arraySize;i++)
    {  
        output+=`<li id="list-item" ondblclick="destory(${i})">${tasks[i]}
        <button onclick="update(${i})" style="color:green">update</button></li>
        `;
    }
    result.innerHTML=output;
}
function destory(index){
    tasks.splice(index,1);
    view();
}
function update(index){
    var btn;

        btn=document.getElementById("btn-add");
        document.getElementById("task").value=tasks[index];
        btn.id="btn-update";
        btn.innerText="update";
        edit(index);
}

function edit(index){
    btn=document.getElementById("btn-update");
    btn.onclick=function(){
        tasks[index]=document.getElementById("task").value;
        view();
        btn.id="btn-add";
        btn.innerText="add";
    }
    
}