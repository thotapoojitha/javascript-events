document.querySelector("#grandparent")
.addEventListener("click", () => {
    console.log("Grandparent Clicked!");
},true); 

document.querySelector("#parent")
.addEventListener("click", (e) => {
    console.log("Parent Clicked!");
   
},false);

document.querySelector("#child")
.addEventListener("click", (e) => {
    console.log("Child Clicked!");
    e.stopPropagation():
},true);
