import { Scores } from "./scores/scores.component.js";
import { Grid } from "./grid/grid.component.js";

export function Game() {
    const container = document.createElement('div');
    container.classList.add('gamePage')
    
    const scoresElement = Scores();
    container.append(scoresElement);

    const gridElement = Grid();
    container.append(gridElement);

    return container;
}