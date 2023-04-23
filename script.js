// step1: Create random number
let randomNumber = Math.floor(Math.random() * 100) + 1;

//Step2: Add vlaues of element to variables for store data
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;


// Step3: Add function and conditions.
function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'اعدادی که حدس زده اید: ';
    }
    guesses.textContent += `${userGuess} `;
  
    if (userGuess === randomNumber) {
      lastResult.textContent = 'تبریک! شما برنده شده اید';
      lastResult.style.color = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = 'شما باختید!';
      lowOrHi.textContent = '';
      setGameOver();
    } else {
      lastResult.textContent = 'اشتباه!';
      lastResult.style.color = 'red';
      lastResult.style.backgroundColor = 'white';
      if (userGuess < randomNumber) {
        lowOrHi.textContent = 'آخرین حدس شما کوچکتر از عدد مورد نظر است.';
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = 'آخرین حدس شما بزرگتر از عدد مورد نظر است.';
      }
    }
  
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }

  //step4: Connected button to functions.
guessSubmit.addEventListener('click', checkGuess);

//step5: Add game over functions.
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'شروع بازی';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }
  

//step6: Add reset functios.
  function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
  
  guessField.focus();