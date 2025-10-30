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

const moveBlock = () => {
    x++
    Block.style.left = `${x}px`
    if(x < 448){
        requestAnimationFrame(moveBlock)
    }
}

moveBlock();