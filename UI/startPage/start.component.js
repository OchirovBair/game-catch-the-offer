import { Settings } from "./settings/settings.component.js";
import { StartButton } from "./startButton/startButton.component.js";

export function StartPage() {
    const container = document.createElement('div');
    container.classList.add('startPage')
    
    const settingsElement = Settings();
    container.append(settingsElement);

    const startButtonElement = StartButton();
    container.append(startButtonElement);

    return container;
}