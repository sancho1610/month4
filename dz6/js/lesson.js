const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

const regExp = /^\+996 [5729]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)) {
        phoneResult.innerText = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerText = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

// TAB SLIDER 
const tabsParent = document.querySelector('.tab_content_items')
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')

const hideTabContent = () => {
    tabContentBlocks.forEach(block => {
        block.style.display = 'none'
    });
    tabs.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (blockIndex = 0) => {
    tabContentBlocks[blockIndex].style.display = 'block'
    tabs[blockIndex].classList.add('tab_content_item_active')
}


hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if(event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, index) => {
            if(event.target === tab){
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}

let currentIndex = 0 
const delay = 5000

const switchTab = (index) => {
    hideTabContent()
    showTabContent(index)
}

const switchSlide = (index) => {
    setInterval(() => {
        currentIndex++
        if (currentIndex >= tabs.length) {
            currentIndex = 0
        }
        switchTab(currentIndex)
    }, delay)
}

switchSlide()

// CONVERTER

const somInput = document.querySelector("#som")
const usdInput = document.querySelector("#usd")
const rubInput = document.querySelector("#rub")

const converter = (element, targetElement, targetElement1) => {
    element.oninput = () => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', '../data/converter.json')
            xhr.setRequestHeader('Content-type', 'application/json')
            xhr.send()

            xhr.onload = () => {
            const data = JSON.parse(xhr.response)

            if(element.id === "som"){
                targetElement.value = (element.value / data.usd).toFixed(2)
                targetElement1.value = (element.value * data.rub).toFixed(2);
            } 
            if(element.id === "usd") {
                targetElement.value = (element.value * data.usd).toFixed(2)
                targetElement1.value = ((element.value * data.usd) / data.rub).toFixed(2);
            }
            if(element.id === "rub") {
                targetElement.value = (element.value * data.rub).toFixed(2)
                targetElement1.value = ((element.value * data.rub) / data.usd).toFixed(2);
            }
            if(element.value === '') {
                targetElement.value = ''
                targetElement1.value = ''
            }
        }
    }
}

converter(somInput, usdInput, rubInput);
converter(usdInput, somInput, rubInput);
converter(rubInput, somInput, usdInput);


// card switcher

const card = document.querySelector(".card")
const btnNext = document.querySelector("#btn-next")
const btnPrev = document.querySelector("#btn-prev")
let cardIndex = 0


const updatecard = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardIndex}`)
    .then((response) => response.json())
    .then((data) => {
        const {title, completed, id} = data
        card.innerHTML = `
            <p>${title}</p>
            <p style="color: ${completed ? "green" : "red"}">
                ${completed}
            </p>
            <span>${id}</span>
        `
    })
}
btnNext.onclick = () => {
    cardIndex++
     if(cardIndex > 200) cardIndex = 1
    updatecard(cardIndex)
}

btnPrev.onclick = () => {
    cardIndex--
     if(cardIndex < 1) cardIndex = 200
    updatecard(cardIndex)
}

// home work 2

const response = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => console.log(data))