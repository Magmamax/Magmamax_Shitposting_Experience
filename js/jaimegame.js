document.addEventListener('DOMContentLoaded', (event) => {
    const startScreen = document.getElementById('start-screen');
    const startButton = document.getElementById('start-button');
    const gameContainer = document.getElementById('game-container');
    const endScreen = document.getElementById('end-screen');
    const finalScoreElement = document.getElementById('final-score');
    const restartButton = document.getElementById('restart-button');
    const target = document.getElementById('target');
    const clickSound = document.getElementById('click-sound');
    const hitSound = document.getElementById('hit-sound');
    const endMusic = document.getElementById('end-music');
    const timerElement = document.getElementById('timer');
    const scoreElement = document.getElementById('score');
    const gameDuration = 30; 
    let score = 0;
    let timeLeft = gameDuration;
    let gameInterval;
    let timerInterval;

    function getRandomPosition() {
        const containerRect = gameContainer.getBoundingClientRect();
        const x = Math.random() * (containerRect.width - target.offsetWidth);
        const y = Math.random() * (containerRect.height - target.offsetHeight);
        return { x, y };
    }

    function moveTarget() {
        const { x, y } = getRandomPosition();
        target.style.transform = `translate(${x}px, ${y}px)`;
    }

    function startGame() {
        startScreen.style.display = 'none';
        endScreen.style.display = 'none';
        gameContainer.style.display = 'block';
        score = 0;
        timeLeft = gameDuration;
        scoreElement.textContent = score;
        timerElement.textContent = timeLeft;
        moveTarget();

        gameInterval = setInterval(moveTarget, 1000);
        timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
    }

    function endGame() {
        clearInterval(gameInterval);
        clearInterval(timerInterval);
        gameContainer.style.display = 'none';
        endScreen.style.display = 'block';
        finalScoreElement.textContent = `Puntaje: ${score}`;
        endMusic.play();
    }

    function handleClickOnTarget(event) {
        event.stopPropagation(); 
        hitSound.play(); 
        clickSound.play(); 
        target.src = 'https://magmashitposting.lol/img/JG_D.png'; 
        score++;
        scoreElement.textContent = score;

        setTimeout(() => {
            target.style.display = 'none'; 
            setTimeout(() => {
                target.style.display = 'block'; 
                target.src = 'https://magmashitposting.lol/img/JG_A.png'; 
            }, 500); 
        }, 1000); 
    }

    function handleClickAnywhere() {
        clickSound.play(); 
    }

    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', startGame);
    target.addEventListener('click', handleClickOnTarget);
    document.addEventListener('click', handleClickAnywhere);
});
