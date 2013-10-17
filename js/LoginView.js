var LoginView = function() {
	this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        //this.el.on('keyup', '.search-key', this.findByName);
    };

    this.render = function() {
    	this.el.html(LoginView.template());
    	return this;
    };

    this.findByName = function() {
    	/*$.getJSON('http://upsidecorp.net.ve/get_users.php?callback=?','username='+$('.search-key').val(),function(res){
    		alert('asas');
		    
		});*/
    	$.ajax({
			type:"GET",
			url:"http://upsidecorp.net.ve/get_users.php?callback=?",
			dataType: "jsonp",
			contentType: "application/json; charset=utf-8",
			//headers : {Accept : "application/json","Access-Control-Allow-Origin" : "*"},
			data: { username: $('.search-key').val()},
			success: function (data) {
				if(data!=""){
					$('.employee-list').html(HomeView.liTemplate(data));
				}else{
					$('.employee-list').html('No results');
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(xhr.responseText);
        		//alert(thrownError);
			}
		});
	    /*store.findByName($('.search-key').val(), function(employees) {
	        $('.employee-list').html(HomeView.liTemplate(employees));
	        if (self.iscroll) {
	            console.log('Refresh iScroll');
	            self.iscroll.refresh();
	        } else {
	            console.log('New iScroll');
	            self.iscroll = new iScroll($('.scroll', self.el)[0], {hScrollbar: false, vScrollbar: false });
	        }
	    });*/
	};
 
    this.initialize();
}

LoginView.template = Handlebars.compile($("#login-tpl").html());
//HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());