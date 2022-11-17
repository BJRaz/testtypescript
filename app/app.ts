

angular.module("app", []);

console.log("App started");



class TestObserver implements IObserver
{
    update(sender: object, data: object): void {
        console.log(sender + " " + data);
    }
}

class MyObservable extends Observable {
    constructor() {
        super();
        this.observers = new Array<IObserver>();
    }
}