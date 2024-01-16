import { Game } from "./UI/game/game.component.js"
import { StartPage } from "./UI/startPage/start.component.js"
import { subscribe } from "./data/subscribe/subscribe.component.js";
import { Player } from "./sounds/missAndCatchPlayer.js"



Player();



subscribe(renderGamePage);



function renderStartPage() {
    document.body.innerHTML = '';
    const startPageElement = StartPage();
    document.body.append(startPageElement);
}

function renderGamePage() {
    document.body.innerHTML = '';
    const gamePageElement = Game();
    document.body.append(gamePageElement);
}



renderStartPage();



// 1. В grid.component.js в строку if (settingsIdStatuses.gridSizeId === data.settings.gridSizes[i].id) приходит строка слевой стороны, но так как я делаю строгое сравнение а справой стороны у меня число то условия не выполняется. Это было пофиксено в selectGrid.component.js в addEventListener где был потавлен +, чтобы преобразовать передаваемую переменную в число. Допустим ли такой формат?
// 2. Если построить граф зависимость компонентов, то видно что все идет в одну сторону кроме двух компонентов lose.component.js и win.component.js. К ним обращаеться файл game.data.js к которому в свою очередь обращаеться scores.component.js в функциях winGame() и  loseGame(). Это сделаанно чтобы остановить интервал. Так будет корретктно?