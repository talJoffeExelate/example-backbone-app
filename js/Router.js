MovieApp.Router = Backbone.Router.extend({

    routes: {
        'search': 'search',
        '*path': 'search'
    },

    search: function(){
        var view = new MovieApp.Views.Search();
        $('#main').html(view.render().el);
    }
});