let inputDir = {x:0 , y:0};
let speed = 10;
let nextime = 0;
snakeArr= [{x:13, y:15}];
food = {x:5,y:6};

function main(ctime){
    window.requestAnimationFrame(main)
    if((ctime-nextime)/1000<1/speed){
        return;
    }
    nextime = ctime;
    gameEngine();
}


const gameEngine=()=>{
    if(Collide(snakeArr)){
        inputDir={x:0,y:0};
        alert("press any key to play");
        snakeArr=[{x:13,y:15}];
    }
     document.getElementById('saamp').innerHTML="";
     snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        if(index===0){
        snakeElement.classList.add("head");}
        else{
            snakeElement.classList.add("snake");
        }
        document.getElementById('saamp').appendChild(snakeElement);          
     })
        foodElement = document.createElement("div");
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add("food");
        document.getElementById('saamp').appendChild(foodElement);          

        if(snakeArr[0].x===food.x && snakeArr[0].y===food.y){
            snakeArr.unshift({x: snakeArr[0].x+inputDir.x , y: snakeArr[0].y+inputDir.y})
            a=2;
            b=16;
            food = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())}
        }
       
        for(let i=snakeArr.length-2;i>=0;i--){
            snakeArr[i+1]={...snakeArr[i]}
        }
        snakeArr[0].x += inputDir.x;
        snakeArr[0].y += inputDir.y;
     }
     const Collide = (sarr)=>{
        for(let i=1;i<snakeArr.length;i++){
            if(sarr[i].x===sarr[0].x && sarr[i].y===sarr[0].y){
                return true;
            }}
            if(sarr[0].x > 18 || sarr[0].x < 0 ||  sarr[0].y>18 || sarr[0].y<0){
                return true;
            }
           
     }

window.addEventListener("keydown",e=>{
    inputDir = {x:0 , y:0};
      if(e.key=="ArrowUp"){
         inputDir.x = 0;
         inputDir.y = -1;
      }
      if(e.key=="ArrowDown"){
        inputDir.x = 0;
        inputDir.y = 1;
      }
      if(e.key=="ArrowLeft"){
        inputDir.x = -1;
        inputDir.y = 0;
      }
      if(e.key=="ArrowRight"){
        inputDir.x = 1;
        inputDir.y = 0;
      }
})

window.requestAnimationFrame(main);