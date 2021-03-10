// var url=new URL
// console.log(window.location)

var obj=localStorage.getItem("data")
var h1=document.getElementById("h1")
obj=JSON.parse(obj)

var {id,tittle}=obj
console.log(id,tittle);
var product=null
switch (obj["tittle"]) {
    case "Bathroom Accessories":
        // product=
        async function go(){
            var im=import("../bathrooms/data.js")
            var wt=await(im)
          product= ( wt["default"][id])
          console.log(product);
            h1.innerHTML=product["company_name"]
        }
        go()
         
        // console.log(im);
        break;
    case "Head Phones":
        // product=
        async function go1(){
            var im=import("../Electronics/HeadPhones/data.js")
            var wt=await(im)
          product= ( wt["default"][id])
          console.log(product);
            h1.innerHTML=product["company_name"]
        }
        go1()
        break;
    case "Buy Socks Products Online":
        // product=
        async function go2(){
            var im=import("../Socks/data.js")
            var wt=await(im)
          product= ( wt["default"][id])
          console.log(product);
            h1.innerHTML=product["company_name"]
        }
        go2()
         
        // console.log(im);
        break;
    case "Women's Footwear":
        // product=
        async function go3(){
            var im=import("../Footwear/women/data.js")
            var wt=await(im)
          product= ( wt["default"][id])
          console.log(product);
            h1.innerHTML=product["company_name"]
        }
        go3()
        break;
    case "Men's Footwear":
        // product=
        async function go4(){
            var im=import("../Footwear/Men/data.js")
            var wt=await(im)
          product= ( wt["default"][id])
          console.log(product);
            h1.innerHTML=product["company_name"]
        }
        go4()
        break;
    case "Bathroom Accessories":
        // product=
        async function go5(){
            var im=import("../bathrooms/data.js")
            var wt=await(im)
          product= ( wt["default"][id])
          console.log(product);
            h1.innerHTML=product["company_name"]
        }
        go5()
        break;
    case "Bathroom Accessories":
        // product=
        async function go6(){
            var im=import("../bathrooms/data.js")
            var wt=await(im)
          product= ( wt["default"][id])
          console.log(product);
            h1.innerHTML=product["company_name"]
        }
        go6()
        break;

    default:
        break;
}
