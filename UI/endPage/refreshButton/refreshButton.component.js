export function RefreshButton() {
    const container = document.createElement('button');
    container.classList.add('refreshButton');

    container.innerText = 'Restart Game';
    // container.addEventListener('click', );

    return container;
}