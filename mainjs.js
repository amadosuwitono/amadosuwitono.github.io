function openNav(){
    document.getElementById("mySideBar").style.width = "90%";
    document.getElementById("head-top").style.marginLeft = "90%";
    document.getElementById("head-bot").style.marginLeft = "90%";
}

function closeNav(){
    document.getElementById("mySideBar").style.width = "0";
    document.getElementById("head-top").style.marginLeft = "0";
    document.getElementById("head-bot").style.marginLeft = "0";
}

function writeOpenBtn(mediaQuery){
    if(mediaQuery.matches){
        document.write('<div class="main col-md-1"><button class="openbtn" onclick="openNav()"><span class="fas fa-bars" style="font-size: 2vw;"></span></button></div>')
    }
}