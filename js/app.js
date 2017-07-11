$(document).ready(function(){

	$(".cssload-container").hide(); // hiding loader initially

	var myToken = "EAACEdEose0cBAAuYIgHdc6JOIfYk87uCa6WnzwQaC3UJF7ICZAFA6ixO5hG1MZCGwrubY3lZA2Kx6maDZAGDikruD4OEaZBeLIqsCMZBuZCcFeOBQeF6vFvJzn08OuhjuIbc9LvfsDqwuDIZCuQjcobogK7BBxEt2Jf2MlYHFhWLTPyWGy8kZCc88n49BiYgWiLMZD";

	$("#basicInfoTab").on('click' , function(){

		
			$.ajax( {

				url : "https://graph.facebook.com/me?access_token=" + myToken ,

				method : "GET" ,

				success : function (response) {

					$('#profileData').css ("background-color" , "#e9ebee");

					$("#basicInfo-data").show(); 

				
					$('#name1').text("Full Name");
					$('#val1').text(response.name);
					
					if(response.birthday !== null && response.birthday !== undefined){
						$('#name2').text("D.O.B");
						$('#val2').text(response.birthday);
					}

					if(response.email !== null && response.email !== undefined){
						$('#name3').text("Email");
						$('#val3').text(response.email);
					}

					if(response.gender !== null && response.gender !== undefined){
						$('#name4').text("Gender");
						$('#val4').text(response.gender);
					}	
					
					if(response.location.name !== null && response.location.name !== undefined){
						$('#name5').text("Location");
						$('#val5').text(response.location.name);
					}

					if(response.relationship_status !== null && response.relationship_status !== undefined){
						$('#name6').text("Relationship Status");
						$('#val6').text(response.relationship_status);
					}

					if(response.political !== null && response.political !== undefined){
						$('#name7').text("Political Views");
						$('#val7').text(response.political);

					}
					
					if(response.religion !== null && response.religion !== undefined){
						$('#name8').text("Religion");
						$('#val8').text(response.religion);
					}
					
					if(response.languages !== null && response.languages !== undefined){
						$('#name9').text("Languages");

						for(var index=0 ; index < (response.languages).length ; index++ )
						$('#val9').text( response.languages[index].name );
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
						
						if(response.education[i].school.name !== null && response.education[i].school.name !== undefined)
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

					$('#profileData').css("background-color" , "#e9ebee");

					$("#fav-data").show();

					var atheletsPos =0;
					
					// Printing favourite atheletes
					$('#name11').text("TOP FAVOURITE ATHELETES");
					
					for(var i in response.favorite_athletes ){

						( response.favorite_athletes[i].name !== undefined && response.favorite_athletes[i].name !== null)
						{
							$('#val1' + (atheletsPos+6)).text(response.favorite_athletes[i].name);
							atheletsPos++;
						}

											
					} // end of loop

					// to print favourite teams
					var teamPos = 0;

					$('#name12').text("TOP  FAVOURITE TEAMS");
					
					for(var x in response.favorite_teams){

						if( response.favorite_teams[x].name !== null && response.favorite_teams[x].name !== undefined )
						 {	$('#val2' + (teamPos+1)).text(response.favorite_teams[x].name);
							teamPos++;
							}
						
					}// end of loop
					
										
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

					if(element[i].story !== null && element[i].story !== undefined){
						$("#story"+ i).text(element[i].story);
						$("#story"+i).css("font-weight" , "700");
					}
					
					if(element[i].created_time !== null && element[i].created_time !== undefined)
						$("#time"+i).text(element[i].created_time);

					if(element[i].message !== null && element[i].message !== undefined)
						$("#msg"+i).text(element[i].message);

					if(element[i].description !== null && element[i].description !== undefined){
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

function favTeam(){


}