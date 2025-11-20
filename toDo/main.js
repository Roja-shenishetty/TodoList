const collapsibles=document.querySelectorAll(".collapsible");
collapsibles.forEach((item)=>{
  item.addEventListener("click",function(){
    this.classList.toggle("collapsible--expanded");
  })
});
const checkboxes=document.querySelectorAll(".check");
checkboxes.forEach((box)=>{
  box.addEventListener("click",function(){
    console.log(this);
    console.log(box.parentElement);
  });
});

const cards=document.querySelectorAll(".card");
const del=document.querySelector(".delItems");

del.addEventListener("click",()=>{
  const selected=document.querySelectorAll(".check__header:checked");
  selected.forEach(checkbox=>{
    checkbox.closest(".card").remove();
    checkbox.closest(".grid").remove();
  });
  
    
  });

const delgrocCheck=document.getElementById("delgrocCheck");

  delgrocCheck.addEventListener("click",()=>{
    const checkboxes=document.querySelectorAll(".groc");
     for(box of checkboxes){
       if(box.checked){
         box.parentElement.remove();
       }
     }
  });

 const delworkCheck=document.getElementById("delworkCheck");

   delworkCheck.addEventListener("click",()=>{
     const checkboxes=document.querySelectorAll(".work");
     for(box of checkboxes){
       if(box.checked){
         box.parentElement.remove();
       }
     }
   });

 const delactCheck=document.getElementById("delactCheck");

   delactCheck.addEventListener("click",()=>{
     const checkboxes=document.querySelectorAll(".act");
     for(box of checkboxes){
       if(box.checked){
         box.parentElement.remove();
       }
     }
   });

 const delworkOut=document.getElementById("delworkOut");

   delworkOut.addEventListener("click",()=>{
     const checkboxes=document.querySelectorAll(".workout");
     for(box of checkboxes){
       if(box.checked){
         box.parentElement.remove();
       }
     }
   });

const addgrocCheck=document.getElementById("addgrocCheck");
  addgrocCheck.addEventListener("click",()=>{
  const container=document.getElementById("checkboxContainerGroc");
  const labelInput=document.getElementById("checkboxLabelGroc");
const labelText=labelInput.value.trim();
if(labelText===""){
  console.log("enter a label first");
  return;
}  
//create checkbox label
const div=document.createElement("div");
const checkbox=document.createElement("input");
const label=document.createElement("label");

checkbox.type='checkbox';
checkbox.classList.add('check');
checkbox.classList.add("groc");
label.textContent=labelText;
label.contentEditable=true;
label.classList.add('todo');

//Append to container
div.appendChild(checkbox);
div.appendChild(label);
container.appendChild(div);
//clear input
labelInput.value="";
});

const addworkCheck=document.getElementById("addworkCheck");
addworkCheck.addEventListener("click",()=>{
  const container=document.getElementById("checkboxContainerWork");
  const labelInput=document.getElementById("checkboxLabelWork");
  const labelText=labelInput.value.trim();
if(labelText===""){
  console.log("enter a label first");
  return;
}  
//create checkbox label
const div=document.createElement("div");
const checkbox=document.createElement("input");
const label=document.createElement("label");

checkbox.type='checkbox';
checkbox.classList.add('check');
checkbox.classList.add("work");
label.textContent=labelText;
label.contentEditable=true;
label.classList.add('todo');

//Append to container
div.appendChild(checkbox);
div.appendChild(label);
container.appendChild(div);
//clear input
labelInput.value="";
});

const addactCheck=document.getElementById("addactCheck");
addactCheck.addEventListener("click",()=>{
  const container=document.getElementById("checkboxContainerAct");
  const labelInput=document.getElementById("checkboxLabelAct");
const labelText=labelInput.value.trim();
if(labelText===""){
  console.log("enter a label first");
  return;
}  
//create checkbox label
const div=document.createElement("div");
const checkbox=document.createElement("input");
const label=document.createElement("label");

checkbox.type='checkbox';
checkbox.classList.add('check');
checkbox.classList.add("act");
label.textContent=labelText;
label.contentEditable=true;
label.classList.add('todo');

//Append to container
div.appendChild(checkbox);
div.appendChild(label);
container.appendChild(div);
//clear input
labelInput.value="";  
});

const addworkOut=document.getElementById("addworkOut");
addworkOut.addEventListener("click",()=>{
  const container=document.getElementById("checkboxContainerWorkOut");
  const labelInput=document.getElementById("checkboxLabelWorkOut");
  const labelText=labelInput.value.trim();
if(labelText===""){
  console.log("enter a label first");
  return;
}  
//create checkbox label
const div=document.createElement("div");
const checkbox=document.createElement("input");
const label=document.createElement("label");

checkbox.type='checkbox';
checkbox.classList.add('check');
checkbox.classList.add("workout");
label.textContent=labelText;
label.contentEditable=true;
label.classList.add('todo');

//Append to container
div.appendChild(checkbox);
div.appendChild(label);
container.appendChild(div);
//clear input
labelInput.value="";
});

document.getElementById("submit").addEventListener("click",()=>{
  const forms=document.querySelectorAll("#myForm");
  let savedData=[];
  forms.forEach((form,index)=>{
    
    let formData={};
    checkboxes.forEach(checkbox=>{
      formData[checkbox.name]=checkbox.checked;
    });

    savedData.push({
      formNumber:index+1,
      data:formData
    });
  });

  localStorage.setItem("savedForms",JSON.stringify(savedData));
  alert("All forms saved!");
});


window.addEventListener("load",()=>{
  const saved=JSON.parse(localStorage.getItem("savedForms"));
  if(!saved) return;
  const forms=document.querySelectorAll("#myForm");
  saved.forEach((formData,index)=>{
    checkboxes.forEach(checkbox=>{
      checkbox.checked=formData.data[checkbox.name];
    });
  });
});