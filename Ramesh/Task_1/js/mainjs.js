function addAEL(idFName,idIName){
	var iFrame = idFName;
	var imgSlide = idIName;	
	iFrame.addEventListener("click",function(){    	
		document.getElementById("imgSliding").className="dontDisplay";
		document.getElementById("infiFrame").className="disblock";
	});
	imgSlide.addEventListener("click",function(){    	
		document.getElementById("infiFrame").className="dontDisplay";
		document.getElementById("imgSliding").className="disblock";
	});
}
function multipleSection (secTag) {
	var i = 0;
	addAEL (document.getElementById(document.querySelectorAll('button')[i].id),
				document.getElementById(document.querySelectorAll('button')[i+1].id));
	return function(count){		
		for(var j=0;j<count;j++){
			var section = document.createElement("section");
			section.innerHTML = secTag[0].innerHTML;
			document.body.appendChild(section);					
			var buttons = document.querySelectorAll('button');
			buttons[(++i)+1].id = i;
			var idFName = document.getElementById(buttons[i+1].id);
			buttons[(++i)+1].id = i;
			var idIName = document.getElementById(buttons[i+1].id);									
			addAEL (idFName,idIName);						
		}				
	}
}
var mSection = multipleSection(document.getElementsByTagName("section"));
mSection(5);


/*var messages = ["hi how are you", "a","b"]
create_nav(messages)*/