{ // Registration

    let ph=document.getElementById("phone")
    let mail=document.getElementById("email")
    let ph2=document.getElementById("phone2")
    let regbtn=document.getElementById("regbtn")
    regbtn.onclick=reg

    function reg(){
        localStorage.setItem("ph1",ph.value)
        localStorage.setItem("mail",mail.value)
        localStorage.setItem("ph2",ph2.value)
        alert("You have been registered")
    }
}

{
    let user=document.getElementById("user")
    let pass=document.getElementById("pswd")
    let btnlog=document.getElementById("btnlog")

    btnlog.onclick=log

    function log(){
        var value=localStorage.getItem("mail")
        var val=localStorage.getItem("ph2")

        if(value==user.value && val==pass.value){
            alert("You have Successfully loggedin ")
        }else{
            alert("Unsuccessfull Please try again")
        }

    }

}