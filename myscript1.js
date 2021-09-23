const countdown = () => {
 const countDate = new Date("sep 24, 2021 24:00:00").getTime()
 const now = new Date().getTime();
 const gap = countDate - now; 

//förklara tiden 
// 1 sek = 1000 ms
 const second = 1000; 
 const minute = second * 60;
 const hour = minute * 60;
 const day = hour * 24;

 //räkna ut 


 // fick ut: 3.88959695
 //Moduloräkning
 // 10%2=0
 //10%3=  3*3=9. 1rest till 10. 

 const textDay = Math.floor(gap / day);
 const textHour = Math.floor((gap % day) / hour);
 const textMinute = Math.floor((gap % hour) / minute);
 const textSecond = Math.floor((gap % minute) / second);

 document.querySelector(".day").innerText = textDay;
 document.querySelector(".hour").innerText = textHour;
 document.querySelector(".minute").innerText = textMinute;
 document.querySelector(".second").innerText = textSecond;


}; setInterval(countdown, 1000); 

for (let i = 0; i < 9; i++) {
    console.log(i);
}
try {
    nonExistentFunction();
} catch (error) {
    console.error(error);
    
}
function playsong(){
var mySong = document.getElementById("mySong");
    var icon = document.getElementById("icon");

        if(mySong.paused){
            mySong.play();
            icon.src ="pause-button.png";
        }else {
            mySong.pause();
            icon.src ="PinClipart.com_play-button-clipart_680702.png";

         }
    }










