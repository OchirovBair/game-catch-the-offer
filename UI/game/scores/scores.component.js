import {data, winGame, loseGame, defaultIdStatuses, subscribe} from "../../../data/game.data.js"


export function Scores() {
    let maxPoints = null;
    for (let i = 0; i < data.settings.arrayOfPointsToWin.length; i++) {
        if (data.settings.arrayOfPointsToWin[i].id === defaultIdStatuses.pointsToWinId) {
            maxPoints = data.settings.arrayOfPointsToWin[i].pointsToWin
        }
    }
    let maxMisses = null;
    for (let i = 0; i < data.settings.arrayOfPointsToWin.length; i++) {
        if (data.settings.arrayOfMaximumMisses[i].id === defaultIdStatuses.maximumMissesId) {
            maxMisses = data.settings.arrayOfMaximumMisses[i].maximumMisses
        }
    }
    subscribe(() => {
        if (data.score.caughtCount === maxPoints) {
            document.body.innerHTML = '';
            const winPage = winGame();
            document.body.append(winPage);
        } else if (data.score.missedCount === maxMisses){
            document.body.innerHTML = '';
            const losePage = loseGame();
            document.body.append(losePage);
        }
    })

    const container = document.createElement('div');
    container.append('Catch: ' + data.score.caughtCount + ' Miss: ' + data.score.missedCount);
    return container;
}