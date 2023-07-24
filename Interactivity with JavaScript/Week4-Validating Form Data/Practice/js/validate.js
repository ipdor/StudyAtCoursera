function check_email_same (){
    var mail1 = document.getElementById("input_email");
    var mail2 = document.getElementById("repeat_email");
    // console.log(mail1.value);
    // console.log(mail2.value);

    if (mail1.value != mail2.value){
        var prompt = document.getElementsByClassName("prompt");
        prompt[0].style.display="inline";
        prompt[1].style.display="inline";
        prompt[0].style.color="#ff0000";
        prompt[0].innerText="Please make sure two email addresses are the same!";
        return false;
    }
    else{
        hide_prompt();
    }
}

function hide_prompt(){
    var prompt = document.getElementsByClassName("prompt");
    for(i=0 ;i<prompt.length; i++){
        prompt[i].style.display="none"; //display:none - 不占空间; visibility:hidden - 占用空间
    }
    return true;
}