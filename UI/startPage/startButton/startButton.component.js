import { runFirstStep } from "../../../data/game.data.js";
// import { renderGamePage } from "../../../index.js";
// import { Game } from "../../game/game.component.js";


export function StartButton() {

    const container = document.createElement('div');
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'START GAME';
    buttonElement.addEventListener('click', runFirstStep)
    
    container.append(buttonElement);

    return container;
}