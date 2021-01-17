console.log("Ajax")
let fetchBtn=document.getElementById("fetchBtn");
fetchBtn.addEventListener("click",buttonClickHandler)

function buttonClickHandler(){
    console.log("Clicked")
    //Instantiaxte an xhr object
    const xhr=new XMLHttpRequest();   
    //open the object
    xhr.open('GET','harry.txt',true)
    //what to do in progess (Optiona;)
    xhr.onprogress=function(){
       console.log("On Progress");}
    
    xhr.onload=function(){
        console.log(this.responseText)
    }
    xhr.send();
    
}