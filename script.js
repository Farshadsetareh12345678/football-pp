const players = {
    player1: document.getElementById('player1'),
    robot1: document.getElementById('robot1'),
    player2: document.getElementById('player2'),
    robot2: document.getElementById('robot2')
};

const moveButton = document.getElementById('moveButton1');
const shootButton = document.getElementById('shootButton1');
const difficultySelect = document.getElementById('difficulty');
const startGameButton = document.getElementById('startGame');

let positions = {
    player1: 50,
    robot1: 150,
    player2: 50,
    robot2: 150
};

let gameInterval;

moveButton.addEventListener('click', () => {
    positions.player1 += 20;
    players.player1.style.left = positions.player1 + 'px';
});

shootButton.addEventListener('click', () => {
    alert('بازیکن ۱ شوت یا پاس داد!');
});

startGameButton.addEventListener('click', () => {
    clearInterval(gameInterval);
    const difficulty = difficultySelect.value;
    startGame(difficulty);
});

function startGame(difficulty) {
    gameInterval = setInterval(() => {
        moveRobot(players.robot1, difficulty);
        moveRobot(players.robot2, difficulty);
    }, 1000);
}

function moveRobot(robot, difficulty) {
    let moveDistance;
    switch (difficulty) {
        case 'easy':
            moveDistance = Math.random() < 
