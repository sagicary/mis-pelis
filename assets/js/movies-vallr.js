$(document).ready(function(){

	$("#parameter").change(function(){
		if(($("#parameter").val())==1){
			var req = new XMLHttpRequest();
			var URL = "https://netflixroulette.net/api/api.php?";
			var queryType = "title=";
			var director = $("#search").val();
			req.open('GET', URL + queryType + director, true);
			req.addEventListener("load", function() {
				var response = JSON.parse(req.responseText);
				console.log(response.show_title);
				console.log(response.release_year);
				console.log(response.category);
				console.log(response.runtime);
				console.log(response.director);
				$("#movie-area").append(`
					<div class="col s12">
						<div class="col s9">

							<a href="details.html" class="name">`+ response.show_title +`<span class="year"> ` + response.release_year + ` | `+ response.category +`</span></a>

							<p class="name">`+ response.show_title +`<span class="year"> ` + response.release_year + ` | `+ response.category +`</span></p>

							<p class="rojo"><span><i class="icon material-icons">schedule</i></span> `+ response.release_year +` <span><i class="icon material-icons">tv</i></span> `+ response.director +`</p>
						</div>
						<div class="col s3">
							<a id="fav" class="btn btn-small">Add Favorites</a>
							<p id="rating">3/5</p>							
						</div>
					</div>
					`)				
			});
			req.send(null);
			//la búsqueda por título no lleva filtro por catergoría, porque sólo lanza un sólo resultdo
		}
		else if(($("#parameter").val())==2){
			var req = new XMLHttpRequest();
			var URL = "https://netflixroulette.net/api/api.php?";
			var queryType = "actor=";
			var director = $("#search").val();
			req.open('GET', URL + queryType + director, true);
			req.addEventListener("load", function() {
				var response = JSON.parse(req.responseText);
				console.log(response);
				response.forEach(function(ele){
					console.log(ele);
					var title = ele.show_title;
					var year = ele.release_year;
					var category = ele.category;
					var duration = ele.runtime;
					var director = ele.director;
					$("#movie-area").append(`
						<div class="col s12">
							<div class="col s9">
								<p class="name">`+ title +`<span class="year"> ` + year + ` | `+ category +`</span></p>
								<p class="rojo"><span><i class="icon material-icons">schedule</i></span> `+ duration +` <span><i class="icon material-icons">tv</i></span> `+ director +`</p>
							</div>
							<div class="col s3">
								<a id="fav" class="btn btn-small">Add Favorites</a>
								<p id="rating">3/5</p>
							</div>
						</div>

					`)			
				});	
			});
			req.send(null);
			console.log($("#search").val())
			$("#search").val("");
			$("#category-field").removeClass("hide");
		}
		else if(($("#parameter").val())==3){			
			var req = new XMLHttpRequest();
			var URL = "https://netflixroulette.net/api/api.php?";
			var queryType = "director=";
			var director = $("#search").val();
			req.open('GET', URL + queryType + director, true);
			req.addEventListener("load", function() {
				var response = JSON.parse(req.responseText);
				console.log(response);
				response.forEach(function(ele){
					console.log(ele);
					var title = ele.show_title;
					var year = ele.release_year;
					var category = ele.category;
					var duration = ele.runtime;
					var director = ele.director;
					$("#movie-area").append(`
						<div class="col s12">
							<div class="col s9">
								<p class="name">`+ title +`<span class="year"> ` + year + ` | `+ category +`</span></p>
								<p class="rojo"><span><i class="icon material-icons">schedule</i></span> `+ duration +` <span><i class="icon material-icons">tv</i></span> `+ director +`</p>
							</div>
							<div class="col s3">
								<a id="fav" class="btn btn-small">Add Favorites</a>
								<p id="rating">3/5</p>												
							</div>
						</div>
					`)
				});	
			});
			req.send(null);
			$("#category-field").removeClass("hide");
		}
	});

	$("#category").change(function(){
		function filter(){
			for(var i=0; i<($(".movie")).length; i++){
				if((($(".movie"))[i]).hasClass($("#category").val())){
					console.log("it works kinda")
				}
			}
		}
	})
});