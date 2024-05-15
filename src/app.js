// Array of Super Heroes and Super Villains names
const playersArray = [
    "Spiderman", "Iron Man", "Batman", "Superman", "Wonder Woman",
    "Joker", "Magneto", "Loki", "Thanos", "Venom",
    "Captain America", "Thor", "Wolverine", "Harley Quinn", "Catwoman",
    "Hulk", "Black Widow", "Deadpool", "Green Goblin", "Lex Luthor"
];

// Function to initialize players
function initPlayers(playersArray) {
    let players = [];
    for (let i = 0; i < playersArray.length; i++) {
        let player = {
            name: playersArray[i],
            strength: getRandomStrength(),
            image: `images/super-${i + 1}.png`,
            type: i % 2 === 0 ? "hero" : "villain"
        };
        players.push(player);
    }
    return players;
}

// Function to get random strength
function getRandomStrength() {
    return Math.floor(Math.random() * 100) + 1;
}

// Function to build players HTML
function buildPlayers(players) {
    let playerHTML = '';
    for (let i = 0; i < players.length; i++) {
        playerHTML += `
            <div class="player">
                <img src="${players[i].image}">
                <div class="name">${players[i].name}</div>
                <div class="strength">${players[i].strength}</div>
            </div>`;
    }
    return playerHTML;
}

// Initializing players
const players = initPlayers(playersArray);

// Building players HTML
const playersElement = document.getElementById('players');
playersElement.innerHTML = buildPlayers(players);
