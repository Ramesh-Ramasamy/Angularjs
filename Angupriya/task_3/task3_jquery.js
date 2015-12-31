$(function()
{
	var total_count=0;
	var content=["ABOUT_US :Infibeam Inc is a leading online retailer in India ","Infibeam_offers cloud based  ecommerce platform service in B2C and B2B verticals and is recognized globally for its innovative approach towards delivering business values and responsive to changing customer needs","Company_believes in empowering every individual and business in the retail value chain by providing affordable technology to solve large scale business problems","Infibeam is a trusted name in retail and technology platform services and a partner of choice for global business.","is","well","Infibeam buildbazzar","display content"];
	$.each(content,function(index,value)
	{   
		var count=0;
		$("#leftside").append($(document.createElement("button")).html(value.slice(0,value.indexOf(" "))).attr("id",index));
		$("#"+index).click(function()
		{	
			$("body").attr("class","hide_bg");
			$("#contents").text(value);
			$("#counter").text("count value is : "+(++count)+" total_count value : "+(++total_count));
			if(count>10)
				$("body").attr("class","show_bg");
		});
	});
});
