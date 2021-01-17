class alarmClock{
    constructor(hour,min){
        this.hour=hour;
        this.min=min;
        
    }
   play(){
      let date=new Date()
    if(date.getHours()==this.hour && date.getMinutes()==this.min ){
        var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
        audio.play();
    }
       }

    current(){
        let date=new Date();
        let currentHour=date.getHours();
        let currentMin=date.getMinutes();
        let currentSec=date.getSeconds();
        let sum=(this.hour-currentHour )+(this.min-currentMin);
        if(sum===0){
            console.log("Same")
        }
        

    }

    

 }


 submit=document.getElementById("submit");
 submit.addEventListener("click",()=>{
    time=document.getElementById("time");
     console.log(time)
   /*  let time1=String(time.hour)
     console.log(time1)
     let hour,min=time1.split(":")
     console.log("hour 1 is",hour)
     console.log("min 1 is",min)*/
    

    //let hour,min=time.split(":")
    Array.from(time).forEach((element)=>{
        console.log(element.hour)
    })
    ac1=new alarmClock(time.value);
   
    ac1.play()
   

 })


