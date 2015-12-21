$(function(){
	var country = ["India","America","Australia","china","Japan"];
	var total_count = 0;	
	$.each(country,function(index,item){		
		$("#buttons").append($(document.createElement("button")).text(item).attr('id',index));										
		var count = 0;		
		$("button[id="+index+"]").click(function(){			
			$("#show").text(item+"-"+(++count)+"-Total Count-"+(++total_count)).fadeOut(100).fadeIn(100);	
		});		
	});	
});