$(document).ready(function(){
	var Person = function(name, children) {
	    this.name = name;
	    this.children = ko.observableArray(children);
	 
	    this.addChild = function() {
	        this.children.push("New child");
	    }.bind(this);
	}
	 
	var viewModel = {
	    people: [
	        new Person("Annabelle", ["Arnie", "Anders", "Apple"]),
	        new Person("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
	        new Person("Charles", ["Cayenne", "Cleopatra"])
	        ],
	    showRenderTimes: ko.observable(false)
	};
	 
	ko.applyBindings(viewModel, document.getElementById("people"));
});