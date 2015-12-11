var x = document.getElementsByTagName("section");
function addAEL(idFName,idIName){
	var iFrame = idFName;
	var imgSlide = idIName;
	console.log(idFName,idIName);	
	iFrame.addEventListener("click",function(){    	
		document.getElementById("imgSliding").className="dontDisplay";
		document.getElementById("infiFrame").className="disblock";
	});
	imgSlide.addEventListener("click",function(){    	
		document.getElementById("infiFrame").className="dontDisplay";
		document.getElementById("imgSliding").className="disblock";
	});
}
function multipleSection (x) {
	var i=-1;
	return function(count){		
		for(var j=0;j<count;j++){			
			var buttons = document.querySelectorAll('button');
			buttons[++i].id += i;
			var idFName = document.getElementById(buttons[i].id);
			buttons[++i].id += i;
			var idIName = document.getElementById(buttons[i].id);									
			addAEL (idFName,idIName);
			document.write("<section>");	
			document.write(x[0].innerHTML);
			document.write("</section>");					
		}				
	}
}
var mSection = multipleSection(x);
mSection(5);
