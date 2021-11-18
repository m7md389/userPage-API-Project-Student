class Renderer {
    render(user) {
        this._userRender(user.info)
        this._friendsRender(user.friends)
        this._quoteRender(user.quote)
        this._pokemonRender(user.pokemon)
        this._meatRender(user.meat)
    }

    _userRender(user) {
        $(".user-container").empty()
        const source = $('#random-user').html()
        const template = Handlebars.compile(source)
        const newHTML = template({
            user
        })
        $(".user-container").append(newHTML)
    }

    _friendsRender(friends) {
        $(".friends-container").empty()
        const source = $('#random-friends').html()
        const template = Handlebars.compile(source)
        const newHTML = template({
            friends
        })
        $(".friends-container").append(newHTML)
    }

    _quoteRender(quote) {
        $(".quote-container").empty()
        const source = $('#random-quote').html()
        const template = Handlebars.compile(source)
        const newHTML = template({
            quote: quote
        })
        $(".quote-container").append(newHTML)
    }

    _pokemonRender(pokemon) {
        $(".pokemon-container").empty()
        const source = $('#random-pokemon').html()
        const template = Handlebars.compile(source)
        const newHTML = template({
            pokeName: pokemon.name,
            pokeImage: pokemon.picture
        })
        $(".pokemon-container").append(newHTML)
    }

    _meatRender(meat) {
        $(".meat-container").empty()
        const source = $('#random-meat').html()
        const template = Handlebars.compile(source)
        const newHTML = template({
            text: meat
        })
        $(".meat-container").append(newHTML)
    }
}