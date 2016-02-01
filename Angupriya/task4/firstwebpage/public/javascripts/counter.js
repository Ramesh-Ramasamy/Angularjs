$(document).ready(function(){
	$("a").click(function(event){
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
	
	$("body").on('submit',"#new_comment",function(e)
	{
		var formdata=$(this).serializeArray();
		var pageurl=$(this).attr("action");
		$("#comment").empty();
		$.ajax(
			{
			url : pageurl,
			type : 'post',
			data  : formdata,
			success :function(data){
				$("#feedback").html(data);
			}
		});
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




$("body").on('submit',"form",function(e)
	{
		var formdata=$(this).serializeArray();
		var pageurl=$(this).attr("action");
		$.ajax(
			{
			url : pageurl,
			type : 'post',
			data  : formdata,
			success :function(data){
				$('#feedback').empty();
				$("#contents").empty();
				$("#comment").html(data);
			}
		});
		return false;
	});



});



