$(document).ready(function(){

	$(".cssload-container").hide();

	var myToken = "EAACEdEose0cBAG7lGydxvEHnZCqiqoUMLFDuonqtY8Cisp3MDSmEFO5pc01xas1oBbiLlNBoiLxeuWb9yfZAEHzUr3UpXVPHBtW5RZCk2a0yN9NWAAMZCnJwh9ofW7aUE7LNWtwzZAMw3siYp4EWLZAhZBYFS8h7daAWBbP78vKniGNcCAbST8epNlcNOnuZA6QZD";

	$("#basicInfoTab").on('click' , function(){

		
			$.ajax( {

				url : "https://graph.facebook.com/me?access_token=" + myToken ,

				method : "GET" ,

				success : function (response) {

					$('#profileData').css ("background-color" , "#e9ebee");

					$("#basicInfo-data").show();

					$('#name1').text("Full Name");
					$('#val1').text(response.name);
					
					$('#name2').text("D.O.B");
					$('#val2').text(response.birthday);
					
					$('#name3').text("Email");
					$('#val3').text(response.email);
					
					$('#name4').text("Gender");
					$('#val4').text(response.gender);
					
					$('#name5').text("Location");
					$('#val5').text(response.location.name);
					
					$('#name6').text("Relationship Status");
					$('#val6').text(response.relationship_status);
					
					if(response.political !== null || response.political !== undefined){
						$('#name7').text("Political Views");
						$('#val7').text(response.political);

					}
					
					if(response.religion !== null || response.religion !== undefined){
						$('#name8').text("Religion");
						$('#val8').text(response.religion);
					}
					
					if(response.political !== null || response.political !== undefined){
						$('#name9').text("Languages");
						$('#val9').text( response.languages[0].name + " , " + response.languages[1].name);
					}	
					
				},

				error : function ( request ,errType , errMessage) {
					alert ( errMessage + "\n Check Console and try again") ;
					console.log (errType) ;
					console.log(request) ;

				} ,

				timeout : 4000 ,

				complete : function  () {

					$(".cssload-container").hide();
				} ,

				beforeSend : function () {

					$("#edu-data").hide();
					$("#fav-data").hide();

					$(".cssload-container").show();
				}

				}) ;// end of ajax call



		
	}); // end of basicinfo tab function

	$("#eduTab").on('click' , function(){

		
			$.ajax( {

				url : "https://graph.facebook.com/me?access_token=" + myToken ,

				method : "GET" ,

				success : function (response) {

					$('#profileData').css ("background-color" , "#e9ebee");

					$("#edu-data").show();
					
					$('#name10').text("EDUCATIONAL DETAILS");
					
					for(var i in response.education){
						
						if(response.education[i].school.name !== null || response.education[i].school.name !== undefined)
						$('#val1' +i).text(response.education[i].school.name);

						else {
							alert(" Data not found");
							break ;
						}

					}
					
										
				},

				error : function ( request ,errType , errMessage) {
					alert ( errMessage + "\n Check Console and try again") ;
					console.log (errType) ;
					console.log(request) ;

				} ,

				timeout : 4000 ,

				complete : function  () {

					$(".cssload-container").hide();
				} ,

				beforeSend : function () {

					$(".cssload-container").show();

					$("#basicInfo-data").hide();
					$("#fav-data").hide();
					
				}

				}) ;// end of ajax call


		
		
	}); // end of edu tab function


		$("#favTab").on('click' , function(){

		
			$.ajax( {

				url : "https://graph.facebook.com/me?access_token=" + myToken ,

				method : "GET" ,

				success : function (response) {

					$('#profileData').css ("background-color" , "#e9ebee");

					$("#fav-data").show();
					
					$('#name11').text("TOP 5 FAVOURITE ATHELETES");
					
					for(var i=0 ;i<6 ; i++ ){

						
						if( response.favorite_athletes[i].name !== null || response.favorite_athletes[i].name !== undefined)
						{
							$('#val1' + (i+6)).text(response.favorite_athletes[i].name);
							
						}

						else{

							alert("Data not found!!");
							break;
						}

					
					} // end of loop

					

					$('#name12').text("TOP 5 FAVOURITE TEAMS");
					
					for(var i=0 ;i<6 ; i++ ){

						if( response.favorite_teams[i].name !== null || response.favorite_teams[i].name !== undefined )
						$('#val2' + (i+1)).text(response.favorite_teams[i].name);

						else{

							alert("Data not found!!");
							break;
						}

					}
					
										
				},

				error : function ( request ,errType , errMessage) {
					alert ( errMessage + "\n Check Console and try again") ;
					console.log (errType) ;
					console.log(request) ;

				} ,

				timeout : 4000 ,

				complete : function  () {

					$(".cssload-container").hide();
				} ,

				beforeSend : function () {

					$(".cssload-container").show();

					$("#basicInfo-data").hide();
					$("#edu-data").hide();
				}

				}) ;// end of ajax call


		
		
	}); // end of favourites tab function




	// Start of feed tab function

		$("#loadFeed"). click(function(){

		$.ajax( {

			url : "https://graph.facebook.com/me?fields=posts&access_token=" + myToken ,

			method : "GET" ,

			success : function (response) {

				$('#feed-data').css ("background-color" , "#e9ebee");


				for( var i=0; i<10 ; i++) {

					var element=(response.posts.data);

					if(element[i].story !== null || element[i].story !== undefined){
						$("#story"+ i).text(element[i].story);
						$("#story"+i).css("font-weight" , "700");
					}
					
					if(element[i].created_time !== null || element[i].created_time !== undefined)
						$("#time"+i).text(element[i].created_time);

					if(element[i].message !== null || element[i].message !== undefined)
						$("#msg"+i).text(element[i].message);

					if(element[i].description !== null || element[i].description !== undefined){
						$("#description"+i).text(element[i].description);
						$("#description"+i).css("font-style" , "italic");

					}
						
						$("#description" +i).append('<hr>') ;
					
										
				} // end of loop	

								
			}, // end of success function

			error : function ( request ,errType , errMessage) {
				alert ( errMessage + " \n Check console and try again") ;
				console.log (errType) ;
				console.log(request) ;

			} ,

			timeout : 40000 ,

			complete : function  () {

				$(".cssload-container").hide();
			} ,

			beforeSend : function () {

				$(".cssload-container").show();
			}

			}) ;// end of ajax call
	}); // end of feed tab function


}); // end of document