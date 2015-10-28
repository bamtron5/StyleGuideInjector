//include your component path in include var to load on index.html
$(document).ready(function(){
	var include = [
		'components/0001_componentName_v1.0.0/componentName.html',
		'components/0002_componentName_v1.0.0/componentName.html',
		'components/0003_componentName_v1.0.0/componentName.html',
		'components/0004_renderedKO_v1.0.0/renderedKO.html',
		'components/0005_renderedKO_v1.0.0/renderedKO.html'
	];

	for(var i = 0; i < include.length; i++){
		$('#sg').append('<section></section>');
		$('#sg').find('section').eq(i).load(include[i]);
		console.log("#" + i + " " + include[i] + " loaded.");
	}
});