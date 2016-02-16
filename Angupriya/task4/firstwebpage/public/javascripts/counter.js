
	$(function(){
	$("a[href!='/application/logout']").click(function(event){
		
		$("#contents").load($(this).attr('href'));
		$("#feedback").empty();
		$("#comment").empty();
		return false;
	});
	$("#contents").on('click',"a",function(e){
		$("#comment").load($(this).attr('href'));
		$("#feedback").empty();
		return false;
	});

	$("#comment").on('click',"a",function(e){
		$("#comment").load($(this).attr('href'));
		return false;
	});

	
	$(".linktype1").hover(function()
	{
		$("#withtitle").show();
	},function(){
		$("#withtitle").hide();
	});

	$(".linktype2").hover(function()
	{
		$("#withouttitle").show();
	},function(){
		$("#withouttitle").hide();
	});




});

	
