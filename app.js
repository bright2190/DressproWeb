// let backgroundImage = document.getElementById("bg_image");

// backgroundImage.className = "crop_top"
// let crop_top = document.getElementById("crop_top")
// crop_top.style.display = "inline"

// alert("How far")

// let crop_top = document.getElementById("crop_top");




// document.getElementById("crop_top_link").addEventListener('click', function(){
//     document.getElementsByClassName("second")[0].style.display = "none"
//     document.getElementById("bg_image").className = "crop_top";
//      let crop_top = document.getElementById("crop_top")
    
   
//     crop_top.style.display = "block";

//     console.log("hiiii")
    
// })


// document.getElementById("crop_top_link").addEventListener('mouseleave', function(){
//     document.getElementById("bg_image").className = "crop_top";
    
//     crop_top.style.display = "inline";
//     console.log("hiiii")
    
// })



function mainImage(){
    document.getElementById("bg_image").style.backgroundImage = 'url("./img/bg5.jpg")'
    
    
}
function cropTop(){
    document.getElementById("bg_image").style.backgroundImage = "url('./img/croptop1.jpg')"

}
function smockedTop(){
    document.getElementById("bg_image").style.backgroundImage = "url('./img/smocked1.jpg')"

}
function offShoulder(){
    document.getElementById("bg_image").style.backgroundImage = "url('./img/offshoulder1.jpg')"

}
function gown(){
    document.getElementById("bg_image").style.backgroundImage = "url('./img/gown1.jpg')"

}
function kiddies(){
    document.getElementById("bg_image").style.backgroundImage = "url('./img/gown2.jpg')"

}