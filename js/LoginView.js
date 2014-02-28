var LoginView = function() {
	this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('submit', '#loginForm', this.verifyLogin);
        //$("#loginForm").on("submit", this.login);
        // this.loginButton = $('#loginButton');
        // this.loginButton.('keyup', '.search-key', this.login);
    };

    this.render = function() {
    	this.el.html(LoginView.template());
    	return this;
    };

    this.verifyLogin = function() {
    	var username = $('#username');
		var password = $('#password');
		var password_md5 = hex_md5(password.val());
		//console.log(username);
		if(username.val() != '' && password.val() != ''){
			$.ajax({
				type: "POST",
				url: 'http://kundenrat.gmaare.migros.ch/migros/mobile/server/user_login.php',
				async: true,
				beforeSend: function(x) {
					//alert(username.val());
				},
				dataType: "json",
				data: { username: username.val(), password: password_md5},
				success: function(res){
					if(res.status == 'ok'){
		    			//$('#loginPage').live('pageshow', function(event){
			                //$.mobile.changePage($("#homePage"));
			            //});
		    			
		    			//$('#user_data').html('<h2>Welcome, '+res.user.name+'!</h2>');
		    			//$.mobile.changePage("#homePage");
		    			if (navigator.notification) {
					        navigator.notification.alert('Welcome, '+res.user.name+'!', null, 'Welcome', 'OK');
					    } else {
					        alert('Welcome, '+res.user.name+'!');
					    }
		    			//alert('Welcome, '+res.user.name+'!');
		    		}else{
		    			alert("Login failed");
		    		}
				}
			});


			//console.log('try to login! - pass: '+password.val());
			/*$.getJSON('http://kundenrat.gmaare.migros.ch/migros/mobile/user_login.php?callback=?','username='+username.val()+'&password='+password_md5,function(res){
	    		console.log(res.status);
	    		if(res.status == 'ok'){
	    			//$('#loginPage').live('pageshow', function(event){
		                //$.mobile.changePage($("#homePage"));
		            //});
	    			
	    			//$('#user_data').html('<h2>Welcome, '+res.user.name+'!</h2>');
	    			//$.mobile.changePage("#homePage");
	    			if (navigator.notification) {
				        navigator.notification.alert('Welcome, '+res.user.name+'!', null, 'Welcome', 'OK');
				    } else {
				        alert('Welcome, '+res.user.name+'!');
				    }
	    			//alert('Welcome, '+res.user.name+'!');
	    		}else{
	    			alert("Login failed");
	    		}
			})
			.fail(function() {
				console.log( "error" );
			});*/
			/*$.ajax({
				type:"GET",
				url:"http://upsidecorp.net.ve/user_login.php?callback=?",
				dataType: "jsonp",
				contentType: "application/json; charset=utf-8",
				//headers : {Accept : "application/json","Access-Control-Allow-Origin" : "*"},
				data: { username: username, password: password},
				success: function (data) {
					console.log('works!');
				},
				error: function (xhr, ajaxOptions, thrownError) {
					console.log(xhr.status);
					console.log(xhr.responseText);
	        		//alert(thrownError);
				}
			});*/
			//$("#loginButton").attr("disabled","disabled");
			return false;
		}else{
			console.log('incomplete login');
			alert("Login failed");
			return false;
		}
	};
 
    this.initialize();
}

LoginView.template = Handlebars.compile($("#login-tpl").html());
//HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());

/*function verifyLogin(){
	//console.log('login bh!  '+document.getElementById("username").value+' - '+$('#password').val());
	var username = $('#username');
	var password = $('#password');
	var password_md5 = hex_md5(password.val());
	//console.log(username);
	if(username.val() != '' && password.val() != ''){
		//console.log('try to login! - pass: '+hex_md5(password.val()));
		$.ajax({
			type:"GET",
			url:"http://upsidecorp.net.ve/user_login.php?callback=?",
			dataType: "jsonp",
			contentType: "application/json; charset=utf-8",
			//headers : {Accept : "application/json","Access-Control-Allow-Origin" : "*"},
			data: { username: username, password: password_md5},
			success: function (data) {
				console.log('works!');
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(xhr.responseText);
        		//alert(thrownError);
			}
		});
		//$("#loginButton").attr("disabled","disabled");
	}else{
		console.log('incomplete login');
		alert("Login failed");
	}
}*/