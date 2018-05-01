var lvl = 0;
var wordState = ''
var word1 = 'GOBLIN'
var word2 = 'LYCAN'
var word3 = 'TROGDOR'
var wordBoss = 'FLOCCINAUCINIHILIPILIFICATION'
var hp = 10;
var badGuess = '';


window.onkeydown = function (event) {
    if (hp === 0) {
        return;
    }

    if (lvl === 0) {
        if (event.keyCode === 32) {
            lvl = 1;
            wordState = '______';
            document.getElementById('start-box').style.display = 'none';
            document.getElementById('link').style.display = 'initial';
            document.getElementById('goblin').style.display = 'initial';
            document.getElementById('background').style.display = 'initial';
            //document.getElementById('word').innerHTML = wordState;
            //document.getElementById('hp').innerHTML = hp;
            //document.getElementById('lvl').innerHTML = lvl;
            console.log('test')
            return;
        }
    }
    
    if (lvl === 1) {
        word = 'GOBLIN'
        guess = false;
        for (i = 0; i < word1.length; i++) {
            if (word.charCodeAt(i) === event.keyCode) {
                wordArray = wordState.split('');
                wordArray[i] = word[i];
                wordState = wordArray.join('');
                guess = true;
            }
        }
        if (guess === true) {
            document.getElementById('word').innerHTML = wordState;
            document.getElementById('attack').style.display = 'initial';
            document.getElementById('goblin').style.animationIterationCount = 'infinite'
            window.setTimeout(function(){document.getElementById('goblin').style.animationIterationCount = '0'}, 800);
            window.setTimeout(function(){document.getElementById('attack').style.display = ''}, 500);
        } else {
            hp = hp - 1;
            badGuess = badGuess + String.fromCharCode(event.keyCode);
            document.getElementById('hp').innerHTML = hp;
            document.getElementById('guess').innerHTML = badGuess;
            document.getElementById('link').style.animationIterationCount = 'infinite'
            window.setTimeout(function(){document.getElementById('link').style.animationIterationCount = '0'}, 800);
            if (hp === 0) {
                document.getElementById('game-over-box').style.display = 'initial';
                window.setTimeout(function(){document.getElementById('link').style.display = 'none'}, 800);
                return;
            }
        }
    }
}


