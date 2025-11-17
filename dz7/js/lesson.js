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

const converter = (element, targetElement, targetElement1) => 
    element.oninput = async () => {
           try {
            const response = await fetch('../data/converter.json')
            const data = await response.json()
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
           } catch (error) {
                console.log(error)
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

const updatecard = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardIndex}`)
        const data = await response.json()
        const {title, completed, id} = data
        card.innerHTML = `
            <p>${title}</p>
            <p style="color: ${completed ? "green" : "red"}">
                ${completed}
            </p>
            <span>${id}</span>
        `
    } catch (error) {
        console.log(error)
    }
}

btnNext.onclick = () => {
    cardIndex++
    if (cardIndex > 200) cardIndex = 1
    updatecard()
}

btnPrev.onclick = () => {
    cardIndex--
    if (cardIndex < 1) cardIndex = 200
    updatecard()
}


// home work 2

const response = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => console.log(data))


// weather

const API = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "d3ef7158dedcce4d572580e360d8ec4f"
const searchInput = document.querySelector('#searchInput')
const searchButton = document.querySelector('#search')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

searchButton.onclick = async () => {
    try {
        if(searchInput.value !== ''){
            city.style.color = ''
            const response = await fetch(`${API}?q=${searchInput.value}&units=metric&lang=ru&appid=${API_KEY}`) 
            const data = await response.json()
            if(data.name) {
                city.style.color = ''
                city.innerHTML = data.name
                temp.innerHTML = Math.round(data.main.temp) + '&deg;C'
            } else {
                city.innerHTML = 'Город не найден!'
                city.style.color = 'red'
                temp.innerHTML = ''
            }

            searchInput.value = ''
        } else {
            city.innerHTML = 'Введите название города!'
            temp.innerHTML = ''
            city.style.color = 'red'
        }
        
    } catch (error) {
        console.log(error)
    }
}

// 

// const container = document.querySelector(".cards-container");

// const API_URL = "https://6919fb0c9ccba073ee948461.mockapi.io/dz";

// async function loadCards() {
//     try {
//         const response = await fetch(API_URL);
//         const cards = await response.json();

//         container.innerHTML = "";

//         cards.forEach(card => {
//             container.innerHTML += `
//                 <div class="card">
//                     <img src="${card.avatar}" alt="">
//                     <p>${card.text}</p>
//                 </div>
//             `;
//         });

//     } catch (e) {
//         console.log("Ошибка загрузки", e);
//     }
// }

// loadCards();
