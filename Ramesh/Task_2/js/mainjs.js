(function(){
	var country = ["India","America","Australia","china","Japan"];
	for(var i=0;i<country.length;i++){
		var parent = document.getElementById("buttons");
		var button = document.createElement("button");
		button.innerHTML = country[i];
		parent.appendChild(button);
		button.addEventListener("click",show_me(i));
		var br_tag = document.createElement("br")
		parent.appendChild(br_tag);
	}
	function show_me(i){
		var count=0;
		return function(){
			document.getElementById("show").innerHTML = country[i]+"-"+(++count);
		}
	}
})();