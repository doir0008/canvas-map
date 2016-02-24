"use strict";

var canvas = document.createElement("canvas");

function findPos() {
    if(navigator.geolocation){
        var params = {enableHighAccuracy:true, timeout: 30000, maximumAge: 0};
        navigator.geolocation.getCurrentPosition(gotPos, badStuff, params);
    }else{
        var heading = document.createElement("h1");
        heading.innerHTML = "Gelocation not supported";
        document.body.appendChild(heading);
        var para = document.createElement("p");
        para.innerHTML = "Gelocation is not supported by your browser. Please update to a current version to access Gelocation features.";
        document.body.appendChild(para);
    }
}

function gotPos(position){
    document.body.appendChild(canvas);
    canvas.width=400;
    canvas.height=400;
    var context = canvas.getContext("2d");
    var img = document.createElement("img");
    
    img.onload = function() {
        console.log(img.src);
        context.drawImage(img, 0, 0);
    };
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=14&size=400x400&markers=color:blue%7Clabel:A%7C" + position.coords.latitude + "," + position.coords.longitude + "&key=AIzaSyBVcqiRU1MpjUsqCyoe6WfCCog-fHe6eL4";
}

function badStuff(err){
    alert("Geolocation failed.");
}

findPos();