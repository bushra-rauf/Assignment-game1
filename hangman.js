const words = ["Wealth", "Success", "Happiness", "Knowledge", "Adventure"];
let playAgain = true;
while (playAgain) {
    const startGame = () => {
      let word = words[Math.floor(Math.random() * words.length)].toUpperCase();
      let guessedWord = Array(word.length).fill('_');
      let attempts = 6;
      let guessedLetters = [];

    const displayGuessedWord = () => {
       return guessedWord.join(' ');
    }

    const guessLetter= () => {
       const letter = prompt(`Guess word: ${displayGuessedWord()}\nGuessed letters: ${guessedLetters.join(', ')}\nAttempts left: ${attempts}\nEnter a letter (or type 'quit' to exit):`).toUpperCase();

        // Check if the user wants to quit the game
        if (letter.toLowerCase() === 'quit') {
           alert("Game over. You quit the game.");
           return false;
        }
       
        // Check if the input is a valid letter
        if (!/^[A-Z]$/.test(letter)) {
           alert("Please enter a valid letter.");
           return true;
        }

        // Check if the letter has already been guessed
        if (guessedLetters.includes(letter)) {
           alert("You have already guessed this letter. Try a different one.");
           return true;
        }

        guessedLetters.push(letter);
        let found = false;

        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
               guessedWord[i] = letter;
               found = true;
               }
            }

            if (!found) {
               attempts--;
               alert(`Incorrect guess. You have ${attempts} attempts left.`);
            }

            if (!guessedWord.includes('_')) {
                 alert(`Congratulations! Hurry You've guessed the word: ${word}`);
                 return false;
            }  else if (attempts === 0) {
                 alert(`You Lost! Hahahaha sorry! The word was: ${word}`);
                 return false;
                }

               return true;
            }

            while (attempts > 0 && guessedWord.includes('_')) {
               if (!guessLetter()) {
                   break;
               }
            }

        }
       
        alert(`Welcome to Hangman! \n Instructions: \n Guess a word. Enter a letter and click ok \n Good Luck!`)
        startGame(); 
        playAgain = confirm("Do you want to play again?")
           
    }   

    alert("Thank you for playing Hangman!");






