MovieApp.Views.Search = Backbone.View.extend({

    template: " <div class='input-group'> \
                    <input type='text' class='form-control' placeholder='Search for...'> \
                    <span class='input-group-btn'> \
                        <button class='btn btn-default' type='button'>Go!</button> \
                    </span> \
                </div> \
                <ul id='movie-list' class='list-group-item'></ul>",
    initialize: function(options) {},
    events: {
        'click button' : 'getmovies'
    },

    render: function()
    {
        $(this.el).html(this.template);
        return this;
    },
    getmovies: function() {

        var title = $(this.el).find('input').val();
        var movies = new MovieApp.Collections.Movies({title: title});
        // debugger

        movies.fetch({success: this.rendermovies.bind(this)});
    },
    rendermovies: function(movies) {

        var movieview;

        $(this.el).find('#movie-list').empty()//delete previous results
        for (var n in movies.models) {

            movieview = new MovieApp.Views.MovieView({model: movies.models[n]});
            $(this.el).find('#movie-list').append(movieview.render().el);
        }
    }
});