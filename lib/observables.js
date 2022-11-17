/**
*	TO USE IN OBSERVER PATTERNS 
*	Usage: 
*
*	<Someclass>.prototype = new Observable();
*	<Someclass>.prototype = new Observer();
**/


function Observer() {
	this.update = function(sender) {
		// IMPLEMENT
	}			
}	

/*
	Observable 
	Abstract
	
*/
function Observable() {
	this.observers = null; 		// must be instantiated in subclass
			
	this.addObserver = function(obj) {		
		try {		
			this.observers[this.observers.length] = obj;	
		} catch(e) {
			alert("Must derive this.observers");	
		} 
	}	
	
	this.removeObserver = function(obj) {
		try {
			for(i in this.observers) {
				if(this.observers[i] == obj) {
					this.observers.splice(i, 1);							
				}
			}	
		} catch(e) {
			alert("Must derive this.observers");
		}
	}
	
	this.notifyObservers = function(argsobj) {
		for(i in this.observers) {
		try{
			this.observers[i].update(this, argsobj);	
			}catch(e) {
                console.log("ERROR notifing: " + e.message);
            }
		}
	}
}

/*
	GuideObservable 
	Abstract
	
*/
function GuideObservable() {
	
	/**
	*	Observer Pattern - specialiseret til GuideEvents
	*/	
	this.observers = null; 		// must be instantiated in subclass
	
		
	this.addGuideEventObserver = function(obj) {		
		try {		
			this.observers[this.observers.length] = obj;	
		} catch(e) { alert("Add GuideEventObserver failed"); } 
	}	
	
	this.removeGuideEventObserver = function(obj) {
		try {
			for(i in this.observers) {
				if(this.observers[i] == obj) {
					this.observers.splice(i, 1);							
				}
			}	
		} catch(e) { alert("Remove GuideEventObserver failed"); }
	}
	
	this.notifyObservers = function(guideeventobj) {
		for(i in this.observers) {
			try{
				this.observers[i].guideUpdated(this, guideeventobj);	
			}catch(e) { alert("Notify GuideEventObservers failed: " + e.message); }
		}
	}
}

/*
	ControllerObservable 
	Abstract
	
*/
function ControllerObservable() {
	
	/**
	*	Observer Pattern - specialiseret til Controller-Events
	*/	
	this.controllerobservers = null; 		// must be instantiated in subclass
	
		
	this.addControllerObserver = function(obj) {		
		try {		
			this.controllerobservers[this.controllerobservers.length] = obj;	
		} catch(e) { alert("Add ControllerObserver failed"); } 
	}	
	
	this.removeControllerObserver = function(obj) {
		try {
			for(i in this.controllerobservers) {
				if(this.controllerobservers[i] == obj) {
					this.controllerobservers.splice(i, 1);							
				}
			}	
		} catch(e) { alert("Remove ControllerObserver failed"); }
	}
	
	this.notifyControllerObservers = function(controllereventobj) {
		for(i in this.controllerobservers) {
			try{
				this.controllerobservers[i].controllerUpdated(this, controllereventobj);	
			}catch(e) { alert("Notify ControllerObservers failed: " + e.message); }
		}
	}
}
