function message(msg){
    console.log(msg+" event");
    if (msg === "onclick"){
        document.getElementById("demo").innerText=Date();
    }
}
function setTime(){
    document.getElementById("time").innerText=Date();
}

function openMe(){
    var ele = document.getElementById('demo')
    ele.style.display="block"; //method 1
    //ele.className="open"; //method 2
}

function closeMe(){
    var ele = document.getElementById('demo')
    ele.style.display="none"; //method 1
    //ele.className="closed"; //method 2
}

