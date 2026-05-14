document.addEventListener('DOMContentLoaded', () => {
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
    let timerInterval;
    let animationId;
    
    let posX, posY, speedX, speedY;
    let directionX = -1;
    let isHit = false;

    target.addEventListener('dragstart', (e) => e.preventDefault());

    function resetTargetPosition() {
        const containerRect = gameContainer.getBoundingClientRect();
        directionX = Math.random() > 0.5 ? 1 : -1;
        speedX = (Math.random() * 6 + 4) * directionX;
        speedY = (Math.random() - 0.5) * 6; // Movimiento vertical

        if (directionX === -1) {
            posX = containerRect.width;
        } else {
            posX = -target.offsetWidth;
        }
        
        // Asegura que aparezca dentro de los bordes superior e inferior
        const maxPosNetoY = containerRect.height - target.offsetHeight;
        posY = Math.random() * maxPosNetoY;
        
        isHit = false;
        target.src = 'img/JG_A.png';
        target.style.display = 'block';
    }

    function move() {
        const containerRect = gameContainer.getBoundingClientRect();
        posX += speedX;
        posY += speedY;

        // Rebote estricto en bordes superior e inferior
        if (posY <= 0) {
            posY = 0;
            speedY *= -1;
        } else if (posY >= containerRect.height - target.offsetHeight) {
            posY = containerRect.height - target.offsetHeight;
            speedY *= -1;
        }
        
        if ((directionX === -1 && posX < -target.offsetWidth) || 
            (directionX === 1 && posX > containerRect.width)) {
            resetTargetPosition();
        }

        target.style.left = `${posX}px`;
        target.style.top = `${posY}px`;
        animationId = requestAnimationFrame(move);
    }

    function startGame() {
        startScreen.style.display = 'none';
        endScreen.style.display = 'none';
        gameContainer.style.display = 'block';
        score = 0;
        timeLeft = gameDuration;
        scoreElement.textContent = score;
        timerElement.textContent = timeLeft;
        resetTargetPosition();
        move();

        timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;
            if (timeLeft <= 0) endGame();
        }, 1000);
    }

    function endGame() {
        cancelAnimationFrame(animationId);
        clearInterval(timerInterval);
        gameContainer.style.display = 'none';
        endScreen.style.display = 'flex'; // Cambiado a flex para la nueva distribución
        finalScoreElement.textContent = `Puntaje: ${score}`;
        endMusic.play();
    }

    function handleClickOnTarget(event) {
        event.stopPropagation();
        if (isHit) return;
        isHit = true;
        hitSound.play();
        clickSound.play();
        target.src = 'img/JG_D.png';
        score++;
        scoreElement.textContent = score;
        setTimeout(() => {
            target.style.display = 'none';
            resetTargetPosition();
        }, 300);
    }

    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', startGame);
    target.addEventListener('click', handleClickOnTarget);
    document.addEventListener('click', () => {
        if(gameContainer.style.display === 'block') clickSound.play();
    });
});
