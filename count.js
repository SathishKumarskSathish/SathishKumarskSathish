const decreaseBtn=document.getElementById("decrease_btn");
const increaseBtn=document.getElementById("increase_btn");
const resetBtn=document.getElementById("reset_btn");
const countlbl=document.getElementById("countLbl");
let count=0;
increaseBtn.onclick=function(){
    count++;
    countlbl.textContent=count;
}
decreaseBtn.onclick=function(){
    if(count>0){
    count--;
    countlbl.textContent=count;
}
}
resetBtn.onclick=function(){
    count=0;
    countlbl.textContent=count;
}
