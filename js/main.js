var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    initialize: function() {
        var self = this;
        
        //this.store = new WebSqlStore(function() {
            $('body').html(new LoginView().render().el);
        //});
    }

};

app.initialize();