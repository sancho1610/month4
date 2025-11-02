const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");


const regExp = /^[a-zA-Z][\w.-]*@gmail\.com$/;

gmailButton.onclick = () => {
    const value = gmailInput.value.trim();
    
    if (regExp.test(value)) {
        gmailResult.innerText = "E-mail OK";
        gmailResult.style.color = "green";
    } else {
        gmailResult.innerText = "E-mail is not OK";
        gmailResult.style.color = "red";
    }
};

const parentBlock = document.querySelector(".parent_block")
const Block = document.querySelector(".child_block");

let x = 0;
let y = 0;

const width = parentBlock.clientWidth - Block.offsetWidth
const height = parentBlock.clientHeight - Block.offsetHeight

const moveBlock = () => {
    if (x < width && y === 0) {
        x++
    } else if (x >= width && y < height) {
        y++
    } else if (y >= height && x > 0) {
        x--
    } else if (x <= 0 && y > 0) {
        y--
    }

    Block.style.left = `${x}px`
    Block.style.top = `${y}px`
    requestAnimationFrame(moveBlock)
}
moveBlock();


// watch

const second = document.querySelector("#seconds")
const startButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")
const resetButton = document.querySelector("#reset")

let sum = 0
let interval = null 

startButton.onclick = () => {
   if (interval === null){
    interval = setInterval(() => {
        sum++
        second.innerText = sum
    }, 1000)
   }
}

stopButton.onclick = () => {
    clearInterval(interval)
    interval = null
}
resetButton.onclick = () => {
    clearInterval(interval)
    interval = null
    sum = 0
    second.innerText = sum
}