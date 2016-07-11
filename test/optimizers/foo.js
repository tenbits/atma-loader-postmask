module.exports = function(mask) {

	mask.registerOptimizer('Foo', function(node, next){
		mask.jmask(node).find('h4').tag('h5');
		next({ deep: false });
	});
};