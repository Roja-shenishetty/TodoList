let boxes=document.querySelectorAll(".btn");
const input=document.querySelector(".numEnter")
function insertData(value){
    input.value+=value;
}
function clearInput(){
    input.value='';
}
function calculate(){
    try{
        input.value=eval(input.value);
    }catch{
        input.value='Error';
    }
}