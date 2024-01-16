import {data, offerStatuses} from "../../../../data/game.data.js"
import { catchOffer } from '../../../../data/game.data.js';

export function Cell(x, y) {
    const cellElement = document.createElement('td')

    if (x === data.coords.current.x && y === data.coords.current.y) {
        const currentImgElement = document.createElement('img');
        currentImgElement.src = './assets/images/Default.png';
        currentImgElement.addEventListener('click', catchOffer);
        cellElement.append(currentImgElement);
    }

    if (data.status === offerStatuses.caught && x === data.coords.previous.x && y === data.coords.previous.y) {
        const caughtImgElement = document.createElement('img');
        caughtImgElement.src = './assets/images/OfferCaught.png'
        cellElement.append(caughtImgElement);
    }

    if (data.status === offerStatuses.missed && x === data.coords.previous.x && y === data.coords.previous.y) {
        const missedImgElement = document.createElement('img');
        missedImgElement.src = './assets/images/OfferMissed.png'
        cellElement.append(missedImgElement);
    }

    return cellElement;
}