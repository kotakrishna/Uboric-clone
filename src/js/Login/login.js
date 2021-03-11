{ // Registration

    var ph = document.getElementById("phone").value
    var mail = document.getElementById("email").value
    var ph2 = document.getElementById("phone2").value
    var regbtn = document.getElementById("regbtn")
    regbtn.onclick = reg

    function reg() {
        localStorage.setItem("ph1", ph.value)
        localStorage.setItem("mail", mail.value)
        localStorage.setItem("ph2", ph2.value)
        alert("You have been registered")
            // Email.send({
            //         Host: "smtp.gmail.com",
            //         Username: "sender@email_address.com",
            //         Password: "Enter your password",
            //         To: mail,
            //         From: "deepak.elect@nitttrchd.ac.in",
            //         Subject: "Registration Successful",
            //         Body: "OTP:765432",
            //     })
            //     .then(function(message) {
            //         alert("mail sent successfully")
            //     });

    }
}

{
    let user = document.getElementById("user")
    let pass = document.getElementById("pswd")
    let btnlog = document.getElementById("btnlog")

    btnlog.onclick = log

    function log() {
        var value = localStorage.getItem("mail")
        var val = localStorage.getItem("ph2")

        if (value == user.value && val == pass.value) {
            alert("You have Successfully loggedin ")
        } else {
            alert("Unsuccessfull Please try again")
        }

    }

}