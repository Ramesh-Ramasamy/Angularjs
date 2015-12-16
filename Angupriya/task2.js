
(function()
{
var content=["ABOUT_US :Infibeam Inc is a leading online retailer in India ","Infibeam_offers cloud based  ecommerce platform service in B2C and B2B verticals and is recognized globally for its innovative approach towards delivering business values and responsive to changing customer needs","Company_believes in empowering every individual and business in the retail value chain by providing affordable technology to solve large scale business problems","Infibeam is a trusted name in retail and technology platform services and a partner of choice for global business.","is","well","Infibeam buildbazzar","display content"];

	var total_count=0;

function count(idd){
	var count_value=0;
	
	return function(){
	document.getElementById("body").setAttribute("class","hide_bg");
	total_count++;
    document.getElementById("contents").innerHTML=content[idd];
	document.getElementById("counter").innerHTML="you clicked this button  "+(++count_value)+" times";
	document.getElementById("total_counter").innerHTML="total count of all buttons clicked: "+total_count;
	if(count_value>10){
			document.getElementById("body").setAttribute("class","show_bg");
	}
	}

}


function create_button(n){

for (var i = 0; i < n; i++) {

var br=document.createElement("br");
	var x=document.createElement("button");
	x.setAttribute("id",i);
	
	document.getElementById("body").setAttribute("class","hide_bg");
	var first=content[i].split(" ",2);
	var text=document.createTextNode(first[0]);
	var wrap=document.getElementById("leftside");
   x.appendChild(text);
   wrap.appendChild(x);
   wrap.appendChild(br);
}}

create_button(content.length);
var but=document.querySelector("#leftside");
var matches=but.querySelectorAll("button");
	for(var i=0;i<matches.length;i++)
	matches[i].addEventListener("click",count(i));

})();
