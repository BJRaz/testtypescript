var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
angular.module("app", []);
console.log("App started");
var TestObserver = /** @class */ (function () {
    function TestObserver() {
    }
    TestObserver.prototype.update = function (sender, data) {
        console.log(sender + " " + data);
    };
    return TestObserver;
}());
var MyObservable = /** @class */ (function (_super) {
    __extends(MyObservable, _super);
    function MyObservable() {
        var _this = _super.call(this) || this;
        _this.observers = new Array();
        return _this;
    }
    return MyObservable;
}(Observable));
