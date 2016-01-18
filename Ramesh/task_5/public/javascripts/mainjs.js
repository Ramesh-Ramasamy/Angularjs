$(function(){		
	$(".col-3 a").click(function(event){		
		$("#showdetails").load($(this).attr('href')).fadeIn(300);
		$("#showlinks").empty();		
		return false;
	});	
	$("#showdetails").on('click','a',function(e){				
		$("#showlinks").load($(this).attr('href'),function(result){
			if (result == "") {
				$("#showlinks").html('<b>No Comments</b>');
			};			
		});	

		return false;
	});	
	$("section").on('submit','#new_comment',function(e){
	 	var postData = $(this).serializeArray();
    	var formURL = $(this).attr("action");    	
		$.ajax({
			url : formURL,
			type: 'post',	        
	        data: postData,
	        success : function(data){
	        	$("#showlinks").html(data);	        		        	
	        }
		});
		return false;	
	});
});