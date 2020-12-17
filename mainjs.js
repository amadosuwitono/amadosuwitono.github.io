function openNav(){
    document.getElementById("mySideBar").style.width = "90%";
    document.getElementById("headtop").style.marginLeft = "90%";
    document.getElementById("headbot").style.marginLeft = "90%";
}

function closeNav(){
    document.getElementById("mySideBar").style.width = "0";
    document.getElementById("headtop").style.marginLeft = "0";
    document.getElementById("headbot").style.marginLeft = "0";
}

function buttonbio(){
    var x = document.getElementById("biodata-fix");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}