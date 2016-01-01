$(function()
{
	var content=["ABOUT_US :Infibeam Inc is a leading online retailer in India ","Infibeam_offers cloud based  ecommerce platform service in B2C and B2B verticals and is recognized globally for its innovative approach towards delivering business values and responsive to changing customer needs","Company_believes in empowering every individual and business in the retail value chain by providing affordable technology to solve large scale business problems","Infibeam is a trusted name in retail and technology platform services and a partner of choice for global business.","is","well","Infibeam buildbazzar","display content"];
	
	$.each(content,function(index,value){
		$("#leftside").append($(document.createElement("button")).html(value.slice(0,value.indexOf(" "))));
	});
		var count = 0;

		$('button').click(function(e) {
			var me = $(this);
			var localCount = me.data('count') || 1;
			var value = content[$('button').index(me)];
			$(this).css("color","blue");
			$("body").attr("class","hide_bg");
			$("#contents").text(value);
			$("#counter").text("count value is : "+(localCount)+" total_count value : "+(++count));
			if(localCount>10){
				$("body").attr("class","show_bg");
			}
			localCount = localCount + 1;
			
			me.data('count', localCount)
		});
});

