(function(){
	
	var cssId = 'myCss';  // you could encode the css path itself to generate id..
	if (!document.getElementById(cssId))
	{
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = cssId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'https://cdn.statically.io/gh/mattriecken/test/main/style-test.css';
	    link.media = 'all';
	    head.appendChild(link);
	}
	
	
}());

