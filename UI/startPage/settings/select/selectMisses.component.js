import {setMaximumMissesId} from "../../../../data/game.data.js";

export function SelectMisses(data) {
    const container = document.createElement('div');
    container.classList.add('misses')
    const nameOfContainer = document.createElement('span');
    container.append(nameOfContainer);
    const selectContainer = document.createElement('select');

    for (let i = 0; i < data.length; i++) {
        const optionContainer = document.createElement('option');

        optionContainer.id = data[i].id;
        optionContainer.innerText = data[i].maximumMisses;
        nameOfContainer.innerText = 'Maximum Misses';
        selectContainer.append(optionContainer);
    };

    selectContainer.addEventListener('change', () => {
        const selectedId = +selectContainer.options[selectContainer.selectedIndex].id;
        if (selectedId) {
            setMaximumMissesId(selectedId);
        } else {
            console.log("Элемент MaximumMissesId не имеет id");
        }
    });

    container.append(selectContainer);

    return container;
}


