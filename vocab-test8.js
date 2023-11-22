window.onload = function(){
	
	let vocabContainers = document.getElementsByClassName('lk-vocab');
	for(let i = 0; i < vocabContainers.length; i++) {
		vocabContainers[i].style.padding = "25px";
		vocabContainers[i].style.borderRadius = "4px";
		vocabContainers[i].style.background = "lightblue";
		vocabContainers[i].children[0].style.fontWeight = "700";
		vocabContainers[i].children[1].style.fontSize = ".5em";
	}
};
