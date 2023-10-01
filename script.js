
let boxBody = document.querySelector(".box-body");
var hitsrn;
var clickedValue;
var score = 0;
var rn;
timer=60;
function generateRandomNumber(){
    for (let i = 0; i < 100; i++) {
    rn = Math.floor(Math.random()*10);
      var item = document.createElement("div");
      item.className = "item";
      item.textContent = rn;
      boxBody.appendChild(item);
    }
}
function UpdateHits(){
    hitsrn = Math.floor(Math.random()*10);
    document.querySelector(".hitsNum").innerHTML = hitsrn;
}
    const interval = setInterval(function gameTimer(){
        
        timer= timer-1;
        document.querySelector(".timer").innerHTML= timer;
        if(timer === 0){
            clearInterval(interval);
            boxBody.innerHTML="<h1 class='game-over'>Game Over</h1>"
        }
}, 1000)
    

function findClickedValue(){
    
    document.querySelector(".box-body").addEventListener("click", function(details){
        
        
        if(details.target.className === "item"){
            
        clickedValue = Number(details.target.innerHTML);
        
        
        } 
        function updateScore(){
            console.log("clickedValue", clickedValue)
            console.log("hitsrn", hitsrn);
            if(clickedValue ===hitsrn)
            {
                score = score + 10;
                UpdateHits();
                generateRandomNumber();
                document.querySelector(".finalscore").innerHTML = score;
                console.log(score);
                console.log("final Score" , score);
            }
            
        }
        updateScore();
        
        
       
    })
}
generateRandomNumber();
UpdateHits();
findClickedValue();



