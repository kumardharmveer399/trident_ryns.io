
function setClipboard(value) {
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  
    var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Mail Copied!";
  }
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }
  
var loader=document.getElementById('loader');
function myfunc(){
    loader.style.display='none';
}
function scrollbg(){
 var navhead= document.getElementById('navhead');
var scrollvalue=window.scrollY;
if(scrollvalue>80){
  navhead.classList.add("sticky");  
}
else{
  navhead.classList.remove("sticky");
}
// console.log(scrollvalue);
}
window.addEventListener('scroll',scrollbg);