import { data } from "../../../data/game.data.js";
import { SelectDecrease } from "./select/selectDecrease.component.js";
import { SelectGrid } from "./select/selectGrid.component.js";
import { SelectMisses } from "./select/selectMisses.component.js";
import { SelectPoints } from "./select/selectPoints.component.js";


export function Settings() {
    const container = document.createElement('div');
    container.classList.add('settings')
    const selectElement1 = SelectGrid(data.settings.gridSizes);
    const selectElement2 = SelectPoints(data.settings.arrayOfPointsToWin);
    // const selectElement3 = SelectDecrease(data.settings.arrayOfDecreaseDeltaInMs);
    const selectElement4 = SelectMisses(data.settings.arrayOfMaximumMisses);
    container.append(selectElement1);
    container.append(selectElement2);
    // container.append(selectElement3);
    container.append(selectElement4);
    return container;
}

