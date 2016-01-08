$(function()
{
	var content=["ABOUT_US :Infibeam Inc is a leading online retailer in India ","Infibeam_offers: cloud based  ecommerce platform service  business values and responsive to changing customer ne"];
	$.each(content,function(index,value){
		$("#leftside").append($(document.createElement("button")).html(value.slice(0,value.indexOf(" "))));
	});
	var count = 0;
	$('button').each(function(item){
		$(this).click(function()
		{
			var localCount=0;
			return function(e)
			{
				var me=$(this);
				me.css("color","blue");
				console.log(item);
				var value=item;//this line shud b replaced..Time complexity shud b o(n)
				$("#contents").text(value);
				$("#counter").text("count value is : "+(++localCount)+" total_count value : "+(++count));
				$("body").attr("class","hide_bg");
				if(localCount>10)
				{
					$("body").attr("class","show_bg");
				}
			}
		}());
	});	
});

	

