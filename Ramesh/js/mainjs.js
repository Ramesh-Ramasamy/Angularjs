var iFrame = document.getElementById("disFrame");
var imgSlide = document.getElementById("imgSlide");
iFrame.addEventListener("click",function(){    	
	document.getElementById("imgSliding").className="dontDisplay";
	document.getElementById("infiFrame").className="disblock";
});
imgSlide.addEventListener("click",function(){    	
	document.getElementById("infiFrame").className="dontDisplay";
	document.getElementById("imgSliding").className="disblock";
});
