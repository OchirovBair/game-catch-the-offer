import { RefreshButton } from "../refreshButton/refreshButton.component.js";

export function Lose(score) {

    const container = document.createElement('div');
    container.classList.add('endPage')

    const textContainer = document.createElement('div');
    textContainer.classList.add('textContainer');

    const headerElement = document.createElement('h2');
    headerElement.innerText = 'You Lose!';
    textContainer.append(headerElement);

    const spanElement = document.createElement('span');
    spanElement.innerText = "You'll be lucky next time";
    textContainer.append(spanElement);

    const spanElement2 = document.createElement('span');
    spanElement2.innerText = "Catch " + score.caughtCount;
    textContainer.append(spanElement2);

    const spanElement3 = document.createElement('span');
    spanElement3.innerText = "Miss " + score.missedCount;
    textContainer.append(spanElement3);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    const button = RefreshButton();
    buttonContainer.append(button);
    textContainer.append(buttonContainer);
    
    container.append(textContainer);
    
    const imgElement = document.createElement('img');
    imgElement.src = './assets/images/lose.png';    
    container.append(imgElement);

    return container;
}