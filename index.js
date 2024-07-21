document.addEventListener('DOMContentLoaded',function(){
let lists =document.getElementsByClassName("list");
let right =document.getElementById("rightBox");
let left =document.getElementById("leftBox");
let selected=null;

for (let list of lists) {
    list.addEventListener("dragstart", function(e) {
        selected=e.target;
    });
   
    right.addEventListener("dragover",function(e){
        e.preventDefault();
    });
    right.addEventListener("drop", function(e){
        right.appendChild(selected);
        selected=null;
    })
    left.addEventListener("dragover",function(e){
        e.preventDefault();
    });
    left.addEventListener("drop", function(e){
        left.appendChild(selected);
        selected=null;
    })
}
})