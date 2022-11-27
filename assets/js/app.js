//  documento listo para usar
$(document).ready(function () {
	console.log("ready!");

	//show text cards

	$("#destacados1").click(function () {
		$("#disabletexto1").toggle();
	});

	$("#destacados2").click(function () {
		$("#disabletexto2").toggle();
	});

	$("#destacados3").click(function () {
		$("#disabletexto3").toggle();
	});

	$("#destacados4").click(function () {
		$("#disabletexto4").toggle();
	});

	// Cartas desabilitadas al cargar pagina

	$(".card-text1, .card-text2, .card-text3, .card-text4").css(
		"display",
		"none"
	);

	//cambio de color al pasar cursor por encima del icono

	$("#icono1").hover(
		function () {
			$("#icono1").css("color", "#000000");
		},
		function () {
			$("#icono1").css("color", "#C3C3C3");
		}
	);
	$("#icono2").hover(
		function () {
			$("#icono2").css("color", "#000000");
		},
		function () {
			$("#icono2").css("color", "#C3C3C3");
		}
	);

	$("#icono3").hover(
		function () {
			$("#icono3").css("color", "#000000");
		},
		function () {
			$("#icono3").css("color", "#C3C3C3");
		}
	);
	$("#icono4").hover(
		function () {
			$("#icono4").css("color", "#000000");
		},
		function () {
			$("#icono4").css("color", "#C3C3C3");
		}
	);

	//trigger y var para tooltip.

	var tooltipTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="tooltip"]')
	);
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	var myModal = document.getElementById("myModal");
	var myInput = document.getElementById("myInput");

	myModal.addEventListener("shown.bs.modal", function () {
		myInput.focus();
	});
});
