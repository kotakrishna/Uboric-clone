const electronicCon = document.querySelector(".electronic");
const dataElem = document.querySelector(".display-none");


let toggle = false;

function toggleMenu(bool) {
  dataElem.style.display = bool ? "block" : "none";
}

electronicCon.addEventListener("mouseover", (e) => {
  toggle = true;
  console.log(toggle)
  toggleMenu(toggle);
});
electronicCon.addEventListener("mouseleave", (e) => {
  toggle = false;
  toggleMenu(toggle);
  console.log(toggle)
});


//foot_ware 

const foot = document.querySelector(".foot-wear");
const dataelem1 = document.querySelector(".mens");


let footToggle = false;

function togglefootMenu(bool) {
  dataelem1.style.display = bool ? "block" : "none";
}

foot.addEventListener("mouseover", (e) => {
  footToggle = true;
  togglefootMenu(footToggle);
});
foot.addEventListener("mouseleave", (e) => {
    footToggle = false;
  togglefootMenu(footToggle);
});



// kithchen

const kitchen = document.querySelector(".kitchen_container");
const dataelem2 = document.querySelector(".kitchenEle");

let kitchenToggle = false;

function togglekitchenMenu(bool) {
  dataelem2.style.display = bool ? "block" : "none";
}

kitchen.addEventListener("mouseover", (e) => {
  kitchenToggle = true;
  togglekitchenMenu(kitchenToggle);
});
kitchen.addEventListener("mouseleave", (e) => {
  kitchenToggle = false;
 
  togglekitchenMenu(kitchenToggle);
});

// health
const health = document.querySelector(".health");
const dataelem3 = document.querySelector(".health_contain");

let healthToggle = false;

function togglehealthMenu(bool) {
  dataelem3.style.display = bool ? "block" : "none";
}

health.addEventListener("mouseover", (e) => {
  healthToggle = true;
  togglehealthMenu(healthToggle);
});
health.addEventListener("mouseleave", (e) => {
  healthToggle = false;
 
  togglehealthMenu(healthToggle);
});

// offer
const offer = document.querySelector(".offer");
const dataelem4 = document.querySelector(".offerCon");

let offerToggle = false;

function toggleofferMenu(bool) {
  dataelem4.style.display = bool ? "block" : "none";
}

offer.addEventListener("mouseover", (e) => {
  offerToggle = true;
  toggleofferMenu( offerToggle);
});
offer.addEventListener("mouseleave", (e) => {
  offerToggle= false;
 
  toggleofferMenu( offerToggle);
});
