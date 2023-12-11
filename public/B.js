
document.addEventListener('DOMContentLoaded', () => {
  const socket = io.connect('https://choices-production.up.railway.app/');
  
  const singleOptionButton = document.getElementById('single-option');
  const againOptionButton = document.getElementById('again-option');

  const aOption1Button = document.getElementById('a-option-1');
  const aOption2Button = document.getElementById('a-option-2');

  const bOption1Button = document.getElementById('b-option-1');
  const bOption2Button = document.getElementById('b-option-2');

  const cOption1Button = document.getElementById('c-option-1');
  const cOption2Button = document.getElementById('c-option-2');
  const cOption3Button = document.getElementById('c-option-3');

  const timerContainer = document.getElementById('timer-container');
  let timerInterval; // Variable to store the timer interval

  againOptionButton.addEventListener('click', () => {
    startAgain('again-option');
  });

  singleOptionButton.addEventListener('click', () => {
    startAdventure('single-option');
  });

  aOption1Button.addEventListener('click', () => {
    pathChoice('a-option-1');
  });

  aOption2Button.addEventListener('click', () => {
    pathChoice('a-option-2');
  });

  bOption1Button.addEventListener('click', () => {
    attackChoice('b-option-1');
  });

  bOption2Button.addEventListener('click', () => {
    attackChoice('b-option-2');
  });

  cOption1Button.addEventListener('click', () => {
    codeChoice('c-option-1');
  });

  cOption2Button.addEventListener('click', () => {
    codeChoice('c-option-2');
  });

  cOption3Button.addEventListener('click', () => {
    codeChoice('c-option-3');
  });

  function startAdventure(choice) {
    document.getElementById('game-play1').style.display = 'none';
    socket.emit('startAdventure',choice);
    setTimeout(() => {
      afterTakeoff();
      resetTimer();
    }, 38000);
  }

  function afterTakeoff() {
    document.getElementById('game-play2').style.display = 'block';
    socket.emit('afterTakeoff');
  }

  function pathChoice(choice) {
    document.getElementById('game-play2').style.display = 'none';
    socket.emit('pathChoice', choice);
    setTimeout(() => {
      afterPath();
      resetTimer();
    }, 32000);
  }

  function afterPath() {
    document.getElementById('game-play3').style.display = 'block';
    socket.emit('afterPath');
  }

  function attackChoice(choice) {
    document.getElementById('game-play3').style.display = 'none';
    socket.emit('attackChoice', choice);
    setTimeout(() => {
      afterAttack();
      resetTimer();
    }, 15000);
  }

  function afterAttack() {
    document.getElementById('game-play4').style.display = 'block';
    socket.emit('afterAttack');
  }

  function codeChoice(choice) {
    document.getElementById('game-play4').style.display = 'none';
    socket.emit('codeChoice', choice);
    setTimeout(() => {
      afterCode();
      resetTimer();
    }, 19000);
  }

  function afterCode() {
    document.getElementById('game-play5').style.display = 'block';
    socket.emit('afterCode');
    setTimeout(() => {
      doyouwanna();
      resetTimer();
    }, 6000);

  }

  function doyouwanna() {
    document.getElementById('game-play1').style.display = 'block';
    document.getElementById('game-play2').style.display = 'none';
    document.getElementById('game-play3').style.display = 'none';
    document.getElementById('game-play4').style.display = 'none';
    document.getElementById('game-play5').style.display = 'none';
    socket.emit('doyouwanna');
  }

  function startAgain() {
    resetTimer();
    document.getElementById('game-play2').style.display = 'none';
    document.getElementById('game-play3').style.display = 'none';
    document.getElementById('game-play4').style.display = 'none';
    document.getElementById('game-play5').style.display = 'none';
    socket.emit('startAgain');
    location.reload(true);
  }


  function resetTimer() {
    clearInterval(timerInterval);
    timerContainer.textContent = ''; // Clear the timer display
  }


  // Listen for 'timerExpired' event to handle game over state
  socket.on('timerExpired', () => {
    // Perform actions when the timer expires (e.g., restart the game)
    timerContainer.textContent = ``;
    startAgain();
  });

  socket.on('startTimer', () => {
    let timeLeft = 120; // 2 minutes in seconds

    // Timer logic
    timerInterval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerContainer.textContent = `YOU ONLY HAVE ${minutes}:${seconds} LEFT TO ANSWER`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        socket.emit('timerExpired');
      } else {
        timeLeft--;
      }
    }, 1000);
  });

  socket.on('stopTimer', () => {
    clearInterval(timerInterval);
    timerContainer.textContent = ` `;
  });


 /*  socket.on('resetGame', () => {
    resetTimer(); // Reset the timer
    document.getElementById('game-play1').style.display = 'block'; // Display the initial screen
    document.getElementById('game-play2').style.display = 'none';
    document.getElementById('game-play3').style.display = 'none';
    document.getElementById('game-play4').style.display = 'none';
    document.getElementById('game-play5').style.display = 'none';
  }); */

  socket.on('aftergameover', () => {
    resetTimer();
    startAgain();
  });

  socket.on('doyouwanna', () => {
    resetTimer();
    doyouwanna();
  });


  });
  