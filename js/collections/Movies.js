MovieApp.Collections.Movies = Backbone.Collection.extend({

    initialize: function(options){
        if (options.title)
            this.title = options.title;
    },

    url: function()
    {
        return "http://api-public.guidebox.com/v2/search?api_key="+guideboxApiKey+"&type=movie&field=title&query="+this.title;
    },

    parse: function(response)
    {
        return response.results;
    }
});