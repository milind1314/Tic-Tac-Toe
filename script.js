let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
var count=0;

let turnO = true;
// let turnX = false;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;

}


boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        // console.log("Box Was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            box.classList.add("red");
            box.classList.remove("blue");
            
        }
        else
        {
            box.innerText = "X";
            turnO = true;
            box.classList.add("blue");
            box.classList.remove("red")
            
        }
        count++;
        console.log(count);
        box.disabled = true;
        if (count==9) {
            msg.innerText = "Draw Match";
            msgContainer.classList.remove("hide");
        }
        checkWinner();
    })
});
 
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}



const checkWinner = () => {
    for (let patterns of winPatterns) {
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(
        //     boxes[patterns[0]].innerText,
        //     boxes[patterns[1]].innerText,
        //     boxes[patterns[2]].innerText
        // );
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;
        if (pos1Val !="" && pos2Val !="" && pos3Val !="") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("Winner",pos1Val);
                showWinner(pos1Val);
                
            }
        }
    }
};



newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
