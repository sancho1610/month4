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