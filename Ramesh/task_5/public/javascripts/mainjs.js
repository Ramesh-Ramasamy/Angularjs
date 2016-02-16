$(function(){		
	$("#showcontinent").hide();
	$("#country_type_withcontinent").click(function(){
		$("#showcontinent").show();
	});
	$("#country_type_withoutcontinent").click(function(){
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
