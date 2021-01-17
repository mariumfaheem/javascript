/*
Local storage and session storage
console->appli->side m memeory ayega
jaavscript m hum broswer k localstorage m kuch add krsktey h key and value k form m 
session storage jab tk broswer chlta h toh active rehta h 
 */

 //add key value pair inside local storage
 /*
 console.log("This is tut 20")

 let impArray=['veg1','veg2','veg3']
localStorage.setItem('Name1',"harry")
 localStorage.setItem('Name2','Rohan')

  //if we want to del ony 1 items
  localStorage.removeItem('Name1')
    //yahan hum a rray wagera ko add nh krkstey directly
  localStorage.setItem('s',impArray)
  //islye hum use kregy json.parse
  localStorage.setItem('s',JSON.stringify(impArray))
//json.stringily ek object leta h or return krta h ek array
//json.parrse ek array leta h or return krta h object
name=JSON.parse(localStorage.getItem('s'))

 let name1=localStorage.getItem('Name1')
 console.log(name1)*/

 localStorage.setItem("Name1","Marium")
 localStorage.setItem("Name2","Hareem")
 let va=localStorage.getItem('Name1')
console.log(va)
let ob=['app1','app2','app3']
localStorage.setItem('va',JSON.stringify(ob))
