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
	var i=-1;
	return function(count){		
		for(var j=0;j<count;j++){			
			var buttons = document.querySelectorAll('button');
			buttons[++i].id = i;
			var idFName = document.getElementById(buttons[i].id);
			buttons[++i].id = i;
			var idIName = document.getElementById(buttons[i].id);									
			addAEL (idFName,idIName);
			var section = document.createElement("section");
			section.innerHTML = secTag[0].innerHTML;
			document.body.appendChild(section);						
		}				
	}
}
var mSection = multipleSection(document.getElementsByTagName("section"));
mSection(5);
