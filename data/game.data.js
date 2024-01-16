import { Lose } from "../UI/endPage/lose/lose.component.js";
import { Win } from "../UI/endPage/win/win.component.js";

import { notify } from "./subscribe/subscribe.component.js";

export const offerStatuses = {
    default: 'default',
    missed: 'missed',
    caught: 'caught',
}

export const data = {
    settings: {
        gridSizes: [
            {
                id: 11,
                rowCount: 3,
                columnCount: 3,
            },
            {
                id: 12,
                rowCount: 4,
                columnCount: 4,
            },
            {
                id: 13,
                rowCount: 5,
                columnCount: 5,
            },
        ],
        arrayOfPointsToWin: [
            {
                id: 21,
                pointsToWin: 5,
            },
            {
                id: 22,
                pointsToWin: 10,
            },
            {
                id: 23,
                pointsToWin: 15,
            },
        ],
        arrayOfMaximumMisses: [
            {
                id: 31,
                maximumMisses: 5,
            },
            {
                id: 32,
                maximumMisses: 10,
            },
            {
                id: 33,
                maximumMisses: 15,
            },
        ],
        arrayOfDecreaseDeltaInMs: [
            {
                id: 41,
                decreaseDeltaInMs: 20,
            },
            {
                id: 42,
                decreaseDeltaInMs: 30,
            },
            {
                id: 43,
                decreaseDeltaInMs: 40,
            },
        ],
        isMute: false,
    },
    status: offerStatuses.default,
    coords: {
        current: {
            x: 0,
            y: 0,
        },
        previous: {
            x: 1,
            y: 1,
        }
    },
    score: {
        missedCount: 0,
        caughtCount: 0,
    }
}

const startIdStatuses = {
    gridSizeId: data.settings.gridSizes[0].id,
    pointsToWinId: data.settings.arrayOfPointsToWin[0].id,
    maximumMissesId: data.settings.arrayOfMaximumMisses[0].id,
    decreaseDeltaInMsId: data.settings.arrayOfDecreaseDeltaInMs[0].id,
}


export let defaultIdStatuses = {
    gridSizeId: data.settings.gridSizes[0].id,
    pointsToWinId: data.settings.arrayOfPointsToWin[0].id,
    maximumMissesId: data.settings.arrayOfMaximumMisses[0].id,
    decreaseDeltaInMsId: data.settings.arrayOfDecreaseDeltaInMs[0].id,
}

export function setGridSizeId(id) {
    defaultIdStatuses.gridSizeId = id;
}
export function setPointsToWinId(id) {
    defaultIdStatuses.pointsToWinId = id;
}
export function setMaximumMissesId(id) {
    defaultIdStatuses.maximumMissesId = id;
}
export function setDecreaseDeltaInMsId(id) {
    defaultIdStatuses.decreaseDeltaInMsId = id;
}



export function restartGame() {
    defaultIdStatuses = {...startIdStatuses};
}



let stepIntervalID

export function runFirstStep() {
    missOffer();
    moveOfferToRandomPosition()
    notify();
    runStepInterval()
}

export function winGame() {
    const winElement = Win(data.score);
    clearInterval(stepIntervalID);
    return winElement;
}

export function loseGame() {
    const loseElement = Lose(data.score);
    clearInterval(stepIntervalID);
    return loseElement;
}

function runStepInterval() {
    stepIntervalID = setInterval(() => {
        missOffer();
        moveOfferToRandomPosition()
        notify();
    }, 1000);
    
}

function moveOfferToRandomPosition() {
    let newX = null;
    let newY = null;

    do {
        newX = getRandom(data.settings.gridSizes[0].columnCount);
        newY = getRandom(data.settings.gridSizes[0].rowCount);
    } while (data.coords.current.x === newX && data.coords.current.y === newY);

    data.coords.current.x = newX;
    data.coords.current.y = newY;

    notify();
}

function missOffer() {
    data.status = offerStatuses.missed;
    data.score.missedCount++;
    data.coords.previous = {
        ...data.coords.current
    };

    setTimeout(() => {
        data.status = offerStatuses.default;
        notify();
    }, 200);


}

export function catchOffer() {
    data.status = offerStatuses.caught;
    data.score.caughtCount++;
    data.coords.previous = {
        ...data.coords.current
    };

    setTimeout(() => {
        data.status = offerStatuses.default;
        notify();
    }, 200);

    moveOfferToRandomPosition();
    clearInterval(stepIntervalID);
    runStepInterval();
}

function getRandom(number) {
    return Math.floor(Math.random() * (number));
}
