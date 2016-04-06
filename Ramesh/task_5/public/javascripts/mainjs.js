$(function(){
	
	$("body").on("click","#country_type_withcontinent",function(){
		
		$("#showcontinent").show();
	});
	$("body").on("click","#country_type_withoutcontinent",function(){
		$("#showcontinent").hide();
	});
	$("a[href='/withcontinents']").click(function(){				
		$("#withoutcontinent").empty();		
		$("#withcontinent").load($(this).attr('href'));
		$("#withcontinent").addClass("show");
		return false;
	});
	$("a[href='/withoutcontinents']").click(function(){
		$("#withcontinent").empty();
		$("#withoutcontinent").load($(this).attr('href'));
		$("#withoutcontinent").addClass("show");
		return false;
	});
});
