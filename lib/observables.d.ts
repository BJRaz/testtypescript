declare interface IObserver {
    update(sender : object, data: object): void;
}

declare class Observable {
    observers: Array<IObserver>;
    addObserver(observer: IObserver);
    removeObserver(observer: IObserver);
    notifyObservers(argsobj: any);
}