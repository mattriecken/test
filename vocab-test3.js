var MYLIBRARY = MYLIBRARY || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
        },
        helloWorld : function() {
			let div = document.createElement('div');
			div.classList.add('lk-test');
			let text = document.createTextNode('Hey this is my new paragraph.' + _args[0]);
			div.appendChild(text);
			document.getElementsByClassName('lk-vocab')[0].appendChild(div);
        }
    };
}());