namespace Test
{
    export class StartUp
    {
        protected a = this.b;
       
        constructor(private b){

        }

        public static Call() : void {
            console.log("HEJ BRIAN");
        }

        public static Main() : void {
            console.log("HEJ");
            var s = new StartUp(1);
            console.log(s.getA());

            s.callMe(StartUp.Call);

            var o = new MyObservable();
            o.addObserver(new TestObserver());

            o.notifyObservers("BRAIN");


        }

        getA() : any {
            return this.a;
        }

        callMe(f: () => void){
            f();       
        }

    }

    StartUp.Main();


}