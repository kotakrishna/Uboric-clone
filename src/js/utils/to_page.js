let to_data = document.getElementById("product_cont");

to_data.onclick = go_to;

function go_to(event) {
  //    console.log (event.target)
  var x = event.target.dataset.id;

  var w = document.title;

  var obj = {
    id: x,
    tittle: w,
  };
  obj = JSON.stringify(obj);

  console.log(x);
  localStorage.setItem("data", obj);
  window.location.href = "product_display.html";
}
