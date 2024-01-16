let subscribers = [];

export function subscribe(newSubscriber) {
    subscribers.push(newSubscriber);
}

export function notify() {
    subscribers.forEach(subscriber => {
        subscriber()
    });

};
