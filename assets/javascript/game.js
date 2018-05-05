var level = 0;
var wordState = '' 
var wordBoss = 'FLOCCINAUCINIHILIPILIFICATION'
var hp = 10;
var badGuess = '';
var guesses = [];
var audio1 = new Audio('./assets/audio/gerudo.mp3');
var audio2 = new Audio('./assets/audio/theme.mp3');

window.onkeyup = function (event) {





    //transitions
    //
    //
    //opening screen and transition to level 1
    if (level === 0) {
        if (event.keyCode === 32) {
            level = 1;
            wordState = '______';
            document.getElementById('wrapper').style.border = '15px solid #888888';
            document.getElementById('wrapper').style.boxShadow = '0px 0px 20px #888888';
            document.getElementById('intro').style.display = 'none';
            document.getElementById('background').style.display = 'initial';
            document.getElementById('main-header').style.display = 'initial';
            document.getElementById('link').style.display = 'initial';
            document.getElementById('goblin').style.display = 'initial';
            document.getElementById('word-div').style.display = 'initial';
            document.getElementById('guess-div').style.display = 'initial';
            document.getElementById('hp-div').style.display = 'initial';
            document.getElementById('level-div').style.display = 'initial';
            document.getElementById('word').innerHTML = wordState;
            document.getElementById('hp').innerHTML = 10;
            document.getElementById('level').innerHTML = level;
            return;
        }
    }

    //transition from 1
    if (level === 1.5) {
        if (event.keyCode === 32) {
            level = 2;
            wordState = '_____';
            guesses = [];
            badGuess = '';
            hp = 10;
            document.getElementById('transition').style.display = 'none';
            document.getElementById('wolf').style.display = 'initial';
            document.getElementById('word').innerHTML = wordState;
            document.getElementById('level').innerHTML = level;
            document.getElementById('guess').innerHTML = '';
            document.getElementById('hp').innerHTML = hp;
            document.getElementById('hp').style.color = 'green';
            return
        } else {
            return;
        }
    }

    //transition from 2
    if (level === 2.5) {
        if (event.keyCode === 32) {
            level = 3;
            wordState = '_________';
            guesses = [];
            badGuess = '';
            hp = 10;
            document.getElementById('transition').style.display = 'none';
            document.getElementById('dragon').style.display = 'initial';
            document.getElementById('word').innerHTML = wordState;
            document.getElementById('level').innerHTML = level;
            document.getElementById('guess').innerHTML = '';
            document.getElementById('hp').innerHTML = hp;
            document.getElementById('hp').style.color = 'green';
            document.getElementById('word-div').style.top = '250px';
            document.getElementById('guess-div').style.top = '220px';
            return
        } else {
            return;
        }
    }

    //transition from 3
    if (level === 3.5) {
        if (event.keyCode === 32) {
            level = 4;
            document.getElementById('word-div').style.display = 'none';
            document.getElementById('guess-div').style.display = 'none';
            document.getElementById('transition').style.display = 'none';
            document.getElementById('transition-sound').style.display = 'initial';
            return;
        } else {
            return;
        }
    }

    //boss suspensful transition
    if (level === 4) {
        if (event.keyCode === 32) {
            level = 5
            wordState = '';
            guesses = [];
            badGuess = '';
            hp = 10;
            audio1.play();
            audio1.loop = true;
            document.getElementById('word').innerHTML = '';
            document.getElementById('hp').innerHTML = hp;
            document.getElementById('guess').innerHTML = '';
            document.getElementById('level').innerHTML = '';
            document.getElementById('transition-sound').style.display = 'none';
            document.getElementById('background').style.transition = 'all 5s';
            document.getElementById('background').style.filter = 'grayscale(100%) brightness(100%)';
            document.getElementById('transition-sound').style.display = 'none';
            window.setTimeout(function(){document.getElementById('suspense-div1').style.display = 'initial'}, 7150);
            window.setTimeout(function(){document.getElementById('suspense-text1').style.color = '#eeeeee'}, 10300);
            window.setTimeout(function(){document.getElementById('suspense-text2').style.color = '#eeeeee'}, 13500);
            window.setTimeout(function(){document.getElementById('suspense-text3').style.color = '#eeeeee'}, 16690);
            window.setTimeout(function(){document.getElementById('background').style.animationIterationCount = 'infinite'}, 19850);
            window.setTimeout(function(){document.getElementById('background').style.filter = 'grayscale(100%) brightness(15%)'}, 23100);
            window.setTimeout(function(){document.getElementById('suspense-text1').style.display = 'none'}, 26000);
            window.setTimeout(function(){document.getElementById('suspense-text2').style.display = 'none'}, 26000);
            window.setTimeout(function(){document.getElementById('suspense-text3').style.display = 'none'}, 26000);
            window.setTimeout(function(){document.getElementById('suspense-text4').style.display = 'initial'}, 27000);
            window.setTimeout(function(){document.getElementById('suspense-text5').style.display = 'initial'}, 27000);
            window.setTimeout(function(){document.getElementById('suspense-text4').style.color = '#eeeeee'}, 28000);
            window.setTimeout(function(){document.getElementById('suspense-text5').style.color = '#eeeeee'}, 31000);
            window.setTimeout(function(){document.getElementById('level').innerHTML = 'BOSS'}, 34300);
            window.setTimeout(function(){document.getElementById('level-div').style.left = '510px'}, 34300);
            window.setTimeout(function(){document.getElementById('level').style.animationIterationCount = 'infinite'}, 34300);
            window.setTimeout(function(){document.getElementById('word-div').style.display = 'initial'}, 36000);
            window.setTimeout(function(){document.getElementById('guess-div').style.display = 'initial'}, 36000);
            window.setTimeout(function(){document.getElementById('word-div').style.top = '95px'}, 36000);
            window.setTimeout(function(){document.getElementById('word-div').style.left = '164px'}, 36000);
            window.setTimeout(function(){document.getElementById('guess-div').style.top = '125px'}, 36000);
            window.setTimeout(function(){document.getElementById('guess-div').style.left = '164px'}, 36000);
            window.setTimeout(function(){
                var timesRun = 0;
                var interval = setInterval(function(){
                    timesRun += 1;
                    if(timesRun === 29){
                        clearInterval(interval);
                    }
                    wordState = wordState + '_'
                    document.getElementById('word').innerHTML = wordState;
                }, 150); 
            }, 36000);
            window.setTimeout(function(){document.getElementById('suspense-text4').style.display = 'none'}, 36000);
            window.setTimeout(function(){document.getElementById('suspense-text5').style.display = 'none'}, 36000);
            window.setTimeout(function(){document.getElementById('suspense-text6').style.display = 'initial'}, 42000);
            window.setTimeout(function(){document.getElementById('suspense-text7').style.display = 'initial'}, 44000);
            window.setTimeout(function(){document.getElementById('suspense-text8').style.display = 'initial'}, 46000);
            window.setTimeout(function(){document.getElementById('suspense-text9').style.display = 'initial'}, 47000);
            window.setTimeout(function(){document.getElementById('suspense-text10').style.display = 'initial'}, 47500);
            window.setTimeout(function(){document.getElementById('background').style.transition = 'all .75s';}, 45000);
            window.setTimeout(function(){document.getElementById('background').style.animationIterationCount = '0';}, 47500);
            window.setTimeout(function(){document.getElementById('background').style.filter = 'brightness(10000%)';}, 47500);
            window.setTimeout(function(){document.getElementById('boss').style.filter = 'brightness(10000%)';}, 47500);
            window.setTimeout(function(){document.getElementById('boss').style.display= 'initial';}, 47600);
            window.setTimeout(function(){document.getElementById('background').style.transition = 'all .4s';}, 48251);
            window.setTimeout(function(){document.getElementById('boss').style.transition = 'all .4s';}, 48251);
            window.setTimeout(function(){document.getElementById('background').style.filter = 'brightness(100%)';}, 48252);
            window.setTimeout(function(){document.getElementById('boss').style.filter = 'brightness(100%)';}, 48252);
            window.setTimeout(function(){document.getElementById('suspense-div1').style.display = 'none';}, 48252);
            window.setTimeout(function(){level = 'BOSS'}, 48500);
            return
        } else {
            return;
        }
    }

    if (level === 5) {
        return;
    }

    //input suppression during animations
    if (document.getElementById('goblin').style.animationIterationCount === 'infinite') {
        return
    }
    if (document.getElementById('link').style.animationIterationCount === 'infinite') {
        return
    }
    if (document.getElementById('wolf').style.animationIterationCount === 'infinite') {
        return
    }
    if (document.getElementById('dragon').style.animationIterationCount === 'infinite') {
        return
    }
    if (document.getElementById('boss').style.animationIterationCount === 'infinite') {
        return
    }

    //check if guess has already been made
    for (i = 0; i < guesses.length; i++) {
        if (guesses[i] === event.keyCode) {
            return
        }
    }

    //letter attack text change
    document.getElementById('letter-attack').textContent = String.fromCharCode(event.keyCode);

    //game over state
    if (hp === 0) {
        return;
    }


    
    //level 1
    //
    //
    //
    if (level === 1) {

        word = 'GOBLIN'
        guess = false;

        //guess check
        for (i = 0; i < word.length; i++) {
            if (word.charCodeAt(i) === event.keyCode) {
                wordArray = wordState.split('');
                wordArray[i] = word[i];
                wordState = wordArray.join('');
                guess = true;
            }
        }
        
        //correct guess
        if (guess === true) {
            document.getElementById('word').innerHTML = wordState;
            document.getElementById('attack1').style.display = 'initial';
            document.getElementById('goblin').style.animationIterationCount = 'infinite'
            window.setTimeout(function(){document.getElementById('goblin').style.animationIterationCount = '0'}, 1600);
            window.setTimeout(function(){document.getElementById('attack1').style.display = ''}, 500);
            window.setTimeout(function(){document.getElementById('attack2').style.display = 'initial'}, 500);
            window.setTimeout(function(){document.getElementById('attack2').style.display = ''}, 1000);
            document.getElementById('letter-attack').style.display = 'initial';
            document.getElementById('letter-attack').style.color = 'white';
            window.setTimeout(function(){document.getElementById('letter-attack').style.left = '1100px';}, 100);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '0';}, 100);
            window.setTimeout(function(){document.getElementById('letter-attack').style.left = '580px'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.display = 'none'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '1'}, 602);

        //incorrect guess
        } else {
            hp = hp - 1;
            badGuess = badGuess + String.fromCharCode(event.keyCode);
            document.getElementById('hp').innerHTML = hp;
            document.getElementById('guess').innerHTML = badGuess;
            document.getElementById('link').style.animationIterationCount = 'infinite'
            document.getElementById('slash1').style.display = 'initial';
            window.setTimeout(function(){document.getElementById('slash1').style.display = ''}, 800);
            window.setTimeout(function(){document.getElementById('slash2').style.display = 'initial'}, 800);
            window.setTimeout(function(){document.getElementById('slash2').style.display = ''}, 1600);
            window.setTimeout(function(){document.getElementById('link').style.animationIterationCount = '0'}, 1600);
            document.getElementById('letter-attack').style.display = 'initial';
            document.getElementById('letter-attack').style.color = 'red';
            window.setTimeout(function(){document.getElementById('letter-attack').style.left = '580px'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.display = 'none'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '1'}, 602);
            window.setTimeout(function(){document.getElementById('letter-attack').style.left = '0px';}, 100);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '0';}, 100);
        }

        //guesses fill
        guesses.push(event.keyCode);

        //transition condition
        if (wordState === word) {
            level = 1.5
            window.setTimeout(function(){document.getElementById('goblin').style.display = ''}, 1600);
            document.getElementById('transition').style.display = 'initial';
        }
    }

    //level 2
    //
    //
    //
    if (level === 2) {

        word = 'LYCAN'
        guess = false;

        //guess check
        for (i = 0; i < word.length; i++) {
            if (word.charCodeAt(i) === event.keyCode) {
                wordArray = wordState.split('');
                wordArray[i] = word[i];
                wordState = wordArray.join('');
                guess = true;
            }
        }
        
        //correct guess
        if (guess === true) {
            document.getElementById('word').innerHTML = wordState;
            document.getElementById('attack1').style.display = 'initial';
            document.getElementById('wolf').style.animationIterationCount = 'infinite'
            window.setTimeout(function(){document.getElementById('wolf').style.animationIterationCount = '0'}, 1600);
            window.setTimeout(function(){document.getElementById('attack1').style.display = ''}, 500);
            window.setTimeout(function(){document.getElementById('attack2').style.display = 'initial'}, 500);
            window.setTimeout(function(){document.getElementById('attack2').style.display = ''}, 1000);
            document.getElementById('letter-attack').style.display = 'initial';
            document.getElementById('letter-attack').style.color = 'white';
            window.setTimeout(function(){document.getElementById('letter-attack').style.left = '1100px';}, 100);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '0';}, 100);
            window.setTimeout(function(){document.getElementById('letter-attack').style.left = '580px'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.display = 'none'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '1'}, 602);

        //incorrect guess
        } else {
            hp = hp - 1;
            badGuess = badGuess + String.fromCharCode(event.keyCode);
            document.getElementById('hp').innerHTML = hp;
            document.getElementById('guess').innerHTML = badGuess;
            document.getElementById('link').style.animationIterationCount = 'infinite'
            document.getElementById('slash1').style.display = 'initial';
            window.setTimeout(function(){document.getElementById('slash1').style.display = ''}, 800);
            window.setTimeout(function(){document.getElementById('slash2').style.display = 'initial'}, 800);
            window.setTimeout(function(){document.getElementById('slash2').style.display = ''}, 1600);
            window.setTimeout(function(){document.getElementById('link').style.animationIterationCount = '0'}, 1600);
            document.getElementById('letter-attack').style.display = 'initial';
            document.getElementById('letter-attack').style.color = 'red';
            window.setTimeout(function(){document.getElementById('letter-attack').style.left = '580px'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.display = 'none'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '1'}, 602);
            window.setTimeout(function(){document.getElementById('letter-attack').style.left = '0px';}, 100);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '0';}, 100);
        }

        //guesses fill
        guesses.push(event.keyCode);

        //transition condition
        if (wordState === word) {
            level = 2.5
            window.setTimeout(function(){document.getElementById('wolf').style.display = ''}, 1600);
            document.getElementById('transition').style.display = 'initial';
        }
    }

    //level 3
    //
    //
    //
    if (level === 3) {

        word = 'FIREDRAKE'
        guess = false;

        //guess check
        for (i = 0; i < word.length; i++) {
            if (word.charCodeAt(i) === event.keyCode) {
                wordArray = wordState.split('');
                wordArray[i] = word[i];
                wordState = wordArray.join('');
                guess = true;
            }
        }
        
        //correct guess
        if (guess === true) {
            document.getElementById('word').innerHTML = wordState;
            document.getElementById('attack1').style.display = 'initial';
            document.getElementById('dragon').style.animationIterationCount = 'infinite'
            window.setTimeout(function(){document.getElementById('dragon').style.animationIterationCount = '0'}, 1600);
            window.setTimeout(function(){document.getElementById('attack1').style.display = ''}, 500);
            window.setTimeout(function(){document.getElementById('attack2').style.display = 'initial'}, 500);
            window.setTimeout(function(){document.getElementById('attack2').style.display = ''}, 1000);
            document.getElementById('letter-attack').style.display = 'initial';
            document.getElementById('letter-attack').style.color = 'white';
            window.setTimeout(function(){document.getElementById('letter-attack').style.left = '1100px';}, 100);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '0';}, 100);
            window.setTimeout(function(){document.getElementById('letter-attack').style.left = '580px'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.display = 'none'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '1'}, 602);

        //incorrect guess
        } else {
            hp = hp - 1;
            badGuess = badGuess + String.fromCharCode(event.keyCode);
            document.getElementById('hp').innerHTML = hp;
            document.getElementById('guess').innerHTML = badGuess;
            document.getElementById('link').style.animationIterationCount = 'infinite'
            document.getElementById('slash1').style.display = 'initial';
            window.setTimeout(function(){document.getElementById('slash1').style.display = ''}, 800);
            window.setTimeout(function(){document.getElementById('slash2').style.display = 'initial'}, 800);
            window.setTimeout(function(){document.getElementById('slash2').style.display = ''}, 1600);
            window.setTimeout(function(){document.getElementById('link').style.animationIterationCount = '0'}, 1600);
            document.getElementById('letter-attack').style.display = 'initial';
            document.getElementById('letter-attack').style.color = 'red';
            window.setTimeout(function(){document.getElementById('letter-attack').style.left = '580px'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.display = 'none'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '1'}, 602);
            window.setTimeout(function(){document.getElementById('letter-attack').style.left = '0px';}, 100);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '0';}, 100);
        }

        //guesses fill
        guesses.push(event.keyCode);

        //transition condition
        if (wordState === word) {
            level = 3.5
            window.setTimeout(function(){document.getElementById('dragon').style.display = ''}, 1600);
            document.getElementById('transition').style.display = 'initial';
        }
    }


    //level BOSS
    //
    //
    //
    if (level === 'BOSS') {

        word = 'FLOCCINAUCINIHILIPILIFICATION'
        guess = false;

        //guess check
        for (i = 0; i < word.length; i++) {
            if (word.charCodeAt(i) === event.keyCode) {
                wordArray = wordState.split('');
                wordArray[i] = word[i];
                wordState = wordArray.join('');
                guess = true;
            }
        }
        
        //correct guess
        if (guess === true) {
            document.getElementById('word').innerHTML = wordState;
            document.getElementById('attack1-boss').style.display = 'initial';
            document.getElementById('boss').style.animationIterationCount = 'infinite'
            window.setTimeout(function(){document.getElementById('boss').style.animationIterationCount = '0'}, 1600);
            window.setTimeout(function(){document.getElementById('attack1-boss').style.display = ''}, 500);
            window.setTimeout(function(){document.getElementById('attack2-boss').style.display = 'initial'}, 500);
            window.setTimeout(function(){document.getElementById('attack2-boss').style.display = ''}, 1000);
            document.getElementById('letter-attack').style.display = 'initial';
            document.getElementById('letter-attack').style.color = 'white';
            window.setTimeout(function(){document.getElementById('letter-attack').style.top = '0px';}, 100);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '0';}, 100);
            window.setTimeout(function(){document.getElementById('letter-attack').style.top = '550px'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.display = 'none'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '1'}, 602);

        //incorrect guess
        } else {
            hp = hp - 2;
            badGuess = badGuess + String.fromCharCode(event.keyCode);
            document.getElementById('hp').innerHTML = hp;
            document.getElementById('guess').innerHTML = badGuess;
            document.getElementById('link').style.animationIterationCount = 'infinite'
            document.getElementById('special').style.display = 'initial';
            window.setTimeout(function(){document.getElementById('special').style.display = ''}, 1400);
            window.setTimeout(function(){document.getElementById('link').style.animationIterationCount = '0'}, 1600);
            document.getElementById('letter-attack').style.display = 'initial';
            document.getElementById('letter-attack').style.color = 'lightskyblue';
            window.setTimeout(function(){document.getElementById('letter-attack').style.left = '580px'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.display = 'none'}, 601);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '1'}, 602);
            window.setTimeout(function(){document.getElementById('letter-attack').style.left = '0px';}, 100);
            window.setTimeout(function(){document.getElementById('letter-attack').style.opacity = '0';}, 100);
        }

        //guesses fill
        guesses.push(event.keyCode);
        //transition condition
        if (wordState === word) {
            level = 'winner'
            window.setTimeout(function(){document.getElementById('boss').style.display = ''}, 1600);
            document.getElementById('winner').style.display = 'initial';
            audio1.pause();
            window.setTimeout(function(){audio2.play();}, 1600);
            window.setTimeout(function(){audio2.volume = 0.6;}, 1600);
            document.getElementById('level').innerHTML = '';
            document.getElementById('level').style.animationIterationCount = '0';
        }
    }

    //hp state coloring
    if (hp <= 6) {
        document.getElementById('hp').style.color = '#dab200';
    }
    if (hp <= 3) {
        document.getElementById('hp').style.color = 'red';
    }
    if (hp <= 0) {
        document.getElementById('game-over').style.display = 'initial';
        window.setTimeout(function(){document.getElementById('link').style.display = 'none'}, 1200);
        return;
    }
}


