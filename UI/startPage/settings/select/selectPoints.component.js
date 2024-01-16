import {setPointsToWinId} from "../../../../data/game.data.js";

export function SelectPoints(data) {
    const container = document.createElement('div');
    container.classList.add('points')
    const nameOfContainer = document.createElement('span');
    container.append(nameOfContainer);
    const selectContainer = document.createElement('select');

    for (let i = 0; i < data.length; i++) {
        const optionContainer = document.createElement('option');

        optionContainer.id = data[i].id;
        optionContainer.innerText = data[i].pointsToWin;
        nameOfContainer.innerText = 'Points To Win';
        selectContainer.append(optionContainer);
    };

    selectContainer.addEventListener('change', () => {
        const selectedId = +selectContainer.options[selectContainer.selectedIndex].id;
        if (selectedId) {
            setPointsToWinId(selectedId);
        } else {
            console.log("Элемент PointsToWinId не имеет id");
        }
    });

    container.append(selectContainer);

    return container;
}