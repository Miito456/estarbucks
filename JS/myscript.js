function imgSlider(anything){
			document.querySelector('.starbucks').src = anything;
		}
		function changeCircleColor(color){
			const circulo=document.querySelector('.circulo');
			circulo.style.background = color;
		}
		function toggleMenu(){
			var menutoggle = document.querySelector('.toggle');
			var navegador = document.querySelector('.navegador')
			menutoggle.classList.toggle('active')
			navegador.classList.toggle('active')
	
		}


		