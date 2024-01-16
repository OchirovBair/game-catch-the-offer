import { RefreshButton } from "../refreshButton/refreshButton.component.js";

export function Win(score) {

    const container = document.createElement('div');
    container.classList.add('endPage')

    const textContainer = document.createElement('div');
    textContainer.classList.add('textContainer');

    const headerElement = document.createElement('h2');
    headerElement.innerText = 'You Win!';
    textContainer.append(headerElement);

    const spanElement1 = document.createElement('span');
    spanElement1.innerText = "Congratulations";
    textContainer.append(spanElement1);

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
    imgElement.src = './assets/images/win.png';   
    

    container.append(imgElement);

    return container;
}