var data=document.getElementById("product_cont")
console.log(data);

var x=data.getElementsByTagName("article")
console.log(x);

function go(val){

    for(let i=0;i<x.length;i++){
        // var y=x.getElementsByTagName("h3")
        // console.log
        if((x[i].getElementsByTagName("p")[1])){
        let each_product=(x[i].getElementsByTagName("p")[1].querySelector(".new-price").textContent);
        var price_of_each=(Number( each_product.slice(2,each_product.length-1)));

        if(Number(price_of_each)>val){
            x[i].style.display=""
        }
        else{
            x[i].style.display="none"
        }
    }
}
}
function go1(val){

    for(let i=0;i<x.length;i++){
        // var y=x.getElementsByTagName("h3")
        // console.log'
        if((x[i].getElementsByTagName("p")[1])){

        
        let each_product=(x[i].getElementsByTagName("p")[1].querySelector(".new-price").textContent);
        var price_of_each=(Number( each_product.slice(2,each_product.length-1)));

        if(Number(price_of_each)<val){
            x[i].style.display=""
        }
        else{
            x[i].style.display="none"
        }
    }
}
}


var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
	var _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
    console.log(_this.value);
    go(_this.value)

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
}
setRightValue();
setLeftValue();

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
    console.log(_this.value);    
    go1(_this.value)
	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
}

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
	thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
	thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
	thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
	thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("active");
});

