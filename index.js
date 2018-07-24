$(document).ready(()=>{

	$("#content1").show();
	$("#content2").hide();
	$("#content3").hide();
	$("#content4").hide();

	$("#title1").click(() =>{

		$("#content1").toggle();
	})

	$("#title2").click(() =>{

		$("#content2").toggle();
	})

	$("#title3").click(() =>{

		$("#content3").toggle();
	})

	$("#title4").click(() =>{

		$("#content4").toggle();
	})

	$(".nav-item-toggle").click(() =>{

		$(".nav-menu").toggle();
	})

	$("#modal").hide();

	$("#button").click(() =>{
		$("#modal").show();
	})

	$("#close").click(() =>{
		$("#modal").hide("100");
	})

});

