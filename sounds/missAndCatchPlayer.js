import {
    data,
    offerStatuses} from "../data/game.data.js";
import { subscribe } from "../data/subscribe/subscribe.component.js";

export function Player() {
    const catchAudio = new Audio();
    catchAudio.src = 'assets/sounds/catch.wav';

    const missAudio = new Audio();
    missAudio.src = 'assets/sounds/miss.mp3';

    let prevStatus = data.status;

    subscribe(() => {
        if (data.status === offerStatuses.caught && prevStatus !== offerStatuses.caught) {
            catchAudio.currentTime = 0;
            catchAudio.play();
        } else if (data.status === offerStatuses.missed) {
            missAudio.currentTime = 0;
            missAudio.play();
        };
        prevStatus = data.status;
    });
}
