var MYLIBRARY = MYLIBRARY || (function(){
	
	let vocabContainers = document.getElementsByClassName('lk-vocab');
	for(let i = 0; i < vocabContainers.length; i++) {
		vocabContainers[i].style.padding = "25px";
		vocabContainers[i].style.borderRadius = "4px";
		vocabContainers[i].style.background = "lightblue";
		vocabContainers[i].children[0].style.fontWeight = "700";
		vocabContainers[i].children[1].style.fontSize = ".5em";
	}
	
	
    // var _args = {}; // private
//
//     return {
//         init : function(Args) {
//             _args = Args;
//             // some other initialising
//         },
//         (function() {
// 			let vocabContainers = document.getElementsByClassName('lk-vocab');
// 			for(const vocabContainer in vocabContainers) {
// 				vocabContainer.style.padding = "25px";
// 				vocabContainer.style.borderRadius = "4px";
// 				vocabContainer.style.background = "lightblue";
// 				vocabContainer.children[0].style.fontWeight = "700";
// 				vocabContainer.children[1].style.fontSize = ".5em";
// 			}
//         })();
//     };
}());
