var Test;
(function (Test) {
    var StartUp = /** @class */ (function () {
        function StartUp(b) {
            this.b = b;
            this.a = this.b;
        }
        StartUp.Call = function () {
            console.log("HEJ BRIAN");
        };
        StartUp.Main = function () {
            console.log("HEJ");
            var s = new StartUp(1);
            console.log(s.getA());
            s.callMe(StartUp.Call);
            var o = new MyObservable();
            o.addObserver(new TestObserver());
            o.notifyObservers("BRAIN");
        };
        StartUp.prototype.getA = function () {
            return this.a;
        };
        StartUp.prototype.callMe = function (f) {
            f();
        };
        return StartUp;
    }());
    Test.StartUp = StartUp;
    StartUp.Main();
})(Test || (Test = {}));
