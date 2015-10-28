$(document).ready(function(){
	var viewModel = function(vm){
		var self = this;
		self.viewModel = vm;

		$.extend(self.viewModel, {
			showLastName:ko.observable(true),
			clickLastName: function(){console.log('not cool'); return true;}
		});
	};

	vm = new viewModel(viewModel0005);


	ko.applyBindings(vm, document.getElementById("people0005"));
});