const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regExp = /^[\w.-]+@gmail\.com$/

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)) {
        gmailResult.innerText = 'E-mail OK'
        gmailResult.style.color = 'Green'
    } else {
        gmailResult.innerText = 'E-mail is not OK'
        gmailResult.style.color = 'red'
    }
}

const Block = document.querySelector(".child_block")
let x = 0

function moveBlock() {
    if (x < 450) {     
        x += 5;        
        Block.style.left = x + "px"; 
        requestAnimationFrame(moveBlock);
    }
}

Block.onclick = () => {
    moveBlock(); 
};
