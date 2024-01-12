var hrs=document.getElementById("imph");
var min=document.getElementById("impm");

// flag=true;

// function musicbox(){
//     if(flag==true)
//     {element=document.getElementById("music_box");
        
//         element.classList.add("animationclass1");
        
//         element.style.visibility="visible";
//         flag=false;
//     }
//     else {
//         element=document.getElementById("music_box");
        
        
//         element.classList.remove("animationclass1");
//         document.getElementById("music_box").style.visibility="hidden";
//         flag=true;
//     }

// }
function fun1()
{
    d=new Date();
hour=d.getHours();
minute=d.getMinutes();
secon=d.getSeconds();

x=(hrs.value-hour)*60*60+(min.value-minute)*60-secon;
if(x>=0) 
{
    setTimeout(playmusic,x*1000);
    document.getElementById("demo1").innerHTML="Alarm set :"+hrs.value+" : "+min.value;
}
else {
alert("wrong time ");
}

}
function playmusic()
{
    document.getElementById("aud").play();
}
function pausei()
{
    document.getElementById("aud").pause();
}





