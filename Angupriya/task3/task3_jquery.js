$(function()
{
	
	var total_count=0;
	var content=["abc def","cde","hgsd","jhsd","shd"];
	$.each(content,function(index,value)
	{   
		var count=0;
		$("#leftside").append($(document.createElement("button")).html(value).attr("id",index));
		$("#"+index).click(function()
		{

			$("#contents").empty();

			$("#contents").append("count value is : "+(++count)+"  total_count value : "+(++total_count)+"test value: "+test);

		});

	});
});
