const container = document.querySelector(".cards-container");

const API_URL = "https://6919fb0c9ccba073ee948461.mockapi.io/dz";

async function loadCards() {
    try {
        const response = await fetch(API_URL);
        const cards = await response.json();

        container.innerHTML = "";

        cards.forEach(card => {
            container.innerHTML += `
                <div class="cards">
                    <h2>${card.name}</h2>
                    <img src="${card.avatar}" alt="">
                    <p>${card.text}</p>
                </div>
            `;
        });

    } catch (e) {
        console.log("Ошибка загрузки", e);
    }
}

loadCards();
