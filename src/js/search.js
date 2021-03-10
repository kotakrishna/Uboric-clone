var search = localStorage.getItem("search").toUpperCase()
console.log(search);

import bathroom from './../js/bathrooms/data.js';
import head from './../js/Electronics/HeadPhones/data.js';
import  grocerys from './../js/grocery/data.js';
import  socks from './../js/Socks/data.js';
import  spices from './../js/spices/data.js';
import createProduct from './utils/createProduct.js';

console.log(bathroom,head,grocerys,socks,spices);

var output=document.getElementById("output")
// var {title}=bathroom["0"]
// console.log(title);
// output.innerHTML=createProduct(bathroom["0"],0)

for( let i in bathroom){
    let {tittle,company_name,description}=bathroom[i]
    if(tittle.toUpperCase().indexOf(search)>-1||company_name.toUpperCase().indexOf(search)>-1||description.toUpperCase().indexOf(search)>-1){
        console.log(search);
        let div=document.createElement("span")
        div.innerHTML=createProduct(bathroom[i],i)
        output.append(div)
    }
    console.log(bathroom[i]);
}
for( let i in head){
    let {tittle,company_name,description}=head[i]
    if(tittle.toUpperCase().indexOf(search)>-1||company_name.toUpperCase().indexOf(search)>-1||description.toUpperCase().indexOf(search)>-1){
        console.log(search);
        let div=document.createElement("span")
        div.innerHTML=createProduct(head[i],i)
        output.append(div)
    }
    console.log(head[i]);
}
for( let i in grocerys){
    let {tittle,description}=grocerys[i]
    if(tittle.toUpperCase().indexOf(search)>-1||description.toUpperCase().indexOf(search)>-1){
        console.log(search);
        let div=document.createElement("span")
        div.innerHTML=createProduct(grocerys[i],i)
        output.append(div)
    }
    console.log(grocerys[i]);
}
for( let i in socks){
    let {tittle,company_name,description}=socks[i]
    if(tittle.toUpperCase().indexOf(search)>-1||company_name.toUpperCase().indexOf(search)>-1||description.toUpperCase().indexOf(search)>-1){
        console.log(search);
        let div=document.createElement("span")
        div.innerHTML=createProduct(socks[i],i)
        output.append(div)
    }
    console.log(socks[i]);
}
for( let i in spices){
    let {tittle,company_name}=spices[i]
    if(tittle.toUpperCase().indexOf(search)>-1||company_name.toUpperCase().indexOf(search)>-1){
        console.log(search);
        let div=document.createElement("span")
        div.innerHTML=createProduct(spices[i],i)
        output.append(div)
    }
    console.log(spices[i]);
}
 