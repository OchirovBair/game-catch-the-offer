import {data, defaultIdStatuses} from "../../../data/game.data.js"
import {Cell} from "./cell/cell.component.js"

export function Grid() {
    const container = document.createElement('table');

    for (let i = 0; i < data.settings.gridSizes.length; i++) {

        if (defaultIdStatuses.gridSizeId === data.settings.gridSizes[i].id) {
            container.id = data.settings.gridSizes[i].id

            for (let y = 0; y < data.settings.gridSizes[i].rowCount; y++) {
                const rowElement = document.createElement('tr');
        
                for (let x = 0; x < data.settings.gridSizes[i].columnCount; x++) {
                    const cellElement = Cell(x, y);
                    rowElement.append(cellElement);
                }
                container.append(rowElement);
            }
        }
    }

    return container;
}