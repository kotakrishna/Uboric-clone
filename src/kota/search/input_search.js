var data=document.getElementById("product_cont")
console.log(data);

var x=data.getElementsByTagName("article")
console.log(x);


var input=document.getElementById("search")
input.onkeyup=go
// input.onclick=go()

function go(){
    console.log(input.value.toUpperCase());
    // console.log
    var input_val=(input.value.toUpperCase());
    for(let i=0;i<x.length;i++){
        // var y=x.getElementsByTagName("h3")
        // console.log
        let each_product=(x[i].getElementsByTagName("h3")[0].innerText);
        if(each_product.toUpperCase().indexOf(input_val)>-1){
            x[i].style.display=""
        }else{
            x[i].style.display="none"
        }
        // console.log(x[i]);
    }
}