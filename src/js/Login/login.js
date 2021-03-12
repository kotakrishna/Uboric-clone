 // Registration

    var ph = document.getElementById("phone")
    var mail = document.getElementById("email")
    var ph2 = document.getElementById("phone2")
    var regbtn = document.getElementById("regbtn")
    regbtn.onclick = reg

    function reg() {
        event.preventDefault()
        localStorage.setItem("ph1", ph.value)
        localStorage.setItem("mail", mail.value)
        localStorage.setItem("ph2", ph2.value)
        alert(`You have been registered as ${mail.value}`)
    }



    let user = document.getElementById("user")
    let pass = document.getElementById("pswd")
    let btnlog = document.getElementById("btnlog")

    btnlog.onclick = log

    function log() {
        var value = localStorage.getItem("mail")
        var val = localStorage.getItem("ph2")

        if (value == user.value) {
            alert("You have Successfully loggedin ")
        } else {
            alert("Unsuccessfull Please try again")
        }

    }

