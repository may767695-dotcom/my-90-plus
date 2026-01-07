// Persistent Points
let points = parseInt(localStorage.getItem('points')) || 0;
const pointsDisplay = document.getElementById('pointsDisplay');
const newsList = document.getElementById('newsList');
const smallBtn1 = document.getElementById('smallBtn1');
const smallBtn2 = document.getElementById('smallBtn2');

function updatePoints() {
    pointsDisplay.innerText = `Points: ${points}`;
    localStorage.setItem('points', points);
}

// Sample 20 news items
const newsData = [
    "Arsenal wins 2-1 vs Chelsea",
    "Messi scores hat-trick for Inter Miami",
    "Premier League transfers update",
    "Manchester United lineup news",
    "Liverpool suffers defeat",
    "Barcelona signs new player",
    "Real Madrid match highlights",
    "Bayern Munich wins Bundesliga",
    "Juventus announces new coach",
    "PSG signs superstar forward",
    "Man City top of the table",
    "AC Milan injury updates",
    "Tottenham predicts lineup",
    "Chelsea transfer rumors",
    "Leicester surprise win",
    "Napoli beats Lazio",
    "Inter Milan latest news",
    "Real Sociedad match report",
    "Sevilla wins Europa League",
    "Ajax champions league update"
];

// Show simulated ad
function showAd(callback) {
    alert('Ad is showing...');
    setTimeout(() => {
        alert('Ad finished!');
        callback();
    }, 1000);
}

// Render news
function renderNews() {
    newsList.innerHTML = '';
    newsData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'news-item';
        div.innerText = item;
        div.addEventListener('click', () => {
            showAd(() => {
                points += 5;
                updatePoints();
                alert('Points earned: 5');
            });
        });
        newsList.appendChild(div);
    });
    newsList.style.display = 'block';
}

// Big Buttons
document.getElementById('newsBtn').addEventListener('click', () => {
    renderNews();
    showAd(() => {});
});

document.getElementById('tipsBtn').addEventListener('click', () => {
    showAd(() => {
        alert('Open Viber for Tips!');
    });
});

// Small Buttons
smallBtn1.addEventListener('click', () => {
    showAd(() => {
        points += 10;
        updatePoints();
        alert('Points earned: 10');
    });
});

smallBtn2.addEventListener('click', () => {
    showAd(() => {
        points += 20;
        updatePoints();
        alert('Points earned: 20');
    });
});

// Admin activates small buttons after 2s
setTimeout(() => {
    smallBtn1.disabled = false;
    smallBtn2.disabled = false;
}, 2000);

// Top 20 simulation
document.getElementById('top20Btn').addEventListener('click', () => {
    alert('Top 20 Leaderboard\n(Real leaderboard requires backend/Firebase)');
});

// Initial update
updatePoints();
