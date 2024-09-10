const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;

}

const h1=document.querySelector('h1')


let intervalId;
const startChangingColor = function(){
   intervalId= setInterval(changeBgColor,1000);

    function changeBgColor(){
        const newColor = randomColor();
        document.body.style.backgroundColor = newColor;
        if(newColor==="#000000"){
            h1.style.color="white";
        }else{
            h1.style.color="black";
        }
    }
}

const stopChangingColor=function(){
    clearInterval(intervalId);
}

document.querySelector("#start").addEventListener("click",startChangingColor)
document.querySelector("#stop").addEventListener("click",stopChangingColor)