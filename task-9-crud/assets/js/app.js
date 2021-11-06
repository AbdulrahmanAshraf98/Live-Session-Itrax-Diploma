let counter=0;
let productList=[];
let btnAdd=document.getElementById("btn-add-product");
let btnUpdate=document.getElementById("btn-update-product");
let productName=document.getElementById("productNameInp");
let productCategory=document.getElementById("productCategoryInp");
let productPrice=document.getElementById("productPriceInp");
let productDesc=document.getElementById("productDescInp");
const addButton=document.getElementById("btn-add-product");
addButton.onclick=function(){
    let product ={
        id:counter++,
        name:productName.value,
        category:productCategory.value,
        price:productPrice.value,
        description:productDesc.value
    }
    productList.push(product);
    displayProduct(productList);
    productName.value="";
    productCategory.value="";
    productPrice.value="";
    productDesc.value="";
}
function displayProduct(productList){
    let container=document.getElementById("container");
    let temp="";
    productListSize=productList.length;
    for (let i=0;i<productListSize;i++)
    {
        temp+=`
        <div class="product">
        <img src="assets/img/1.webp" alt="">
        <h2>${productList[i].name}</h2>
        <span>${productList[i].category}</span>
        <p>${productList[i].description}</p>
        <div class="price">${productList[i].price}</div>
        <button id="btn-del"onclick="destroy(${i});">delete</button>
        <button id="btn-update" onclick="update(${i});">update</button>
        </div>
        `
    }
    container.innerHTML=temp;
}
function destroy(index){
    productList.splice(index,1);
    displayProduct(productList);
}

function update(index){
    btnAdd.style.display="none";
    btnUpdate.style.display="block";
    productName.value=productList[index].name;
    productCategory.value=productList[index].category;
    productPrice.value=productList[index].price;
    productDesc.value=productList[index].description;
    btnUpdate.setAttribute("onclick",`edit(${index})`);
}
function edit(index)
{
    productList[index].name =productName.value;
    productList[index].category=productCategory.value;
    productList[index].price=productPrice.value;
    productList[index].description=productDesc.value;
    displayProduct(productList);
    btnAdd.style.display="block";
    btnUpdate.style.display="none";
    productName.value="";
    productCategory.value="";
    productPrice.value="";
    productDesc.value="";
}
