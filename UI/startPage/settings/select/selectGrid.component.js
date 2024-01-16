import { setGridSizeId } from "../../../../data/game.data.js";

export function SelectGrid(data) {
    const container = document.createElement('div');
    container.classList.add('grid')
    const nameOfContainer = document.createElement('span');
    container.append(nameOfContainer);
    const selectContainer = document.createElement('select');

    for (let i = 0; i < data.length; i++) {
        const optionContainer = document.createElement('option');
        optionContainer.id = data[i].id;
        optionContainer.innerText = data[i].columnCount + 'x' + data[i].rowCount;
        nameOfContainer.innerText = 'Grid Size';
        selectContainer.append(optionContainer);
    };

    selectContainer.addEventListener('change', () => {
        const selectedId = +selectContainer.options[selectContainer.selectedIndex].id;
        if (selectedId) {
            setGridSizeId(selectedId);
        } else {
            console.log("Элемент gridSizeId не имеет id");
        }
    });

    container.append(selectContainer);

    return container;
}
