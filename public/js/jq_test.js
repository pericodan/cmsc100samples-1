$(document).ready(function(){
	$("#intro").hide();
	
	$("p.p1").mouseover(function(){
		$("#show_this").fadeIn();
	});
	
	$("p.p1").mouseout(function(){
		$("#show_this").fadeOut();
	});
	/*
	$("p.p1").on({
		"mouseout": function(){$("#show_this").fadeOut();},
		"mouseover": function(){$("#show_this").fadeIn();}
	});
	*/
	
	$(".textbox").keyup(function(){
		a=Number($("#a").val());
		b=Number($("#b").val());
		sum = a+b;
		$("#sum").val(sum);
	});
	
	//$("#newContent").load("index.html");//, function(resp){
		//alert("Content updated!");
	//});
	
	/*$("button[name='get_students']").click(function(){
		$.get("http://localhost:5000/degree-programs/1",
		function(resp){
			console.log(resp)
		});
	});*/
	
	/*$("button[name='get_students']").click(function(){
		$.post("http://localhost:5000/degree-programs",{code:'BSF', name:'BS Forestry'},
		function(resp){
			console.log(resp)
		});
	});*/
	
	$("button[name='reverse']").click(function(){
		$(".names").each(function(){
			if($(this).is(':checked')){
				$(this).prop('checked', false)
			}else{
				$(this).prop('checked', true)
			}
		});
	});
	
	$("button[name='reset']").click(function(){
		$(".names").prop('checked', false);
	});
	
});
