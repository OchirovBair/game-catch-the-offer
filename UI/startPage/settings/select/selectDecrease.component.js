import {setDecreaseDeltaInMsId} from "../../../../data/game.data.js";

export function SelectDecrease(data, key) {
    const container = document.createElement('div');
    const nameOfContainer = document.createElement('span');
    container.append(nameOfContainer);
    const selectContainer = document.createElement('select');

    for (let i = 0; i < data.length; i++) {
        const optionContainer = document.createElement('option');
        optionContainer.id = data[i].id;
        optionContainer.innerText = data[i].decreaseDeltaInMs;
        nameOfContainer.innerText = 'ms after the catch';
        selectContainer.append(optionContainer);
    };

    selectContainer.addEventListener('change', () => {
        const selectedId = +selectContainer.options[selectContainer.selectedIndex].id;
        if (selectedId) {
            setDecreaseDeltaInMsId(selectedId);
        } else {
            console.log("Элемент DecreaseDeltaInMsId не имеет id");
        }
    });

    container.append(selectContainer);

    return container;
}
