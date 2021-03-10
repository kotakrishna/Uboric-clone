var input=document.getElementById("search")
// .value.toUpperCase()
var table=document.getElementById("mytable")
var slider= document.getElementById("price")

function go(val){
    // console.log(slider.value);
    // if(!val){
    // var output=document.getElementById("output")
    // output.innerHTML=slider.value
    // var tr=table.getElementsByTagName("tr")
    // for(let i=0;i<tr.length;i++){
    //     let  td= tr[i].getElementsByTagName("td")[2]
        
    //     if(td){
            
    //         let textvalue=td.textContent || td.innerHTML;
            
    //         if(Number(textvalue)<slider.value){
    //             tr[i].style.display=""
    //         }
    //         else{
    //             tr[i].style.display="none"
    //         }
    //     }
    // }
    // }
    // else
    {
        var output=document.getElementById("output")
    output.innerHTML=val
    var tr=table.getElementsByTagName("tr")
    for(let i=0;i<tr.length;i++){
        let  td= tr[i].getElementsByTagName("td")[2]
        
        if(td){
            
            let textvalue=td.textContent || td.innerHTML;
            
            if(Number(textvalue)<val){
                tr[i].style.display=""
            }
            else{
                tr[i].style.display="none"
            }
        }
    }
    }
}


function call(){
    // console.log(input.value.toUpperCase());
    var tr=table.getElementsByTagName("tr")
    for(let i=0;i<tr.length;i++){
        let  td= tr[i].getElementsByTagName("td")[1]
        // console.log(td.innerHTML);
        if(td){
            // console.log(td[i].innerHTML);
            let textvalue=td.textContent || td.innerHTML;
            // console.log(textvalue.toUpperCase().indexOf);
            if(textvalue.toUpperCase().indexOf(input.value.toUpperCase())>-1){
                tr[i].style.display=""
            }
            else{
                tr[i].style.display="none"
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
    // console.log(_this.value);
    go(_this.value)

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
    // console.log(_this.value);    
    go(_this.value)
	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
}
setRightValue();

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



var obj={
    headph:{
        name:"",
        src:"",
        title:"",

    }
}