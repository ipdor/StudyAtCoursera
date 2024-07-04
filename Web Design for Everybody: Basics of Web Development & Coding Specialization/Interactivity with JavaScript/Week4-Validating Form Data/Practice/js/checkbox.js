function nicknameFunction(){
    var checkbox_nickname = document.getElementById("yesNick");
    if (checkbox_nickname.checked == true){
        document.getElementById("nick").style.display="inline";
        document.getElementById("nickname").setAttribute("required","true");
    }
    else{
        document.getElementById("nick").style.display="none";
        document.getElementById("nickname").removeAttribute("required");
    }
}