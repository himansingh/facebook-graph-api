$(document).ready(function(){

	$(".cssload-container").hide(); // hiding loader initially

	var myToken = "EAACEdEose0cBAJrLCRI8lYgHWmDpNpYxD7PJ5QsASKoi1jui2TVzhmm7kP6juo10F6q9kW1YXOHVZBGnqHMwA9PgsEZBcDLCKUTdlCq6tPAsHK0p8knRYgJx3YxrsCpm7HlEpK6yW5k5HO4fqrFMjoVA1bpQZBC38sGLdB9JtY4In945P7zBnUAyzUJayMZD";

	$("#basicInfoTab").on('click' , function(){

		
			$.ajax( {

				url : "https://graph.facebook.com/me?access_token=" + myToken ,

				method : "GET" ,

				success : function (response) {

					console.log(response) ;

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

					if(response.location !== null && response.location !== undefined){
					
					if(response.location.name !== null && response.location.name !== undefined){
						$('#name5').text("Location");
						$('#val5').text(response.location.name);
					}
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

						var lang = ""; 
						for(var index=0 ; index < (response.languages).length ; index++ ){

							lang += response.languages[index].name + " " ;

						}
						$('#val9').text( lang );
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

						
					}					
					
										
				}, // end of success function

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

						if ( response.favorite_athletes[i].name !== undefined && response.favorite_athletes[i].name !== null)
						{
							$('#val' + (atheletsPos+16)).text(response.favorite_athletes[i].name);
							atheletsPos++;

							if(atheletsPos === 5)
								break ;
						}

											
					} // end of loop

					// to print favourite teams
					var teamPos = 0;

					$('#name12').text("TOP  FAVOURITE TEAMS");
					
					for(var x in response.favorite_teams){

						if( response.favorite_teams[x].name !== null && response.favorite_teams[x].name !== undefined )
						 {	$('#val' + (teamPos+21)).text(response.favorite_teams[x].name);
							teamPos++;

							if(teamPos === 5)
								break;
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

var fun =	$("#loadFeed"). click(function(){

		$.ajax( {

			url : "https://graph.facebook.com/me?fields=posts&access_token=" + myToken ,

			method : "GET" ,

			success : function (response) {

				$('#feed-data').css ("background-color" , "#e9ebee");

				element = response.posts.data ;
				for(var i=0 ; i < 10 ; i++){

					var storyId = "story"+i ;
					var msgId = "msg"+i ;
					var timeId = "time"+i ;
					var descriptionId = "description"+i ;
					console.log(storyId);

					var stories = '<div class="col-xs-12" id ='+storyId+'>  </div>' ;
					var times = '<div class="col-xs-12 " id=' +timeId+'>  </div>' ;
					var msgs = '<div class="col-xs-12 " id='+msgId+'>  </div>' ;
					var descriptions = '<div class="col-xs-12 " id='+descriptionId+' >  </div>' ;
					var horizontalRule = "<hr>" ;

					$("#feed-data-container").append(stories);
					$("#feed-data-container").append(times);
					$("#feed-data-container").append(msgs);
					$("#feed-data-container").append(descriptions);

					$("#"+storyId).text(element[i].story);
					$("#"+storyId).css("font-weight", "700");

					$("#"+timeId).text(element[i].created_time);
					$("#"+msgId).text(element[i].message);
					$("#"+descriptionId).text(element[i].description);
					$("#"+descriptionId).css("font-style" , "italic");

					$("#"+descriptionId).append(horizontalRule);

				}	// end of loop

								
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

