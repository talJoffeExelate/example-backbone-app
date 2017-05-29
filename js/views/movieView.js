MovieApp.Views.MovieView = Backbone.View.extend({

    tagName: 'li',
    className: 'list-group-item',

    initialize: function(options) {

        if (options.model)
            this.model = options.model;
    },

    render: function() {

        $(this.el).html(this.model.attributes.title+" ("+this.model.attributes.release_year+")");

        return this;
    }
});